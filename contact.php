<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. COLLECT DATA
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // 2. VALIDATION
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete the form and provide a valid email."]);
        exit;
    }

    // 3. SMTP CONFIGURATION (Hostinger Details)
    $to = "info@ronixe.com";
    $subject = "New Inquiry from Ronixe: $name";
    
    // Headers for standard mail() - Note: SMTP via PHPMailer is better,
    // but this is a standalone implementation using Hostinger's local relay.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: info@ronixe.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 4. SEND EMAIL
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong and we couldn't send your message."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission, please try again."]);
}
?>
