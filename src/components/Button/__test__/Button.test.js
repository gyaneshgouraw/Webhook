/**
 * Basic test setup
 * REfer -  for utility finders
 * https://reactjs.org/docs/test-renderer.html#testinstancefindall
 * Refer - for enzyme setup
 * https://medium.com/@jameslockwood/getting-react-16-jest-and-enzyme-to-play-nicely-cc6d216ce3c4
 * 
 * List of Jest Matchers
 * https://jestjs.io/docs/en/expect#not
 */
import React from 'react'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils';
import Button from '../Button'
import { shallow,mount } from 'enzyme';





describe('Test for Button component',()=>{
        const component = renderer.create(
            <Button disabled={true}>Killer Button </Button>
        )

        const testInstance = component.root;
        const originalButton = testInstance.find((el) => el.type == 'button');

        //if button removed from component - test case fails
        it('Button is present',()=>{
            const componentType = originalButton.type
            expect(componentType).toEqual('button')
        })
        

        //writing check for different props // if that prop removed from component, test case fails
        it('Button should have props - disabled',()=>{
            expect(originalButton.props.disabled).toEqual(true);
        })
    })

describe('Testing component with Enzyme ',()=>{
    const wrapper = shallow(<Button disabled={true}>Killer Button </Button>);

    it('Button should have id present', ()=>{
        expect(wrapper.find('#button')).toBeTruthy()
    })
})

describe('Testing syntax',()=>{
    it("should display something",()=>{
        expect(2+2).toEqual(4)
    })

})


