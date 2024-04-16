import { Container, Titulo } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{title}</Titulo>
      {children}
    </div>
  </Container>
)

export default Section
