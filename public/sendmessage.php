<?php
  $content = "";
  $emailContent = "";
  
  foreach ($_POST as $key => $value) {
    if($value) {
      $content .= "<b>$key</b>: <i>$value</i>\n";
      $emailContent .= "$key: $value\n";
    }
  }
  
  if(trim($content)){
    // Формируем сообщение для Telegram
    $content = "<b>Сообщение с сайта:</b>\n".$content;
    
    // Отправка в Telegram
    $apiToken = "7921130641:AAH89jkyf5r_nUFtfaE7t6m5eGqySSUKC98";
    $data = [
      'chat_id' => '@website_ivanmax',
      'text' => $content,
      'parse_mode' => 'HTML'
    ];
    $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
    
    // Отправка на email
    $to = "ivanmax29@yandex.ru"; // Укажите вашу почту
    $subject = "Новая заявка с сайта";
    $headers = "From: test@astro-lina.ru\r\n"; // Укажите email отправителя
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $emailMessage = "Новая заявка с сайта:\n\n" . $emailContent;
    
    mail($to, $subject, $emailMessage, $headers);
  }

/*1. Заменить "your@email.com" на адрес, на который должны приходить заявки
2. Заменить "website@yourdomain.com" на email, от имени которого будут отправляться письма (обычно это адрес на вашем домене)

В результате:
- Каждая заявка будет отправляться и в Telegram, и на указанный email
- В email сообщение придёт в текстовом формате для лучшей читаемости
- Сохранена оригинальная функциональность отправки в Telegram*/
?>

 