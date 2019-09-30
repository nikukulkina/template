export const burger = () => {
	const menuButton = document.querySelector('.burger-menu__wrap');
	const menuLinks = document.querySelector('.burger-menu__links');
	const menuLink = document.querySelectorAll('.burger-menu__link');
	const overlay = document.querySelector('.page-main__overlay');
	window.addEventListener('scroll', function () {
		const menu = document.querySelector('.burger-menu');
		if (pageYOffset > 140) {
			menu.classList.add('burger-menu_scrolled');
		}else {
			menu.classList.remove('burger-menu_scrolled');
		}
	});
	const menuBtnChange = function () {
		const lines = menuButton.children;
		for (const item of lines) {
			item.classList.toggle('burger-menu__line_active');
		}
	};
	const menuOverlayChange = function () {
		const body = document.body;
		const html = document.querySelector('html');
		overlay.classList.toggle('page-main__overlay_active');
		if (overlay.classList.contains('page-main__overlay_active')) {
			body.style.overflowY = 'hidden';
			html.style.overflowY = 'hidden';
		}else {
			body.style.overflowY = 'auto';
			html.style.overflowY = 'auto';
		}
	};
	const menuItemsChange = function () {
		menuLinks.classList.toggle('burger-menu__links_active');
	};
	menuButton.addEventListener('click', function (e) {
		e.preventDefault();
		menuBtnChange();
		menuOverlayChange();
		menuItemsChange();
	});
	overlay.addEventListener('click', function () {
		menuBtnChange();
		menuOverlayChange();
		menuItemsChange();
	});

	for (let i = 0; i < menuLink.length; i++){
		menuLink[i].addEventListener('click', function () {
			menuBtnChange();
			menuOverlayChange();
			menuItemsChange();
		});
	}
};
