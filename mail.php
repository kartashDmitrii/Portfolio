<?php

header('Access-Control-Allow-Origin: http://localhost:8000');
$name = "Undefined name";

if(isset($_POST['name'])){
    $name = $_POST['name'];
}

$message = "<p>Hi!</p>";
$message .= "<p>Wazaaaaa $name</p>";

$to_email = 'kartaschdim@gmail.com';
$subject = 'You Have Message';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Portfolio <noreply@formsubmitter.com>';

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>
