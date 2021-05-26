"use strict";

const $ = jQuery;

function eventHandler() {
	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	let screenName;
	screenName = document.body.dataset.bg;

	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	}

	$('.compareSlider--js').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		//- appendArrows: $('#sliderProductsNav'),
		prevArrow: '<div class="slick-btn prev fa fa-angle-left" aria-hidden="true"></div>',
		nextArrow: '<div class="slick-btn next fa fa-angle-right" aria-hidden="true"></div>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 2
			}
		}]
	});
	$('.compareItem__cell').matchHeight({
		byRow: false
	});
	$('.compareItem__card').matchHeight({
		byRow: false
	});
	let phoneBtn = document.getElementById('phoneBtn');
	let phoneBlock = document.getElementById('phoneBlock');

	const toggleMenu = () => {
		phoneBlock.classList.toggle('active');
	};

	phoneBtn.addEventListener('click', e => {
		e.stopPropagation();
		toggleMenu();
	});
	document.addEventListener('click', e => {
		let target = e.target;
		let its_phoneBlock = target == phoneBlock || phoneBlock.contains(target);
		let its_phoneBtn = target == phoneBtn;
		let phoneBlock_active = phoneBlock.classList.contains('active');

		if (!its_phoneBlock && !its_phoneBtn && phoneBlock_active) {
			toggleMenu();
		}
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }