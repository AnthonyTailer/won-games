import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the 4 Footer topics', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })

  it('should render 4 grid columns on Desktop screen size', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByRole('contentinfo').childNodes[1]).toHaveStyleRule(
      'grid-template-columns',
      'repeat(4,1fr)',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render 2 grid columns on Mobile screen size', () => {
    renderWithTheme(<Footer />)
    expect(screen.getByRole('contentinfo').childNodes[1]).toHaveStyle({
      'grid-template-columns': 'repeat(2,1fr)'
    })
  })
})
