import React from 'react';
// shallow renders ONLY the component called, not sub-components; doesn't work to test multiple levels of components
import { shallow } from 'enzyme';

import HelloWorld from './HelloWorld'

//describe a block of tests: (describe is used to organize blocks of tests)
describe('HelloWorld component', () => {
    // we will write one individual test
    it('should render as expected', () => {
        const component = shallow(<HelloWorld name={'ryan'} />)
        // We create an assertion within the test that checks if our component renders our name prop
        // * .toBe() is a method from jest
        expect(component.contains('ryan')).toBe(true)
    })
})
