import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import App from '../src/components/App';
import {StuffButton} from '../src/components/StuffButton';

/*function setupApp() {
    const enzymeWrapper = mount(<Provider store={}><App /></Provider>);
    return enzymeWrapper;
}*/

function setupStuffButton() {
	const props = {
		 addStuffAction: jest.fn()
	}
	return mount(<StuffButton {...props} />);
}

describe('components', () => {
    /*describe('App', () => {
        it('renders without crashing', () => {
            const enzymeWrapper = setupApp();
        });
    }),*/
    describe('StuffButton', () => {
    	it('renders without crashing', () => {
    		setupStuffButton();
    	})
    })
});
