import $ from 'jquery';
import ScrollToTop from 'jquery-scrollToTop';

export const scrollToTop = () => {
	$('.page-main').scrollToTop({
		skin: 'cycle'
	});
};
