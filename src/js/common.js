document.addEventListener('DOMContentLoaded', function () {

	if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
		document.body.classList.add('no-touch');
	}

	const toggle = document.querySelector('#js-toggle');
	const body = document.querySelector('#js-body');
	const menu = document.querySelector('#js-menu');

	toggle.addEventListener('click', function () {
		body.classList.toggle('body-overflow');
		menu.classList.toggle('active');
		toggle.classList.toggle('active');
	});


	var lastScroll = 0;
	const header = document.querySelector('#header');
	const defaultOffset = 200;

	const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
	const containHidden = () => header.classList.contains('header--hidden');

	window.addEventListener('scroll', () => {

		if (scrollPosition() > lastScroll && !containHidden() && scrollPosition() > defaultOffset) {
			header.classList.add('header--hidden');
		} else if (scrollPosition() < lastScroll && containHidden()) {
			header.classList.remove('header--hidden');
		}

		lastScroll = scrollPosition();
	})
	// Найти все ссылки начинающиеся на #
	const anchors = document.querySelectorAll('a[data-target="anchor"]')
	for (let anchor of anchors) {
		anchor.addEventListener("click", function (e) {
			e.preventDefault()
			const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
			document.querySelector(goto).scrollIntoView({
				behavior: "smooth",
				block: "start"
			})
		})
	}

});