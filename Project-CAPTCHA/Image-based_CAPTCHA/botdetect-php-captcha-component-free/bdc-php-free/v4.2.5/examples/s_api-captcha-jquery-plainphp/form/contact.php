<?php header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  require('../botdetect-captcha-lib/simple-botdetect.php');

  $postedData = (array) json_decode(file_get_contents('php://input'), true);

  $name = $postedData['name'];
  $email = $postedData['email'];
  $subject = $postedData['subject'];
  $message = $postedData['message'];
  $userEnteredCaptchaCode = $postedData['userEnteredCaptchaCode'];
  $captchaId = $postedData['captchaId'];

  // validate the form data
  $error = array();

  if (!isValidName($name)) {
    $error['name'] = "Name must be at least 3 chars long!";
  }

  if (!isValidEmail($email)) {
    $error['email'] = "Email is invalid!";
  }

  if (!isValidSubject($subject)) {
    $error['subject'] = "Subject must be at least 10 chars long!";
  }

  if (!isValidMessage($message)) {
    $error['message'] = "Message must be at least 10 chars long!";
  }

  // validate the user entered captcha code
  if (!isCaptchaCorrect($userEnteredCaptchaCode, $captchaId)) {
    $error['userEnteredCaptchaCode'] = "CAPTCHA validation failed!";
    // TODO: consider logging the attempt
  }

  if (empty($error)) {
    // TODO: all validations succeeded; execute the protected action
    // (send email, write to database, etc...)
  }

  // return the json string with the validation result to the frontend
  $result = array('success' => empty($error), 'errors' => $error);
  echo json_encode($result, true); exit;
}

// the captcha validation function
function isCaptchaCorrect($userEnteredCaptchaCode, $captchaId) {
  // create a captcha instance to be used for the captcha validation
  $captcha = new SimpleCaptcha();
  // execute the captcha validation
  return $captcha->Validate($userEnteredCaptchaCode, $captchaId);
}

function isValidName($name) {
  if($name == null) {
    return false;
  }
  return (strlen($name) >= 3);
}

function isValidEmail($email) {
  if($email == null) {
    return false;
  }

  return preg_match("/^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$/", $email, $matches);
}

function isValidSubject($subject) {
  if($subject == null) {
    return false;
  }

  return (strlen($subject) > 9) && (strlen($subject) < 255);
}

function isValidMessage($message) {
  if($message == null) {
    return false;
  }

  return (strlen($message) > 9) && (strlen($message) < 255);
}