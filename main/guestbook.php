<!DOCTYPE html>
<html>
<head>
    <title>Отправка сообщения в БД</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo-container">
            <div class="logo">
                <img src="../imgs/logo.jpg" alt="Логотип" class="logo">
            </div>
            <h1 style="padding: 20px;">Энциклопедия музыкальных инструментов</h1>
        </div>
    </header>
    <div class = "content">
    <h1>Статус отправки</h1>
    <?php
    // Создание подключения
    $conn = mysqli_connect("localhost", "root", "root", "gbook");
    // Проверка подключения
    if (!$conn) {
        die("Ошибка подключения: " . mysqli_connect_error());
    }
    // Установка кодировки
    mysqli_set_charset($conn, "utf8mb4_bin");
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);
        
        $sql = "INSERT INTO entries (name, message) VALUES ('$name', '$message')";
        
        // Выполнение запроса к БД
        if (mysqli_query($conn, $sql)) {
            echo "Сообщение успешно отправлено. <br> 
            <a href='MusicInstrumentMain.html'>Вернуться в главное меню</a>";
        } else {
            echo "Ошибка: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
    mysqli_close($conn);
    ?>
    </div>
</body>
</html>