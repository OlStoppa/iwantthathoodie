import React from "react"
import {render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Drawer from "../../components/drawer"


afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Drawer />);
    expect(asFragment()).toMatchSnapshot()
})

test("different props add classes for open or closed", () => {
    const { container, rerender } = render(<Drawer isOpen={true} /> );
    expect(container.firstChild).toHaveClass('drawer open');

    rerender(<Drawer isOpen={false} /> );
    expect(container.firstChild).toHaveClass('drawer');
})