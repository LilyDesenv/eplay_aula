import Game from '../../models/Game'
import Produto from '../Produto'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ListaDeProdutos = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Produto
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaDeProdutos
