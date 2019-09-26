import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import {initialSlider}from '../blocks/slider/slider.js';
import {comment}from '../blocks/vk-comment/vk-comment.js';
import {mask}from '../blocks/form/form.js';
import {burger}from '../blocks/burger-menu/burger-menu.js';
import {scrollToTop}from '../blocks/page-main/page-main.js';


$(() => {
	svg4everybody();
	scrollToTop();
	burger();
	initialSlider();
	comment();
	mask();
});
