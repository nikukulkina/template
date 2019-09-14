export const comment = () => {
	// eslint-disable-next-line
	window.VK.Widgets.Comments('vk_comments', {limit: 10, attach: '*'});
};
