import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the Banner component', () => {
    renderWithTheme(<Banner {...props} />)
    // verifica se o title existe
    expect(
      screen.getByRole('heading', { level: 2, name: /defy death/i })
    ).toBeInTheDocument()
    // verifica se o subtitle existe
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /play the new crashlands season/i
      })
    ).toBeInTheDocument()
    // verifica se a imagem existe
    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
    // verifica se o Button link existe
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      props.buttonLink
    )
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
