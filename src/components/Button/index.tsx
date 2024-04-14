import { BotaoContainer, BotaoLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, children, onClick }: Props) => {
  if (type === 'button') {
    return (
      <BotaoContainer type="button" title={title} onClick={onClick}>
        {children}
      </BotaoContainer>
    )
  }
  return (
    <BotaoLink to={to as string} title={title}>
      {children}
    </BotaoLink>
  )
}

export default Button
