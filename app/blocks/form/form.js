import $ from 'jquery';
import Mask from 'jquery-mask-plugin';

export const mask = () => {
	$('.form__input_phone').mask('+0 (000) 000-00-00');
};
