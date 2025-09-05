<?php
// processa_contato.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $assunto = htmlspecialchars($_POST['assunto']);
    $mensagem = htmlspecialchars($_POST['mensagem']);
    
    $destinatario = "deny.fdasilva@hotmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $corpo_email = "
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> $nome</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Assunto:</strong> $assunto</p>
        <p><strong>Mensagem:</strong><br> $mensagem</p>
    ";
    
    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>