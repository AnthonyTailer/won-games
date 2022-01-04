import { Story, Meta } from '@storybook/react/types-6-0'
import { GameInfoProps } from 'components/GameInfo'
import GameInfo from '.'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

Default.args = {
  title: 'My Game title',
  description: 'Game Description',
  price: '210.00'
}
