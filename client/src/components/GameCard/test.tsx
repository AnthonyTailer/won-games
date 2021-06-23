import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/red-dead-card.png',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />)
    // preço não tenha line-through
    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço tenha o background secundário
    expect(screen.getByText(props.price)).toHaveStyle({
      'background-color': theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    renderWithTheme(
      <GameCard {...props} price="R$ 200" promotionalPrice="R$ 15" />
    )
    // preço tenha line-through (200)
    expect(screen.getByText('R$ 200')).toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('R$ 15')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is True', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    renderWithTheme(
      <GameCard {...props} price="R$ 200" promotionalPrice="R$ 15" favorite />
    )

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when Favorite icon is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(
      <GameCard
        {...props}
        price="R$ 200"
        promotionalPrice="R$ 15"
        favorite
        onFav={onFav}
      />
    )

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
