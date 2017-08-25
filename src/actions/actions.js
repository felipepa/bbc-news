import * as types from './actionTypes';

export function addDev(name) {
	return { type: types.ADD_DEV, dev: name };
}

export function generatePairs() {
	return { type: types.GENERATE_PAIRS }
}