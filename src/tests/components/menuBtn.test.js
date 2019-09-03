import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import MenuBtn from '../../components/menuBtn'

afterEach(cleanup)

test('should render with and without close class', () => {
    const {container, rerender} = render(<MenuBtn isOpen={true}/>)
    expect(container.firstChild).toHaveClass('menu-btn close')

    rerender(<MenuBtn isOpen={false}/>)
    expect(container.firstChild).toHaveClass('menu-btn')
})

test('should call toggledrawer onclick', () => {
    const toggleDrawer = jest.fn()

    const {container} = render(<MenuBtn isOpen={false} toggleDrawer={toggleDrawer}/>)

    fireEvent.click(container.firstChild)
    expect(toggleDrawer).toHaveBeenCalledTimes(1)
    expect(container.firstChild).not.toHaveClass('close')
})