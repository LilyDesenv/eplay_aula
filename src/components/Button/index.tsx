import { BotaoContainer, BotaoLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  children,
  onClick,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <BotaoContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
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
