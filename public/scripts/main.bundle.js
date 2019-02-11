'use strict';

function sameConversion(value) {
	return value;
}

(function main() {
	var selectFrom = document.querySelector('#select-from');
	var selectTo = document.querySelector('#select-to');
	var iFrom = document.querySelector('#i-from');
	var iTo = document.querySelector('#i-to');
	var inputFrom = document.querySelector('#input-from');
	var buttonConvert = document.querySelector('#button-convert');
	var labelResult = document.querySelector('#label-result');
	selectFrom.addEventListener('change', function (e) {
		iFrom.textContent = e.target.options[e.target.selectedIndex].label;
	});
	selectTo.addEventListener('change', function (e) {
		iTo.textContent = e.target.options[e.target.selectedIndex].label;
	});
	buttonConvert.addEventListener('click', function () {
		var currentFrom = parseInt(selectFrom.value);
		var currentTo = parseInt(selectTo.value);
		if (currentFrom === currentTo) {
			var result = sameConversion(parseFloat(inputFrom.value));
			labelResult.textContent = result + ' ' + selectTo.options[selectTo.selectedIndex].label;
		}
	});
})();
