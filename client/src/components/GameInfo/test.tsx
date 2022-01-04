import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game title',
  description: 'Game Description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render GameInfo informations', () => {
    renderWithTheme(<GameInfo {...props} />)
    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$210,00/i)).toBeInTheDocument()
  })

  it('should render GameInfo buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
