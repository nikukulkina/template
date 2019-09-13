export const comment = () => {
	VK.Widgets.Comments('vk_comments', {limit: 10, attach: '*'});
};
