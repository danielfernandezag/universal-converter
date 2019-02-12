import * as Conversions from './conversions';

export const evaluateConversion = (target, unit, quantity) => {
	switch (unit) {
		case 'km':
			switch (target) {
				case 'hm':
					return Conversions.kmToHm(quantity);
				case 'dam':
					return Conversions.kmToDam(quantity);
				case 'm':
					return Conversions.kmToM(quantity);
				case 'dm':
					return Conversions.kmToDm(quantity);
				case 'cm':
					return Conversions.kmToCm(quantity);
				case 'mm':
					return Conversions.kmToMm(quantity);
				case 'um':
					return Conversions.kmToUm(quantity);
				case 'nm':
					return Conversions.kmToNm(quantity);
				case 'mile':
					return Conversions.kmToMile(quantity);
				case 'nmile':
					return Conversions.kmToNauticMile(quantity);
				case 'foot':
					return Conversions.kmToFoot(quantity);
				case 'inch':
					return Conversions.kmToInch(quantity);
				case 'yard':
					return Conversions.kmToYard(quantity);
				case 'rod':
					return Conversions.kmToRod(quantity);
				case 'fathom':
					return Conversions.kmToFathom(quantity);
				case 'furlong':
					return Conversions.kmToFurlong(quantity);
			}
		default:
			return quantity;
	}
};
