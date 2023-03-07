<?php

//start session on web page
session_start();

//config.php

//Include Google Client Library for PHP autoload file
require_once 'vendor/autoload.php';

//Make object of Google API Client for call Google API
$google_client = new Google_Client();

//Set the OAuth 2.0 Client ID
$google_client->setClientId('636717191793-hesv7embavd70rupc9j0r1m7k0q52nol.apps.googleusercontent.com');

//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret('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');

//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('http://localhost/index.php');

// to get the email and profile 
$google_client->addScope('email');

$google_client->addScope('profile');

?>