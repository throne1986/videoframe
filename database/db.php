<?php
    define('dbHost', 'localhost');
    define('dbUser', 'vadmin');
    define('dbPassword', 'mashiwa1986');
    define('dbName', 'videoframe');
    error_reporting(E_ALL ^ E_NOTICE);

    $db = mysqli_connect(dbHost, dbUser, dbPassword, dbName);

    if(mysqli_connect_errno()) { //if connection database fails
        echo("Connection not established ");
    }  //by now we have connection to the database

echo json_encode(["eded","Edede"]);

?>