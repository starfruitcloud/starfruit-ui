import React from 'react';
import{ render,fireEvent }  from '@testing-library/react';
import Button,{ ButtonProps,ButtonSize,ButtonType } from './button';
const defaultProps = {
    onClick:jest.fn()
}

const testProps:ButtonProps = {
    btnType:ButtonType.Primary,
    size:ButtonSize.Large,
    className:'limed'
}

const disabledProps:ButtonProps = {
    disabled:true,
    onClick:jest.fn()
}

describe('test Button component',() => {
    it('should render the corrent default button',() => {
        const weapper = render(<Button {...defaultProps}>hello</Button>);
        const element = weapper.getByText('hello') as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render to corrent component based on different props',() => {
        const weapper = render(<Button {...testProps}>hello</Button>);
        const element = weapper.getByText('hello') as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg limed')
    })
    it('should render a link when btnType equals link and href is provided',() => {
        const weapper = render(<Button btnType={ButtonType.Link} href="http://www.xiaozhi.shop">link</Button>)
        const element = weapper.getByText('link') as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled test set to true',() => {
        const wrapper = render(<Button {...disabledProps}>hello</Button>)
        const element = wrapper.getByText('hello') as HTMLElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy();

    })

})

