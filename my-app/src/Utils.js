let result = '0';

const isNumber = (num) => {
	return typeof num === 'number' && !isNaN(num);
};

const pseudoEval = (item) => {
	let i = -1;
	if (item.indexOf('-') === -1) {
		i = item.indexOf('+');
	} else {
		i = item.indexOf('-');
	}
	let a = item.slice(0, i);
	let b = item.slice(i, i + 1);
	let c = item.slice(i + 1, item.length);
	switch (b) {
		case '+':
			return String(Number(a) + Number(c));
		case '-':
			return String(Number(a) - Number(c));
		default:
			return item;
	}
};

export const ExecutingLogic = (resultR) => {
	if (isNumber(Number(resultR))) {
		if (result === '0' || result[result.length - 1] === '=') {
			result = resultR;
		} else {
			result = result + resultR;
		}
	} else {
		if (resultR === 'C') {
			result = '0';
		} else if (
			result[result.length - 1] === '+' ||
			result[result.length - 1] === '-' ||
			result[result.length - 1] === '='
		) {
			result = result.slice(0, -1);
			result = result + resultR;
		} else if (resultR === '=') {
			result = pseudoEval(result);
			result = result + resultR;
		} else if (resultR === '+') {
			result = pseudoEval(result);
			result = result + resultR;
		} else if (resultR === '-') {
			result = pseudoEval(result);
			result = result + resultR;
		}
	}
	return result;
};

export const checkEquals = (item) => {
	if (item[item.length - 1] === '=') {
		return item.slice(0, -1);
	} else {
		return item;
	}
};
