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
})
