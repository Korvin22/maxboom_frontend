import type { Meta, StoryObj } from '@storybook/react'
import Label from './Label'

const meta = {
  title: 'shared/Label',
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    htmlFor: 'htmlFor',
    children:
      'Используется совместно с полями ввода текста, для их подписи. Для связи поля ввода текста с подписью, id поля ввода текста и htmlFor у лейбла должны быть одинаковые'
  }
}
