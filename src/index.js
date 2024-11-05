module.exports = function toReadable (number) {

	const numberRepresentedToString = number.toString();
	const numberLength = numberRepresentedToString.length;

	const firstTenToReadable = function(number) {
		switch(number) {
			case 0:
				return 'zero';
			case 1:
				return 'one';
			case 2:
				return 'two';
			case 3:
				return 'three';
			case 4:
				return 'four';
			case 5:
				return 'five';
			case 6:
				return 'six';
			case 7:
				return 'seven';
			case 8:
				return 'eight';
			case 9:
				return 'nine';
		}
	};
	const secondTenToReadable = function(number) {
		switch(number) {
				case 10:
					return 'ten';
				case 11:
					return 'eleven';
				case 12:
					return 'twelve';
				case 13:
					return 'thirteen';
				case 14:
					return 'fourteen';
				case 15:
					return 'fifteen';
				case 16:
					return 'sixteen';
				case 17:
					return 'seventeen';
				case 18:
					return 'eighteen';
				case 19:
					return 'nineteen';
		}
	};
	const tensToReadable = function(number) {
		switch(number) {
				case 2:
					return 'twenty';
				case 3:
					return 'thirty';
				case 4:
					return 'forty';
				case 5:
					return 'fifty';
				case 6:
					return 'sixty';
				case 7:
					return 'seventy';
				case 8:
					return 'eighty';
				case 9:
					return 'ninety';
		}
	};
	const twoDigitNumberToReadable = function(number) {
		if (number < 20) {
			return secondTenToReadable(number);
		} else if (Number(numberRepresentedToString[2]) === 0) {
			return `${tensToReadable(Number(numberRepresentedToString[1]))}`;
		} else {
			return `${tensToReadable(Number(numberRepresentedToString[1]))} ${firstTenToReadable(Number(numberRepresentedToString[2]))}`;
		}
	};

	switch(numberLength) {
	case 1:
		return firstTenToReadable(number);
	case 2:
		if (number < 20) {
			return secondTenToReadable(number);
		} else if (Number(numberRepresentedToString[1]) === 0) {
			return `${tensToReadable(Number(numberRepresentedToString[0]))}`;
		} else {
			return `${tensToReadable(Number(numberRepresentedToString[0]))} ${firstTenToReadable(Number(numberRepresentedToString[1]))}`;
		}
	case 3:
		if ((numberRepresentedToString[1] + numberRepresentedToString[2]) === '00') {
			return `${firstTenToReadable(Number(numberRepresentedToString[0]))} hundred`;
		} else if (numberRepresentedToString[1] === '0') {
			return `${firstTenToReadable(Number(numberRepresentedToString[0]))} hundred ${firstTenToReadable(Number(numberRepresentedToString[2]))}`;
		} else {
			return `${firstTenToReadable(Number(numberRepresentedToString[0]))} hundred ${twoDigitNumberToReadable(Number( numberRepresentedToString[1] + numberRepresentedToString[2]) )}`;
		}
	}
}
