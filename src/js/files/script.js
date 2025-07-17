// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================

// file input
const fileInputs = document.querySelectorAll('input[type="file"]');
let uploadedImages = [];

if (fileInputs) {
	fileInputs.forEach(fileInput => {
		const id = fileInput.getAttribute('id').replace('input-file-', '');
		const imgContainer = document.querySelector(`#filename-${id}`);
		fileInput.addEventListener('change', (event) => {
			let fileList = event.target.files;
			for (let i = 0; i < fileList.length; i++) {

				const file = fileList[i];
				const reader = new FileReader();
				reader.readAsDataURL(file);

				reader.onload = () => {
					const fileName = file.name;
					uploadedImages.push(fileName);
					fetch('/file',)
						.then(res => {
							const div = document.createElement('div');
							div.className = 'form-tabs__file-input-value';
							div.dataset.image = fileName;
							div.innerHTML = `
							    <img src="../img/icons/file.svg" alt>
								 <div class="form-tabs__input-file-name input-file-name">${fileName}</div>
								 `;
							imgContainer.appendChild(div);
							imgContainer.classList.add("_active")

						})
						.catch(err => console.error('There was a problem with a fetch operation:', err))
				}

			}

		})
	});
}

//Видео в табах

// Контейнер со всеми видео
const videosWrap = document.querySelector('.tabs__videos');

// Обработчик клика
const videoEventHandler = (e) => {
	// Если у e.target нет класа video-item-programs__item, значит данный элемент не является видео
	if (!e.target.classList.contains('tabs__video-item')) return false;
	const video = e.target,
		allVideos = document.querySelectorAll('.tabs__video-item');

	const overlay = document.querySelectorAll('.tabs__icon');
	// Останавливаем все видео
	allVideos.forEach((source, index) => {
		if (source === video) return;
		source.classList.remove('isPlaying');
		source.pause();
		overlay[index].classList.remove('_active');
	})
	// Если у видео есть класс isPlaying - тогда остановить его, если нет - запустить
	if (video.classList.contains('isPlaying')) {
		video.closest('div').querySelector('.tabs__icon').classList.remove('_active');
		video.pause()
	} else {
		video.closest('div').querySelector('.tabs__icon').classList.add('_active');
		video.play()
	}
	video.classList.toggle('isPlaying')
}

// Event listener на контейнер со всеми видео
if (videosWrap) {
	videosWrap.addEventListener('click', (e) => videoEventHandler(e))
}

//========================================================================================================================================================

//Шапка каталог

const catalogHeaderTitle = document.querySelector('.catalog-header__title');
const catalogHeaderBlock = document.querySelector('.catalog-header__block');

function catalogHeader() {
	if (catalogHeaderTitle) {
		if (document.documentElement.clientWidth > 992) {
			catalogHeaderTitle.addEventListener("mouseenter", function () {
				catalogHeaderTitle.classList.add("_active");
			});
			catalogHeaderBlock.addEventListener("mouseenter", function () {
				catalogHeaderTitle.classList.add("_active");
			});
			catalogHeaderBlock.addEventListener("mouseleave", function () {
				catalogHeaderTitle.classList.remove("_active");
			});
			catalogHeaderTitle.addEventListener("mouseleave", function () {
				catalogHeaderTitle.classList.remove("_active");
			});
		} else {
			catalogHeaderTitle.addEventListener("click", function () {
				catalogHeaderTitle.classList.toggle("_active");
			});
			catalogHeaderBlock.addEventListener("click", function () {
				catalogHeaderTitle.classList.toggle("_active");
			});
		}
	}
}

const items = document.querySelectorAll('.catalog-header__item'); // получаем коллекцию элементов
const catalogHeaderSubtitle = document.querySelectorAll('.catalog-header__subtitle');

if (items.length > 0) {
	items.forEach(function (e) {
		e.addEventListener('mouseenter', function (e) {
			e.target // получаем таргет
				.closest('.catalog-header__link')
				.querySelector('.catalog-header__subtitle')
				.classList.add('_active');
		});

		e.addEventListener('mouseleave', function (e) {
			e.target
				.closest('.catalog-header__link')
				.querySelector('.catalog-header__subtitle')
				.classList.remove('_active');
		});
	});
}

catalogHeader();
window.addEventListener('resize', catalogHeader)

//========================================================================================================================================================

