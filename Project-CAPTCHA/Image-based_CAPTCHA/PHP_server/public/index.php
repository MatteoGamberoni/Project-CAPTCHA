<?php session_start(); ?>
<?php require("botdetect.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
  <title>BotDetect PHP CAPTCHA Validation: Project CAPTCHA</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <link type="text/css" rel="Stylesheet" 
    href="<?php echo CaptchaUrls::LayoutStylesheetUrl() ?>" />


  <link type="text/css" rel="Stylesheet" href="stylesheet.css" />
</head>

<body>
    <div class="toolbar">Matteo Gamberoni s1040263 - Project CAPTCHA</div>
    
    <h1>BotDetect PHP CAPTCHA Validation</h1>
    
    <!-- CAPTCHA section -->
    <h3>CAPTCHA Challenge</h3>
    <form method="post" action="" class="column" id="form1">

    <fieldset>
      <legend>PHP CAPTCHA validation</legend>
      <label for="CaptchaCode">Retype the characters from the picture:</label>

      <?php // Adding BotDetect Captcha to the page
        $ExampleCaptcha = new Captcha("ExampleCaptcha");
        $ExampleCaptcha->UserInputID = "CaptchaCode";
        echo $ExampleCaptcha->Html();
      ?>

      <div class="validationDiv">
        <input name="CaptchaCode" type="text" id="CaptchaCode" />
        <input type="submit" name="ValidateCaptchaButton" 
          value="Validate" id="ValidateCaptchaButton" />

        <?php // when the form is submitted
          if ($_POST) {
            // validate the Captcha to check we're not dealing with a bot
            $isHuman = $ExampleCaptcha->Validate();

            if (!$isHuman) {
              // Captcha validation failed, show error message
              echo "<span class=\"incorrect\">Incorrect code</span>";
            } else {
              // Captcha validation passed, perform protected action
              echo "<span class=\"correct\">Correct code</span>";
            }
          }
        ?>
      </div>

    </fieldset>
  </form>
</body>
</html>

