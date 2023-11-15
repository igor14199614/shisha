import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { Fancybox } from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', function () {

	Fancybox.bind(".fancybox", {
		showClass: "fancybox-fadeIn",
		l10n: {
			CLOSE: "",
			NEXT: "",
			PREV: "",
		},
		Image: {
			zoom: false,
		},
	});

	Fancybox.bind('[data-fancybox]', {
		Toolbar: {
			display: [
				"close",
			],
		},
		l10n: {
			CLOSE: "",
			NEXT: "",
			PREV: "",
		},
	});
	
});