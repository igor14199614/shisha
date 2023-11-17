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

	let sortBtns = document.querySelectorAll('.sort__btn');
	let sorts = document.querySelectorAll('.sort');
	let sortPopups = document.querySelectorAll('.sort__list');
	body.addEventListener('click', function (e) {
		let target = e.target;
		let targetClosest = Boolean(target.closest('.sort'));
		if (target.classList.contains('sort') || targetClosest) {
		} else {
			sortBtns.forEach(function (elem) {
				elem.classList.remove('active');
			});
			sortPopups.forEach(function (elem) {
				elem.classList.remove('active');
			});
		}
	});
	sorts.forEach(function (elem) {
		elem.addEventListener('click', function () {
			if (elem.querySelector('.sort__btn').classList.contains('active')) {
				elem.querySelector('.sort__btn').classList.remove('active');
				elem.querySelector('.sort__list').classList.remove('active');
			} else {

				sortBtns.forEach(function (elem) {
					elem.classList.remove('active');
				});
				sortPopups.forEach(function (elem) {
					elem.classList.remove('active');
				});

				elem.querySelector('.sort__btn').classList.add('active');
				elem.querySelector('.sort__list').classList.add('active');
			}

		});
	});

	let filterBtns = document.querySelectorAll('.filter-item__btn1');
	let filterPopups = document.querySelectorAll('.filter-item__popup-wrap');
	body.addEventListener('click', function (e) {
		let target = e.target;
		let targetClosest = Boolean(target.closest('.filter-item__btn1-wrap'));
		if (target.classList.contains('filter-item__btn1-wrap') || targetClosest) {
		} else {
			filterBtns.forEach(function (elem) {
				elem.classList.remove('active');
			});
			filterPopups.forEach(function (elem) {
				elem.classList.remove('active');
			});
		}
	});
	filterBtns.forEach(function (elem) {
		elem.addEventListener('click', function () {
			if (elem.classList.contains('active')) {
				elem.parentNode.querySelector('.filter-item__btn1').classList.remove('active');
				elem.parentNode.querySelector('.filter-item__popup-wrap').classList.remove('active');
			} else {

				filterBtns.forEach(function (elem) {
					elem.classList.remove('active');
				});
				filterPopups.forEach(function (elem) {
					elem.classList.remove('active');
				});

				elem.parentNode.querySelector('.filter-item__btn1').classList.add('active');
				elem.parentNode.querySelector('.filter-item__popup-wrap').classList.add('active');
			}

		});
	});

	let filterBtn = document.querySelector('.filter-btn');
	let filterClose = document.querySelector('.filter__close');
	let catalog = document.querySelector('.catalog__wrap2');
	if (filterBtn) {
		filterBtn.addEventListener('click', function () {
			catalog.classList.add('active');
			body.classList.toggle('body-overflow');
		});
	}

	if (filterClose) {
		filterClose.addEventListener('click', function () {
			catalog.classList.remove('active');
			body.classList.remove('body-overflow');
		});
	}

	const tabsButtons = document.querySelectorAll('.tab-item');

	tabsButtons.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			const prevActiveItem = document.querySelector('.tab.tab--active');
			const prevActiveButton = document.querySelector('.tab-item.tab-item--active');
			if (prevActiveButton) {
				prevActiveButton.classList.remove('tab-item--active');
			}
			if (prevActiveItem) {
				prevActiveItem.classList.remove('tab--active');
			}
			const nextActiveItemId = btn.getAttribute('href');
			console.log(nextActiveItemId)
			const nextActiveItem = document.querySelector(nextActiveItemId);
			btn.classList.add('tab-item--active');
			nextActiveItem.classList.add('tab--active');
		});
	})

});