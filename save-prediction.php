<?php
// Get the prediction details from the request body
$predictionDetails = json_decode(file_get_contents('php://input'), true);

// Format the prediction details into a string
$predictionString = "Name: " . $predictionDetails['name'] . "\n";
$predictionString .= "Roll Number: " . $predictionDetails['rollNumber'] . "\n";
$predictionString .= "Marks: " . $predictionDetails['marks'] . "\n";
$predictionString .= "Branch: " . $predictionDetails['branch'] . "\n";
$predictionString .= "Caste: " . $predictionDetails['caste'] . "\n";
$predictionString .= "Mobile Number: " . $predictionDetails['mobileNumber'] . "\n";
$predictionString .= "Predicted Rank: " . $predictionDetails['predictedRank'] . "\n\n";

// Append the prediction details to a text file
$file = 'prediction_details.txt';
file_put_contents($file, $predictionString, FILE_APPEND | LOCK_EX);

echo "Prediction details saved successfully";
?>
