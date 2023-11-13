import './src/sass/buildsass.js';

document.addEventListener('DOMContentLoaded', function(){

	if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
		document.body.classList.add('no-touch');
	}

	let toggle = document.querySelector('#js-toggle');
	let body = document.querySelector('#js-body');
	let menu = document.querySelector('#js-menu');

	toggle.addEventListener('click', function() {
		body.classList.toggle('body-overflow');
		menu.classList.toggle('active');
		toggle.classList.toggle('active');
	});

});