import initialState from './initialState';
import { ADD_DEV, GENERATE_PAIRS } from '../actions/actionTypes';

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case ADD_DEV:
			// check for empty string
			if (action.dev === '') {
				return state;
			}

			// check for repeated name
			for(var i = 0; i < state.devs.length; i++) {
				if (state.devs[i].name === action.dev) {
					return state;
				}
			}

			// concatenate array
			return {
				...state,
				id: state.id + 1,
				devs: [...state.devs, {id: state.id, name: action.dev}]
			};

		case GENERATE_PAIRS:
			return {
				...state,
				pairs: generatePairs(state.devs)
			};

		default:
			return state;
	}
}

function generatePairs(list) {
	//can only have pair with two or more items
	if (list.length < 2 ) {
		return [];
	}
	var first = list[0];
	var rest  = list.slice(1);
	var pairs = rest.map(function (x) { return [first, x]; });

	return pairs.concat(generatePairs(rest));
}
