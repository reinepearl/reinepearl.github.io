<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "rainli030@gmail.com";
    $email_subject = "New Contact Form Submission";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['userName']) ||
        !isset($_POST['emailAddress']) ||
        !isset($_POST['formMessage']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $user_name = $_POST['userName']; // required
    $email_address = $_POST['emailAddress']; // required
    $form_message = $_POST['formMessage']; // required
    $user_website = $_POST['webSite']; // not required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_address)) {
    $error_message .= 'We are sorry, but the email address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$form_message)) {
    $error_message .= 'We are sorry. Please type your message again.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Username: ".clean_string($user_name)."\n";
    $email_message .= "Email Address: ".clean_string($email_address)."\n";
    $email_message .= "Message: ".clean_string($form_message)."\n";
    $email_message .= "Use Website: ".clean_string($user_website)."\n";
 
// create email headers
$headers = 'From: '.$form_message."\r\n".
'Reply-To: '.$form_message."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
 
}
?>