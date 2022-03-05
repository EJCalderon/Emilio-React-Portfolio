import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
const portrait = { name: "portraits", description: "people"};

afterEach(cleanup)

describe('Gallery component', () => {

    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    it('mathces snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait}/>)
        expect(asFragment()).toMatchSnapshot()
    })
});

it('displays text', () => {
    const { asFragment } =render(<Gallery  currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
})
