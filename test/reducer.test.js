import reducer from '../src/reducers/reducer';
import * as Actions from '../src/actions/actions';

describe('Reducers', () => {
    describe('Add Actions', () => {
    	it('ignores empty string when adding user', () => {
    		var state = {id: 0, devs: [], pairs: []};
            var action = {type: Actions.ADD_USER, dev: ''};
            expect(reducer(state, action)).toBe(state);

    	}),

        it('ignores duplicate user when adding user', () => {
            var state = {id: 0, devs: [{id: 0, name: 'dev'}], pairs: []};
            var action = {type: Actions.ADD_USER, dev: 'dev'};
            expect(reducer(state, action)).toBe(state);

        })
    }),
    describe('Generate Pair Actions', () => {
        it('doesnt generate pairs when there are less than 2 users', () => {
            var state = {id: 0, devs: [{id: 0, name: 'dev'}], pairs: []};
            var action = {type: Actions.GENERATE_PAIRS};
            expect(reducer(state, action)).toBe(state);

        })
    })
});
