<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
		integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
	<link href="http://fonts.cdnfonts.com/css/balqis" rel="stylesheet">
	<link rel="icon" href="images/shary.png">
	<link rel="stylesheet" href="../scss/style.css">
	<title>Cappadocia</title>
</head>

<body>

	<nav class="header__container__nav">
		<ul class="header__container__nav__ul">
			<li class="header__container__nav__ul__li">
				<a href="#slaider__two" class="header__container__nav__ul__li__link">Маршрут</a>
				<a href="#SultanCanve" class="header__container__nav__ul__li__link">Отель</a>
				<a href="#price" class="header__container__nav__ul__li__link">Стоимость</a>
			</li>
		</ul>
		<i class="fas fa-phone-alt"><span class="tel"><a href="#">+38(066)555-777-6</a></span></i>
	</nav>
	<header id="header">
		<div class="container">
			<div class="header__container">
			</div>
			<div class="hero">
				<div class="zaga">
					<h1 class="h1">Cappadocia</h1>
					<h2 class="h2">Эксклюзивный тур</h2>
				</div>
			</div>
		</div>
	</header>

	<section id="slaider">
		<h2 class="Slaider__Zag">
			Fairy tail
		</h2>
		<p class="Slaider__pot">Сказочная страна чудес</p>
		<div class="Slaider__content">

			<div class="img__slaider">
				<img src="../images/ft1.png" class="imgSlaiber" id="slider1_img">
				<img onclick="change('left', '#slider1_img')" src="../images/влево.png" class="img__back hover">
				<img onclick="change('right', '#slider1_img')" src="../images/вправо.png" class="img__next hover">
			</div>

			<div class="content__text">
				<p class="Slaider__text">Каппадокия - сказочная страна воздушных шаров, сырных домиков, разноцветных дол
					ин и волшебных рассветов!
					Сюда приезжают, чтобы увидеть природные чудеса, полетать на воздушном шаре и конечно же сделать
					миллион красивых фотографий! </p>
				<p class="Slaider__text ">
					Участников тура ждёт профессиональная фотосессия от лучших фотографов Каппадокии!
					Ведь именно за волшебными фото на рассвете на фоне воздушных шаров сюда приезжают люди со всего
					мира!
				</p>
				<p class="Slaider__text">
					<b>Также Вы увидите:</b>
				</p>
				<p class="Slaider__text muz">
					Музей на открытом воздухе в Гёреме
					Ущелье Ыхлара и монастырь Селиме
					Подземные города
					Крепость Учхисар
					Зельве и Пашабаг
				</p>
				<p class="Slaider__text">
					и многие другие достпримечательности.
				</p>
				<p class="Slaider__text">
					Местная кухня — один из поводов посетить Каппадокию, здесь есть рестораны на любой бюджет.
				</p>
			</div>
		</div>
	</section>

	<section id="slaider__two">
		<div class="content__slaider">
			<div class="text-two">
				<h2 class="Slaider__Zag zag">
					Our trip
				</h2>
				<p class="Slaider__pot pot">Маршут</p>
				<p class="two_num">
					<b>День 1</b>
				</p>
				<p class="slaider_two_text">
					Прилёт в Анкару
					Трансфер в Каппадокию
					Солёное озеро
					Приезд в Гёреме
					Ужин
				</p>
				<p class="two_num">
					<b>День 2</b>
				</p>
				<p class="slaider_two_text dey_two">
					Фотосессия<br>
					Завтрак в отеле <br>
					Дневной тур по Каппадокии
					Закат с панорамным видом
				</p>
				<p class="two_num">
					<b>День 3</b>
				</p>
				<p class="slaider_two_text">
					Полёт на воздушном шаре
					Завтрак в отеле
					Экскурсии на выбор
				</p>
				<p class="two_num">
					<b>День 4</b>
				</p>
				<p class="slaider_two_text dey_twoo">
					Свободное время, шоппинг
					Трансфер в Анкару
					Вылет в Киев
				</p>
				<button onclick="show()" class="link">ЗАБРОНИРОВАТЬ</button>
			</div>
			<div class="two_slaid">
				<div class="Slaider__two">
					<img id="slider2_img" src="../images/ot1.png" class="slaid">
					<img onclick="change('left', '#slider2_img')" src="../images/влево.png" class="img__back__two hover">
					<img onclick="change('right', '#slider2_img')" src="../images/вправо.png" class="img__next__two hover">
				</div>
			</div>
		</div>
	</section>

	<section id="SultanCanve">
		<div class="container">
			<h2>Hotel</h2>
			<p class="Canve__p">Sultan Cave Suites</p>
			<div class="SultanCanve__box">
				<div class="SultanCanve__box-1">
				</div>
				<div class="SultanCanve__box-2">
					<p class="Cave__text">В этом уникальном отеле, расположенном на вершине холма Айдынлы, вы можете забронировать
						высеченные в скале номера, обставленные антикварной мебелью со всей Турции. С солнечной террасы отеля
						открывается прекрасный панорамный вид на Национальный парк Гереме.
					</p>
					<p class="Sultan__text">
						Большинство номеров отеля Sultan Cave Suites высечены в скале, что обеспечивает прохладу и покой. Все номера
						оборудованы гостиной зоной и современной ванной комнатой. В большинстве из них есть собственная терраса или
						балкон
					</p>
					<p class="Sultan__text">
						Отель Cave Suites Sultan располагает изысканным рестораном, где подают фирменные блюда региона Каппадокии.
						После ужина, пройдя на террасу, вы сможете заказать напиток и полюбоваться закатом солнца над деревней.
					</p>
					<div class="Cave__box">
						<div class="Canve__block">
							<div class="block-1"><img src="../images/hotel21.png" alt="" class="block-1"></div>
							<div class="block-2"><img src="../images/hotel22.png" alt="" class="block-2"></div>
						</div>
						<div class="Canve__block canve">
							<div class="block-1"><img src="../images/hotel23.png" alt="" class="block-1"></div>
							<div class="block-2"><img src="../images/hotel24.png" alt="" class="block-2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="service">
		<div class="container">
			<h2>Price</h2>
			<p id="ppp">Стоимость услуг</p>
			<div class="text">
				<h3>Включено</h3>
				<p>Проживание в двухместном номере в отеле с завтраками</p>
				<p class="p">Индивидуальный трансфер для нашей группы из Анкары и обратно</p>
				<p>Экскурсия на Солёное озеро
				</p>
				<p class="p">Индивидуальная дневная экскурсия по лучшим местам Каппадокии с личным транспортом
				</p>
				<p>Фотосессия с профессиональным фотографом для каждой участницы
					(Несколько локаций, 5 лучших фото в обработке фотографа и весь материал (до 100 фотографий)
				</p>

			</div>
			<div class="text2">
				<h3>Не включено</h3>
				<p>Авиа Киев-Анкара-Киев (140-170$)</p>
				<p>Обеды и ужины (150$ на поездку)</p>
				<p>Воздушный шар 200$</p>

			</div>
			<img class="w" src="../images/shary.png" alt="">
		</div>
	</section>

	<section id="price">
		<div class="container">
			<div class="price__left">
				<div class="price__title">
					<div>
						<h2 id="date"></h2>
						<p>Ближайшая дата тура</p>
					</div>
					<div>
						<h2>490$</h2>
						<p>Стоимость</p>
					</div>
				</div>
				<span>
					<p>Оставить заявку или задать вопрос</p>
					<input type="text" placeholder="Имя">
					<input type="text" placeholder="Телефон">
					<button onclick="show()">ОСТАВИТЬ ЗАЯВКУ</button>
				</span>
			</div>
			<img src="../images/price.png">
		</div>
	</section>

	<footer id="footer">
    <div class="container">
        <div class="footer__box">
            <div class="footer__block">
                <img src="../images/ball.png" alt="" class="footer__img">
                <h3 class="footer__h3">Contacts</h3>
                <div class="icon__footer">
                    <div class="icons"><a href="" class="footer__i"><i class="fas fa-phone-alt fa-phone fa-2x"></i>+38(066)555-777-6</a></div>
                    <div class="icons"><a href="" class="footer__i"><i class="fas fa-envelope fa-envelope fa-2x"></i>сappadocia.tours@gmail.com</a></div>
                </div>
                <div class="footer__icons">
                    <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
                    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1637278002&extra_1=s%7Cc%7C313958888526%7Ce%7Cfacebook%7C&placement=&creative=313958888526&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1637278002%26adgroupid%3D62332989517%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1009828%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71B8e4iGL1-JaCK5NAMEmaSUoeIw-78xS5EXzzAMwsRLr_zcWtBPxukaAgR2EALw_wcB" target="_blank"><i class="fab fa-facebook fa-2x" ></i></a>
                    <a href="https://www.instagram.com/"><i class="fab fa-instagram fa-2x" target="_blank"></i></a>
                </div>
            </div>
            <h2 class="footer__h2">Dreams come true</h2>
        </div>
    </div>
</footer>

	<a href="#header" id="button__up">
		<i class="fas fa-arrow-circle-up fa-3x"></i>
	</a>


	<div class="modal" id="modal">
		<div class="message">
			<h2>Thanks!</h2>
			<p>Наша группа свяжется с вами в <br> ближайшее время.</p>
			<button onclick="hide()">Хорошо</button>
		</div>
	</div>

	<script src="../js/main.js"></script>
</body>

</html>
