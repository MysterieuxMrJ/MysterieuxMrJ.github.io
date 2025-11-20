<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    if ($name && $email && $subject && $message) {
        $to = "julesv1411@gmail.com"; // Remplacez par votre adresse
        $email_subject = "Nouveau message de: $name - $subject";
        $email_body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $email_subject, $email_body, $headers)) {
            echo "true"; // Indique succès au JavaScript
        } else {
            echo "false"; // Indique échec au JavaScript
        }
    } else {
        echo "invalid"; // Indique erreur de validation
    }
} else {
    echo "robot"; // Si l'accès n'est pas via POST
}
?>
