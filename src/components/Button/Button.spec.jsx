import userEvent from '@testing-library/user-event';
import { Button } from '.'

const { render, screen } = require("@testing-library/react")

const props = {
    name: "nome"
}

describe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button text="Load more" />)

        expect.assertions(1)

        const button = screen.getByRole('button', { name: props.name})
        expect(button).toBeInTheDocument()
    })

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />)


        const button = screen.getByRole('button', { name: /load more/i})
        
        // fireEvent.click(button)
        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />)

        expect(screen.getByRole('button', { name: /load more/i})).toBeDisabled()
    })

    it('should be enabled when disabled is false', () => {
        const fn = jest.fn()
        render(<Button text="Load more" disabled={false} onClick={fn}/>)
        const button = screen.getByRole('button', { name: /load more/i})
        expect(button).toBeEnabled()
    })

    it('should match snapshot', () => {
        const fn = jest.fn()
        const {container} = render(<Button text="Load more" disabled={false} onClick={fn}/>)
        expect(container.firstChild).toMatchSnapshot()
    })
})