//Яндекс карта

ymaps.ready(init);

function init() {
	var myMap1 = new ymaps.Map('map', {
		center: [59.974157564108125, 30.372704499999987],
		zoom: 16,
		controls: ['zoomControl'],
		behaviors: ['drag']
	});
	var myMap2 = new ymaps.Map('map2', {
		center: [55.64031406909694, 37.42576400000001],
		zoom: 16,
		controls: ['zoomControl'],
		behaviors: ['drag']
	});
	var myMap3 = new ymaps.Map('map3', {
		center: [45.0419355745865, 39.08419799999997],
		zoom: 16,
		controls: ['zoomControl'],
		behaviors: ['drag']
	});
	var myPlacemark1 = new ymaps.Placemark(myMap1.getCenter(), {
		latitude: 59.974157564108125,
		longitude: 30.372704499999987,
		hintContent: '<div class="map__hint">ООО "ОПТИМА"</div>',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/contacts/map.png',
		iconImageSize: [26, 35],
		iconImageOffset: [-7, -37],
	});
	var myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
		latitude: 59.974157564108125,
		longitude: 30.372704499999987,
		hintContent: '<div class="map__hint">ООО "ОПТИМА"</div>',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/contacts/map.png',
		iconImageSize: [26, 35],
		iconImageOffset: [-7, -37],
	});
	var myPlacemark3 = new ymaps.Placemark(myMap3.getCenter(), {
		latitude: 59.974157564108125,
		longitude: 30.372704499999987,
		hintContent: '<div class="map__hint">ООО "ОПТИМА"</div>',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/contacts/map.png',
		iconImageSize: [26, 35],
		iconImageOffset: [-7, -37],
	});

	myMap1.geoObjects.add(myPlacemark1);
	myMap2.geoObjects.add(myPlacemark2);
	myMap3.geoObjects.add(myPlacemark3);
};

//========================================================================================================================================================

//Поиск

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const header = document.querySelector('.header');
	const centerHeaderInput = document.querySelector('.center-header__input');
	const centerHeaderLogo = document.querySelector('.center-header__logo');
	const centerHeaderDesc = document.querySelector('.center-header__desc');
	const centerHeaderBasket = document.querySelector('.center-header__basket');
	const centerHeader = document.querySelector('.header__center');
	const centerHeaderSearch = document.querySelector('.center-header__search');
	const headerHint = document.querySelector('.header__hint');
	const headerIcon = document.querySelector('.top-header__icon');

	if (centerHeaderSearch) {
		centerHeaderSearch.addEventListener('click', () => { // при клике на кнопку
			centerHeaderInput.classList.add('_active') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
			centerHeaderSearch.classList.add('_active');
			centerHeaderLogo.classList.add('_active');
			centerHeaderDesc.classList.add('_active');
			centerHeaderBasket.classList.add('_active');
			centerHeader.classList.add('_active');
			headerHint.classList.add('_active');
			headerIcon.classList.add('_active');
			header.classList.add('_active');
		})
		window.addEventListener('click', e => { // при клике в любом месте окна браузера
			const target = e.target // находим элемент, на котором был клик
			if (!target.closest('.center-header__input') && !target.closest('.center-header__search')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
				centerHeaderInput.classList.remove('_active') // то закрываем окно навигации, удаляя активный класс
				centerHeaderSearch.classList.remove('_active');
				centerHeaderLogo.classList.remove('_active');
				centerHeaderDesc.classList.remove('_active');
				centerHeaderBasket.classList.remove('_active');
				centerHeader.classList.remove('_active');
				headerHint.classList.remove('_active');
				headerIcon.classList.remove('_active');
				header.classList.remove('_active');
			}
		})
	}

})

//========================================================================================================================================================

//Копировать в буффер обмена купон продукты

const copyText = document.querySelector('#input');
const copyTextMob = document.querySelector('#inputmob');

if (copyText) {
	function copy() {
		copyText.select();
		document.execCommand("copy");
	}

	document.querySelector('#copy').addEventListener("click", copy);
}

if (copyTextMob) {
	function copymob() {
		copyTextMob.select();
		document.execCommand("copy");
	}

	document.querySelector('#copymob').addEventListener("click", copymob);
}

//========================================================================================================================================================

const menuTitle = document.querySelector('.menu__title');
const menuSublist = document.querySelector('.menu__sublist');

