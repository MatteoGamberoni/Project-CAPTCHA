import os
import time
from keras.models import load_model
import pickle
import cv2
import numpy as np
from selenium import webdriver
from selenium.webdriver.common.by import By
import imutils


def initialize_driver():
    """Initialize the Selenium WebDriver for Firefox."""
    driver = webdriver.Firefox()  # Assumes geckodriver is in PATH
    driver.get('http://localhost:3000')  # Load the CAPTCHA webpage
    return driver


def resize_to_fit(image, width, height):
    """Resize image to the desired width and height with padding."""
    (h, w) = image.shape[:2]
    if w > h:
        image = imutils.resize(image, width=width)
    else:
        image = imutils.resize(image, height=height)

    padW = (width - image.shape[1]) // 2
    padH = (height - image.shape[0]) // 2
    image = cv2.copyMakeBorder(image, padH, padH, padW, padW, cv2.BORDER_REPLICATE)
    return cv2.resize(image, (width, height))


def preprocess_captcha(driver):
    """Capture, preprocess, and return the CAPTCHA image."""
    screenshot_path = "screenshot.png"
    cropped_image_path = "test.png"
    gray_image="gray_test.png"
    padded_image = "padded_test.png"
    threshhold_image = "threshhold_test.png"

    driver.save_screenshot(screenshot_path)

    img = cv2.imread(screenshot_path)
    crop_img = img[191:235, 30:278]
    cv2.imwrite(cropped_image_path, crop_img)

    gray = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)
    cv2.imwrite(gray_image, gray)
    
    padded = cv2.copyMakeBorder(gray, 20, 20, 20, 20, cv2.BORDER_REPLICATE)
    cv2.imwrite(padded_image, padded)
    
    thresholded = cv2.threshold(padded, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]
    cv2.imwrite(threshhold_image, thresholded)
    
    return thresholded


def segment_and_predict_captcha(model, label_binarizer, captcha_image):
    """Segment the CAPTCHA image and predict its characters."""
    contours = cv2.findContours(captcha_image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    contours = contours[1] if imutils.is_cv3() else contours[0]

    letter_image_regions = []
    for contour in contours:
        (x, y, w, h) = cv2.boundingRect(contour)
        if w / h > 3.0:  # Two letters attached
            half_width = w // 2
            letter_image_regions.append((x, y, half_width, h))
            letter_image_regions.append((x + half_width, y, half_width, h))
        else:
            letter_image_regions.append((x, y, w, h))

    print(len(letter_image_regions))
    if len(letter_image_regions) <= 60:  # Ensure only 4 letters are processed
        letter_image_regions = sorted(letter_image_regions, key=lambda x: x[0])
        predictions = []

        for x, y, w, h in letter_image_regions:
            letter_image = captcha_image[y:y + h, x:x + w]
            letter_image = resize_to_fit(letter_image, 20, 20)
            letter_image = np.expand_dims(letter_image, axis=2)
            letter_image = np.expand_dims(letter_image, axis=0)

            prediction = model.predict(letter_image)
            letter = label_binarizer.inverse_transform(prediction)[0]
            predictions.append(letter)

        return ''.join(predictions)
    return None


def main():
    # Load model and labels
    model = load_model("captcha_model.hdf5")
    with open("model_labels.dat", "rb") as file:
        label_binarizer = pickle.load(file)

    # Initialize WebDriver
    driver = initialize_driver()
    time.sleep(1)  # Allow page to load

    # Preprocess CAPTCHA
    captcha_image = preprocess_captcha(driver)

    # Solve CAPTCHA
    captcha_solution = segment_and_predict_captcha(model, label_binarizer, captcha_image)
    print("Detected CAPTCHA:", captcha_solution)

    if captcha_solution:
        # Input and submit the CAPTCHA
        captcha_input = driver.find_element(By.ID, "CaptchaCode")
        captcha_input.send_keys(captcha_solution)

        submit_button = driver.find_element(By.ID, "ValidateCaptchaButton")
        submit_button.click()

        # Display result
        time.sleep(1)
        result_message = driver.find_element(By.CLASS_NAME, "incorrect").text
        print("Result:", result_message)

    driver.quit()


if __name__ == "__main__":
    main()
