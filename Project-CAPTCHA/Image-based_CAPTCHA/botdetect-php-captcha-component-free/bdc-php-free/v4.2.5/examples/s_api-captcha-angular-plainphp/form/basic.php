<?php header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  require('../botdetect-captcha-lib/simple-botdetect.php');
  
  $postedData = (array) json_decode(file_get_contents('php://input'), true);

  $userEnteredCaptchaCode = $postedData['userEnteredCaptchaCode'];
  $captchaId = $postedData['captchaId'];

  // create a captcha instance to be used for the captcha validation
  $captcha = new SimpleCaptcha();
  // execute the captcha validation
  $isHuman = $captcha->Validate($userEnteredCaptchaCode, $captchaId);

  if ($isHuman == false) {
    // captcha validation failed
    $result = array('success' => false);
    // TODO: consider logging the attempt
  } else {
    // captcha validation succeeded
    $result = array('success' => true);
  }

  // return the json string with the validation result to the frontend
  echo json_encode($result); exit;
}