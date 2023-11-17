import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {

	let swiperContainer1 = document.querySelector('.swiper1');
	if (swiperContainer1) {
		let swiper2 = new Swiper('.swiper2', {
			modules: [Thumbs],
			spaceBetween: 8,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		});
		let swiper1 = new Swiper('.swiper1', {
			modules: [Navigation, Thumbs],
			spaceBetween: 10,
			thumbs: {
				swiper: swiper2,
			},
		});
	}

	let swiperContainer3 = document.querySelector('.swiper3');
	if (swiperContainer3) {
		let swiper3 = new Swiper('.swiper3', {
			modules: [Navigation],
			spaceBetween: 10,
			slidesPerView: 1,
			navigation: {
				nextEl: ".swiper-button-next3",
				prevEl: ".swiper-button-prev3",
			},
			breakpoints: {
				700: {
					spaceBetween: 10,
					slidesPerView: 4,
				},
				550: {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				450: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
			}
		});
	}

});