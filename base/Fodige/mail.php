<?php

// Define some constants
define( "RECIPIENT_NAME", "John Doe" );
define( "RECIPIENT_EMAIL", "tonmoymisal@gmail.com" );

// Read the form values
$success = false;
$userName = isset( $_POST['date'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['date'] ) : "";
$senderEmail = isset( $_POST['timepicker'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['timepicker'] ) : "";
$senderPhone = isset( $_POST['qtybutton'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['qtybutton'] ) : "";

// If all values exist, send the email
if ( $userName && $senderEmail && $userSubject && $message) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "Date: " . $userName . "";
  $msgBody = " Time: ". $senderEmail . " No Of Guest: ". $senderPhone . "";
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successsfull Submission
  header('Location: booking.html?message=Successfull');
}

else{
	//Set Location After Unsuccesssfull Submission
  	header('Location: booking.html?message=Failed');	
}

?>