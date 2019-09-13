import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import {initialSlider}from '../blocks/slider/slider.js';
import {comment}from '../blocks/vk-comment/vk-comment.js';

$(() => {
	svg4everybody();
	initialSlider();
	comment();
});
