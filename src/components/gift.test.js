import React from 'react'
import { shallow } from 'enzyme'

import Gift from './Gift'

describe('Gift', () => {

    const mockRemove = jest.fn()
    const id = 1
    const props = { gift: { id }, removeGift: mockRemove }
    const gift = shallow(<Gift {...props} />)

    it('renders properly', () => {
        expect(gift).toMatchSnapshot()
    })

    it('it initializes `state` with gift to have person and present', () => {
        expect(gift.state()).toEqual({ person: '', present: ''})    
    })

    describe('when typing into the person input', () => {
        const person = 'uncle'

        beforeEach((() => {
            gift.find('.input-person').simulate('change', {target: { value: person }})
        }))

        it('updates person in `state`', () => {
            expect(gift.state().person).toEqual(person)
        })
    })

    describe('when typing into present input', () => {
        const present = 'Switch'

        beforeEach( () => {
            gift.find('.input-present').simulate('change', {target: { value: present }})
        })
        
        it('updates present in `state`', () => {
            expect(gift.state().present).toEqual(present)
        })
    })

    describe('when clicking the `remove gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click')
        })

        it('it calls the removeGift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id)    
        })
    })
})