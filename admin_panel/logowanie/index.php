<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		header('Location: po_zal.php');
		exit();
	}

?>

<!DOCTYPE html>
<html lang="PL">
    
<head>
    <meta charset="UTF-8">
    <link rel="Shortcut icon" href="../../files/admin-panel/padlock.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="KEYWORDS" content="goszczynski, goszczyński, seweryn, szkoła, 1 liceum ogólnokształcące, 1 lo, I lo, nowy targ, podhale, tischner, zespół szkół nr 1">
    <title>Logowanie I LO im. Seweryna Goszczyńskiego w Nowym Targu</title>
    <meta http-equiv="content-language" content="PL">
    <link href="styles.css" rel="stylesheet" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a81368914c.js"></script>
</head>

<body>
    <img class="fala" src="../../files/admin-panel/fala.png">
	<div class="container">
		<div class="img">
			<img src="../../files/admin-panel/login.svg">
		</div>
		<div class="logowanie">
			<form action="zaloguj.php" method="post">
				<img src="../../files/admin-panel/book.svg">
                <br><br>
				<h2 class="title">Witaj</h2>
           		<div class="input-div one">
           		   <div class="i">
						<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Nazwa użytkownika</h5>
           		   		<input type="text" name="login" class="input">
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Hasło</h5>
           		    	<input type="password" name="haslo" class="input">
            	   </div>
            	</div>
                <br>
				<?php
				if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
				?>
            	<input type="submit" class="btn" value="Zaloguj">
            </form>
        </div>
    </div>
	


    <script type="text/javascript" src="animation.js"></script>
</body>


</html>