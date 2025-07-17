/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';
let popupCatalog = document.querySelector('.application-form__button');
// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	const thumbsSwiper = new Swiper('.images-product__thumbs', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		//effect: 'fade',
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 10,
		//parallax: true,
		direction: 'vertical',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,

		breakpoints: {
			0: {
				direction: 'horizontal',
			},
			1590: {
				direction: 'vertical',
			},
		},
		on: {
		}
	});
	const mainThumbsSwiper = new Swiper('.images-product__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Thumbs],
		//effect: 'fade',
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 30,
		direction: 'vertical',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		breakpoints: {
			0: {
				direction: 'horizontal',
			},
			1560: {
				direction: 'vertical',
			},
		},
	});
	new Swiper('.related-products', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		//effect: 'fade',
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 26,
		direction: 'horizontal',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		pagination: {
			el: '.related-dotts',
			clickable: true,
			dynamicBullets: true
		},
		navigation: {
			prevEl: '.related-products-prev',
			nextEl: '.related-products-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			480: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1590: {
				slidesPerView: 4,
			},
		},
	});
	new Swiper('.similar-products', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		//effect: 'fade',
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 26,
		direction: 'horizontal',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		pagination: {
			el: '.similar-dotts',
			clickable: true,
			dynamicBullets: true
		},
		navigation: {
			prevEl: '.similar-arrow-prev',
			nextEl: '.similar-arrow-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1590: {
				slidesPerView: 4,
			},
		},
	});
	new Swiper('.who-work__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		//effect: 'fade',
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 50,
		direction: 'horizontal',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		/*
		pagination: {
			el: '.products__dotts',
			clickable: true,
			dynamicBullets: true
		},
		*/
		navigation: {
			prevEl: '.who-work__arrow-prev',
			nextEl: '.who-work__arrow-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				spaceBetween: 15,
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			1590: {
				slidesPerView: 3,
			},
		},
	});
	new Swiper('.reviews__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		//effect: 'fade',
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		direction: 'horizontal',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		pagination: {
			el: '.reviews__dotts',
			clickable: true,
			//dynamicBullets: true
		},
		navigation: {
			prevEl: '.reviews__arrow-prev',
			nextEl: '.reviews__arrow-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
			1590: {
				slidesPerView: 1,
			},
		},
	});
	new Swiper('.popup__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		//effect: 'fade',
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		direction: 'horizontal',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		pagination: {
			el: '.popup__dotts',
			clickable: true,
			//dynamicBullets: true
		},
		navigation: {
			prevEl: '.popup__arrow-prev',
			nextEl: '.popup__arrow-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
			1590: {
				slidesPerView: 1,
			},
		},
	});
	new Swiper('.stages__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		//effect: 'fade',
		observer: true,
		watchOverflow: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 50,
		direction: 'horizontal',
		//autoHeight: true,
		speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,
		pagination: {
			el: '.stages__dotts',
			clickable: true,
			//dynamicBullets: true
		},
		navigation: {
			prevEl: '.stages__arrow-prev',
			nextEl: '.stages__arrow-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1590: {
				slidesPerView: 3,
			},
		},
	});
	if (document.querySelector('.comparison__slider-one')) {
		new Swiper('.comparison__slider-one', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.comparison__dotts-one',
				clickable: true,
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.comparison__all-one');
					const allSlidesItems = document.querySelectorAll('.comparison__slide-content:not(.swiper-slide-duplicate)');
					allSlides.innerHTML = allSlidesItems.length < 10 ? `${allSlidesItems.length}` : allSlidesItems.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.comparison__current-one');
					currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `${swiper.realIndex + 1}` : swiper.realIndex + 1;
				}
			}
		});
	}

	if (document.querySelector('.comparison__slider-two')) {
		new Swiper('.comparison__slider-two', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.comparison__dotts-two',
				clickable: true,
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				init: function (swiper) {
					const allSlidesTwo = document.querySelector('.comparison__all-two');
					const allSlidesItemsTwo = document.querySelectorAll('.comparison__slide-content-two:not(.swiper-slide-duplicate)');
					allSlidesTwo.innerHTML = allSlidesItemsTwo.length < 10 ? `${allSlidesItemsTwo.length}` : allSlidesItemsTwo.length;
				},
				slideChange: function (swiper) {
					const currentSlideTwo = document.querySelector('.comparison__current-two');
					currentSlideTwo.innerHTML = swiper.realIndex + 1 < 10 ? `${swiper.realIndex + 1}` : swiper.realIndex + 1;
				}
			}
		});
	}
}

if (document.querySelector('.bottom-mob-examples-eq-del__slider')) {
	new Swiper('.bottom-mob-examples-eq-del__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 10,
		speed: 800,
		// Dotts
		pagination: {
			el: '.bottom-mob-examples-eq-del__pagination',
			clickable: true,
		},
	});
}

if (document.querySelector('.reviews-eq-del__slider')) {
	new Swiper('.reviews-eq-del__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 25,
		speed: 800,
		//autoHeight: true,
		// Dotts
		pagination: {
			el: '.reviews-eq-del__pagination',
			clickable: true,
		},
		navigation: {
			prevEl: '.reviews-eq-del__arrow-prev',
			nextEl: '.reviews-eq-del__arrow-next',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1300: {
				slidesPerView: 3,
			},
		},
	});
}

/**/
if (document.querySelector('.accessories__slider')) {
	new Swiper('.accessories__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 6,
		spaceBetween: 15,
		speed: 800,
		// Dotts
		pagination: {
			el: '.accessories__pagination',
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.5,
			},
			500: {
				slidesPerView: 2.5,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
			1590: {
				slidesPerView: 6,
			},
		},
	});
}
if (document.querySelector('.colors-constructor__slider')) {
	new Swiper('.colors-constructor__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 0,
		speed: 800,
		// Dotts
		pagination: {
			el: '.colors-constructor__pagination',
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 2.5,
			},
			500: {
				slidesPerView: 4.5,
			},
			768: {
				slidesPerView: 3.5,
			},
			992: {
				slidesPerView: 5,
			},
		},
	});
}
if (document.documentElement.clientWidth < 991.98) {
	document.querySelectorAll('.constructor__column').forEach(n => {
		const slider = new Swiper(n.querySelector('.constructor__slider'), {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			watchOverflow: true,
			spaceBetween: 0,
			speed: 800,

			// Пагинация
			pagination: {
				el: n.querySelector('.constructor__pagination'),
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2.3,
				},
				550: {
					slidesPerView: 4.2,
				},
				768: {
					slidesPerView: 4.5,
				},
				992: {
					slidesPerView: "auto",
				},
			},
		});
	});
};
/**/

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});