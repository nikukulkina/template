import Swiper from 'swiper';

export const initialSlider = () => {
	const slider = new Swiper('.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.slider__btn-next',
			prevEl: '.slider__btn-prev'
		}
	});
};
