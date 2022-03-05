import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park',
    category: 'land',
    description: 'stuff',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal 
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
    })
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
            expect(asFragment()).toMatchSnapshot();
    });
})
describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getbyText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
            fireEvent.click(getbyText('close this modal'))

            expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})