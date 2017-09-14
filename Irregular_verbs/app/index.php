<?php
  header( 'Content-Type: text/html; charset=utf-8' );
  header('Cache-COntrol: no-store, no-cache');
  header('Expires: ' . date('r'));
  error_reporting(0);
?>
<!DOCTYPE html>
<html lang="ru">
  <head itemscope itemtype="http://verb.nucknine.com">
    <meta charset="utf-8">
    <meta name="yandex-verification" content="9620c28b75cec075" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="keywords" content="Все неправильные глаголы в английском языке">
    <meta name="author" content="Oleg Maximov">
    <meta name="description" content="Поиск неправильных глаголов в английском языке">
    <link rel="canonical" href="https://verb.nucknine.com/" itemprop="url">
    <link rel="stylesheet" href="css/main.min.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">
    <title itemprop='name'>Неправильные глаголы английского языка. Таблица неправильных глаголов</title>
  </head>
  <body>
    <div class="pattern">
    </div>
    <header class="header">
      <!--<nav class="nav">-->
      <!--  <ul class="nav__nav-row">-->
      <!--    <li class="nav__nav-list"><a class="nav__nav-link" href="#">другие проекты</a>-->
      <!--    </li>-->
      <!--    <li class="nav__nav-list"><a class="nav__nav-link" href="#">контакты</a>-->
      <!--    </li>-->
      <!--    <li class="nav__nav-list"><a class="nav__nav-link" href="#">еще</a>-->
      <!--    </li>-->
      <!--  </ul>-->
      <!--</nav>-->
    </header>
    <section class="content-section">
      <div class="content">
        <form class="form" >
          <input id="txtVerb" value="<?=$value?>" class="form__input-text" type="text" name="infinitive" placeholder="Введите infinitive глагол" maxlength="17" required pattern="^[a-zA-Z]+$"/>
          <button id="sub" class="form__input-submit" value="поиск">Поиск</button>
        </form>
        <div id="result">
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-copy">
        <p>made by<a class="footer-copy__link" href="#"> nucknine</a> <?=date('Y')?>
        </p>
      </div>
      <div class="social-icons">
        <div class="social-icons__icon social-icons__icon_fb"><a class="social-icons__link" href="#">
          <svg class="icon icon-facebook ">
            <use xlink:href="img/icons/svg/sprite/sprite.svg#facebook"></use>
          </svg></a>
        </div>
        <div class="social-icons__icon social-icons__icon_vk"><a class="social-icons__link" href="#">
          <svg class="icon icon-vk ">
            <use xlink:href="img/icons/svg/sprite/sprite.svg#vk"></use>
          </svg></a>
        </div>
        <div class="social-icons__icon social-icons__icon_git"><a class="social-icons__link" href="#">
          <svg class="icon icon-github ">
            <use xlink:href="img/icons/svg/sprite/sprite.svg#github"></use>
          </svg></a>
        </div>
      </div>
    </footer>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script>
  window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>');
  </script>
  <script src="js/libs.min.js"></script>
  <script src="js/common.js"></script>
  </body>
</html>