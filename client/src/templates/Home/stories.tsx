import { Story, Meta } from '@storybook/react/types-6-0'

import banners from 'components/BannerSlider/mock'
import newGames from 'components/GameCardSlider/mock'
import mostPopularHighlight from 'components/Highlight/mock'

const props = {
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames: newGames,
  upcommingGames: newGames,
  upcommingHighligth: mostPopularHighlight,
  upcommingMoreGames: newGames,
  freeGames: newGames,
  freeHighligth: mostPopularHighlight
}

import Home from '.'

export default {
  title: 'Home',
  component: Home
} as Meta

export const Default: Story = () => <Home {...props} />
