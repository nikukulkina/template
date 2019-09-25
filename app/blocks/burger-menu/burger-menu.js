export const burger = () => {
	const menuButton = document.querySelector('.burger-menu__wrap');
	window.addEventListener('scroll', function () {
		const menu = document.querySelector('.burger-menu');
		if (pageYOffset > 140) {
			menu.classList.add('burger-menu_scrolled');
		}else {
			menu.classList.remove('burger-menu_scrolled');
		}
	});
	menuButton.addEventListener('click', function () {
		const lines = menuButton.children;
		for (const item of lines) {
			item.classList.toggle('burger-menu__line_active');
		}
	});
};
