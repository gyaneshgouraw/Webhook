/**
 * 
 */
import React, { Component } from 'react';
import { shallow,mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';


import CounterButton from '../CounterButton'
/**
 * Reference - selectors (`find`) - https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
 * Reference - simulate click on element - https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
 */
describe('Suite for counter button',()=>{
    const wrapper = shallow(<CounterButton />);
    

    
    it('Button element should be present on dom',()=>{
        expect(wrapper.find('.button')).toBeTruthy()
    })

    
    it('simulate counter button click ',()=>{
        
         let count = wrapper.find('.button').text()
         wrapper.find('.button').simulate('click')
         expect(wrapper.find('.button').text()).toEqual((`${++count}`))
    })
    
})

/**
 * Reference - get component state
 * https://airbnb.io/enzyme/docs/api/ReactWrapper/state.html
 */
describe('Suite to test counter button state',()=>{
    const wrapper = shallow(<CounterButton />);
    const initialState = {value: 0}


    it('should be able to verify component initial state',()=>{
        expect(wrapper.state()).toEqual(initialState)
    })

    it('should be able to get component updated state', ()=>{
        let countVal = wrapper.state().value
        wrapper.find('.button').simulate('click')
        expect(wrapper.state().value).toEqual(++countVal)
    })

    it.skip('let you see usage of different selectors', ()=>{
        const wrapperState = mount(<CounterButton />);
        const data ={
            11: wrapper.name(),
            12:wrapperState.name(),
            21:wrapper.props(),
            22:wrapperState.props(),
            31:wrapper.is(<div></div>),
            32:wrapper.exists()
        }
        console.log('--data-',data);
    })
})


describe('Suite to test counter button component methods',()=>{
    const wrapper = shallow(<CounterButton />); 
    
    it('should be able to update state with set method',()=>{
        const newVal = 5
        wrapper.instance().set(newVal) // set is a method defined in componet CounterButton
        expect(wrapper.state().value).toEqual(newVal)
    })

    it('should call the increment method and update the state value',()=>{
        const incrementBy = 1,
        initialVal = 5
        wrapper.instance().set(initialVal)
        wrapper.instance().increment(incrementBy)
        expect(wrapper.state().value).toEqual((incrementBy+initialVal))
    })
})