import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.ru';

let inputPhone = document.querySelectorAll('[type="tel"]');

inputPhone.forEach(el => {

	new Cleave(el, {
		phone: true,
		phoneRegionCode: 'RU'
	})

});