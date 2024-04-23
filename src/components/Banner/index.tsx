import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'
import { parseToBRL } from '../../utils'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  // const [game, setGame] = useState<Game>()

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
  //     .then((res) => res.json())
  //     .then((res) => setGame(res))
  // }, [])

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBRL(game.prices.old)}</span>
            <br />
            por apenas {parseToBRL(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          title="Clique aqui para aproveitar a oferta"
          to={`/products/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
