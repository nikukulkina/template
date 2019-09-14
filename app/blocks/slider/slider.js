import Swiper from 'swiper';

export const initialSlider = () => {
	const slider = new Swiper('.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-prev',
			prevEl: '.swiper-button-next'
		}
	});
};
