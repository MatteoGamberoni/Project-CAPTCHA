"""
Module used to create a Selenium bot to interact with a local server for
project CAPTCHA.
"""

from selenium import webdriver
from selenium.webdriver.common.by import By


class SelBot():
    """
    Selenium bot class used to fetch the website, get the CAPTCHA and submit
    the answer.
    """

    def __init__(self):
        self.driver = SelBot.initialize_driver()

    @staticmethod
    def initialize_driver():
        """ Initialize a Firefox driver and gets URL of server."""
        driver = webdriver.Firefox()
        driver.get('http://localhost:3000')
        return driver

    def get_captcha_question(self):
        """Retrieve the CAPTCHA question from the web-page."""
        return self.driver.find_element(By.ID, 'captchaQuestion').text

    def submit_answer(self, answer):
        """Submit the generated answer to the CAPTCHA input field."""
        captcha_input = self.driver.find_element(By.ID, 'captchaAnswer')
        captcha_input.send_keys(answer)

        submit_button = self.driver.find_element(
            By.XPATH, "//button[text()='Submit Answer']")
        submit_button.click()

    def print_result_message(self):
        result_message = self.driver.find_element(By.ID, 'resultMessage')
        return "Result: " + result_message.text + "\n\n"
