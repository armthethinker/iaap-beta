<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">

   <?php
      $title = "I Am A PROTOTYPE - A Movement for Humans-In-Flux";
      $description = "A movement meets storytelling meets meaningful products. We make stuff that helps humans-in-flux. Share your journeys and dreams with us. #iamaprototype";
      $imgURL = "http://iamaprototy.pe/img/icon-mountain.png";
   ?>

   <title><?= $title ?></title>

   <!-- All that meta   -->
   <meta name="description" content="<?= $description ?>" />
   <!-- Facebook / Open Graph-->
   <meta property="og:title" content="<?= $title ?>" />
   <meta property="og:url" content="http://iamaprototy.pe" />
   <meta property="og:description" content="<?= $description ?>" />
   <meta property="og:type" content="website" />
   <meta property="og:image" content="<?= $imgURL ?>" />
   <!-- Twitter -->
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:site" content="@hiprototypes">
   <meta name="twitter:title" content="<?= $title ?>">
   <meta name="twitter:description" content="<?= $description ?>">
   <meta name="twitter:image" content="<?= $imgURL ?>">

   <!-- Stylez -->
   <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400|Montserrat' rel='stylesheet' type='text/css'>
   <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400italic&text=Be%20a' rel='stylesheet' type='text/css'>
   <link href="dist/css/iamaprototype.min.css" rel="stylesheet">

   <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
   <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
   <![endif]-->
</head>
<body>
   <?php include('includes/components/nav.php') ?>
   <div class="container-fluid">