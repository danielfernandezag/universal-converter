import { evaluateConversion } from './conversionHelper';

(function main() {
	const selectFrom = document.querySelector('#select-from');
	const selectTo = document.querySelector('#select-to');
	const iFrom = document.querySelector('#i-from');
	const iTo = document.querySelector('#i-to');
	const inputFrom = document.querySelector('#input-from');
	const buttonConvert = document.querySelector('#button-convert');
	const labelResult = document.querySelector('#label-result');
	selectFrom.addEventListener('change', e => {
		iFrom.textContent = e.target.options[e.target.selectedIndex].label;
	});
	selectTo.addEventListener('change', e => {
		iTo.textContent = e.target.options[e.target.selectedIndex].label;
	});
	buttonConvert.addEventListener('click', () => {
		const currentFrom = selectFrom.value;
		const currentTo = selectTo.value;
		const currentValue = parseFloat(inputFrom.value);
		if (currentFrom === currentTo) {
			labelResult.textContent = `${currentValue} ${selectTo.options[selectTo.selectedIndex].label}`;
		} else {
			const result = evaluateConversion(currentTo, currentFrom, currentValue);
			labelResult.textContent = `${result} ${selectTo.options[selectTo.selectedIndex].label}`;
		}
	});
})();
