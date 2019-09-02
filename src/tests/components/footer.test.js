import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../../components/footer'


test('renders', () => {
    const { asFragment } = render(<Footer/>);
    expect( asFragment()).toMatchSnapshot();
});