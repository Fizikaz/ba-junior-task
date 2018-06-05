import $ from "jquery";

$(".projects__item-image").hover(function () {
	$('.projects__item-description').toggleClass('hidden');
});
