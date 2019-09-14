import $ from 'jquery';
import Slick from 'slick-carousel';

export const initialSlider = () => {
	$('.slides').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
	});
};
