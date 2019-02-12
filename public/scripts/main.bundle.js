'use strict';

var _conversionHelper = require('./conversionHelper');

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
		var currentFrom = selectFrom.value;
		var currentTo = selectTo.value;
		var currentValue = parseFloat(inputFrom.value);
		if (currentFrom === currentTo) {
			labelResult.textContent = currentValue + ' ' + selectTo.options[selectTo.selectedIndex].label;
		} else {
			var result = (0, _conversionHelper.evaluateConversion)(currentTo, currentFrom, currentValue);
			labelResult.textContent = result + ' ' + selectTo.options[selectTo.selectedIndex].label;
		}
	});
})();
