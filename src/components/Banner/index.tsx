import { Imagem, Precos, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ListaDeProdutos'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  // const [game, setGame] = useState<Game>()

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
  //     .then((res) => res.json())
  //     .then((res) => setGame(res))
  // }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span>
            <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar a oferta"
          to={`/products/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