if (menuTitle) {
	menuTitle.addEventListener('click', () => {
		menuSublist.classList.toggle("_active");
	})
}

//========================================================================================================================================================

//Способ оплаты

let paymentMethods = document.querySelector('.payment-methods__body');

if (paymentMethods) {
	var elemCount = document.getElementsByClassName("payment-methods__body")[0].childElementCount;
	let buttons = document.querySelector('.payment-methods__form.buttons');

	if (elemCount > 3) {
		buttons.classList.add("_active")
	} else {
		buttons.classList.remove("_active")
	}
}

//========================================================================================================================================================

//Способ доставки

let deliveryCity = document.querySelector('.delivery-city');
let totalSubsum = document.querySelector('.total__subsum');

let deliveryToTransport = document.querySelector('.last-delivery-to-transport');
let deliveryOptionsTransport = document.querySelector('.delivery-options__transport');
let deliveryTransportForms = document.querySelector('.delivery-options__transport-forms');
let deliveryTransportForm = document.querySelector('.delivery-transport__form');

//доставка по городу
if (deliveryCity) {
	deliveryCity.addEventListener('click', () => {
		totalSubsum.classList.add("_active");
	})

	window.addEventListener('click', e => { // при клике в любом месте окна браузера
		const target = e.target // находим элемент, на котором был клик
		if (!target.closest('.delivery-city') && !target.closest('.delivery-city')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
			totalSubsum.classList.remove("_active");
		}
	})
}

//доставка на транспортную
if (deliveryToTransport) {
	deliveryToTransport.addEventListener('click', () => {
		deliveryOptionsTransport.classList.add("_active");
		deliveryTransportForms.classList.add("_active");
	})

	window.addEventListener('click', e => { // при клике в любом месте окна браузера
		const target = e.target // находим элемент, на котором был клик
		if (!target.closest('.last-delivery-to-transport') && !target.closest('.delivery-transport__form') && !target.closest('.delivery-options__transport-forms')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
			deliveryOptionsTransport.classList.remove("_active");
			deliveryTransportForms.classList.remove("_active");
		}
	})
}

//========================================================================================================================================================

function scrollCompare() {

	let speed = 2; // Скорость скролла.

	let scroll = document.querySelector('.product-selection__select');

	let left = 0;
	let top = 0;
	let drag = false;
	let coorX = 0;
	let coorY = 0;

	if (scroll) {
		scroll.addEventListener('mousedown', function (e) {
			drag = true;
			coorX = e.pageX;
			coorY = e.pageY;
		});

		document.addEventListener('mouseup', function () {
			drag = false;
			left = scroll.scrollLeft;
			top = scroll.scrollTop;
		});

		scroll.addEventListener('mousemove', function (e) {
			if (drag) {
				this.scrollLeft = left - (e.pageX - coorX) * speed;
				this.scrollTop = top - (e.pageY - coorY) * speed;
			}
		});

		scroll.addEventListener('scroll', function (e) {
			if (window.innerWidth > 768) {
				scroll.style.setProperty('--top', scroll.scrollTop + 'px');
			} else {
				scroll.style.setProperty('--top', scroll.scrollTop + 'px');
			}

		});

		window.addEventListener('resize',
			e => scroll.dispatchEvent(new CustomEvent('scroll'))
		);
	}

};

scrollCompare();

//========================================================================================================================================================

//Копировать в буффер обмена купон на скидку

const copyTextCouponSale = document.querySelector('#input-coupon-sale');

if (copyTextCouponSale) {
	function copy() {
		copyTextCouponSale.select();
		document.execCommand("copy");
	}

	document.querySelector('#copy-coupon-sale').addEventListener("click", copy);
}

//========================================================================================================================================================

const supportButton = document.querySelector('.support-eq-del__button');
const supportForms = document.querySelector('.support-eq-del__forms');

if (supportButton) {
	supportButton.addEventListener("click", function (e) {
		supportForms.classList.toggle("_active")
	});
}

//========================================================================================================================================================

let popupPaymentOnline = document.querySelectorAll('.popup-payment-online__column');

if (popupPaymentOnline) {
	popupPaymentOnline.forEach(item => {
		item.addEventListener("click", function (e) {
			popupPaymentOnline.forEach(e => {
				e.classList.remove('_active')
			});
			item.classList.add('_active')
		});
	});
}