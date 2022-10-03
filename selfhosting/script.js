console.log('Connected');
import Swiper from 'swiper';
import 'swiper/css';


$(function () {
	// Anchor Target Scroll Animation

	$('a[href*="#"]:not([href="#"])').click(function () {
		if (
			location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate(
					{
						scrollTop: target.offset().top - 62
					},
					600
				);
				return false;
			}
		}
	});

	// Header Shadow

	$(window).scroll(function () {
		var windowScroll = $(this).scrollTop();

		if (windowScroll > 304) {
			$(".navbar-fixed-top").addClass("shadow");
		} else {
			$(".navbar-fixed-top").removeClass("shadow");
		}
	});
});
var mySwiper = new Swiper(".swiper-container", {
	direction: "vertical",
	loop: true,
	pagination: ".swiper-pagination",
	grabCursor: true,
	speed: 1000,
	paginationClickable: true,
	parallax: true,
	autoplay: false,
	effect: "slide",
	mousewheelControl: 1
});
// PreLoader
jQuery.noConflict();
(function ($) {
	$(window).on("load", function () {
		// makes sure the whole site is loaded
		$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
	});
})(jQuery);
// update footer copyright year

var today = new Date();
var year = today.getFullYear();
// Dynamic Copyright Date
var copyright = document.getElementById("copyright");
copyright.innerHTML = "© MindHealth " + year;


// Tooltip Enabler
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function formatPhoneNumber() {
	const str = Number(Document.getElementById('number'))
	//Filter only numbers from the input
	let cleaned = ('' + str).replace(/\D/g, '');

	//Check if the input is of correct length
	let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

	if (match) {
		return '(' + match[1] + ') ' + match[2] + '-' + match[3]
	} else
		alert('The Phone Number Entered is Invaild. Please check the number and attempt to resubmit the form!')
	console.log(ValidationError)
};

class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "Phone Number Validation Error";
	}
}
function test_number() {
	throw new ValidationError("The Phone Number Entered is Invaild. Please check the number and attempt to resubmit the form!")
}
try {
	test_number();
} catch (err) {
	alert(err.name);
	alert(err.message);
}

//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 5000;  //time in ms (5 seconds)

//on keyup, start the countdown
$('#phone-number').keyup(function () {
	clearTimeout(typingTimer);
	if ($('#myInput').val()) {
		typingTimer = setTimeout(formatPhoneNumber($('#myInput').val()), doneTypingInterval);
	}
});

