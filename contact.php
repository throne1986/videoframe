<?php

ini_set('display_errors',0);
$result = [];

// Check if name has been entered
if (!isset($_POST['name']) || strlen($_POST['name']) === 0) {
    $result['error_form']['name'] = 'Please enter your name';
}

// Check if email has been entered and is valid
if (!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $result['error_form']['email'] = 'Please enter a valid email address';
}

//Check if message has been entered
if (!isset($_POST['message']) || strlen($_POST['message']) === 0) {
    $result['error_form']['message'] = 'Please enter your message';
}

/*
//Check if simple anti-bot test is correct
if ($human !== 5) {
    $errHuman = 'Your anti-spam is incorrect';
} */

// If there are no errors, send the email
if (empty($result['error_form'])) {


    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    /*$human = intval($_POST['human']); */
    $from = 'Geofrey Zellah';
    $to = 'hotbonge@gmail.com';
    $subject = 'Message from Geofrey Zellah ';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if (mail ($to, $subject, $body, $from)) {
        $result['success']='Thank You! I will be in touch';
    } else {
        $result['error_mail']='Sorry there was an error sending your message. Please try again later';
    }
}

header('Content-type: application/json'); // tell browser what to expect
echo json_encode($result); // encode array to json object so javascript can work with it