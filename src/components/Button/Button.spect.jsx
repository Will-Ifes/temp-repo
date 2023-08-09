import { Button } from '.'

const { render, screen } = require("@testing-library/react")

describe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button />)

        const button = screen.getByRole('button')
    })
})