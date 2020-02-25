import React from 'react';
import {shallow} from "enzyme";
import App from './App';

describe('App Tests', () => {

    it('should not crash when loaded', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toHaveLength(1);
    });

    it('should have H1 tag when render', function () {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('h1').text()).toEqual(' My Daily To-Do List ');
    });

    it('should have Table when renders', function () {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('table')).toHaveLength(1);
    });
});
