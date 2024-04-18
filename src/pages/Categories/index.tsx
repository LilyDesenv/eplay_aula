import ListaDeProdutos from '../../components/ListaDeProdutos'
import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulQuery,
  useGetFightQuery,
  useGetRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAcao } = useGetActionQuery()
  const { data: gamesEsportes, isLoading: isLoadingEsportes } =
    useGetSportsQuery()
  const { data: gamesLuta, isLoading: isLoadingLuta } = useGetFightQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulacao } =
    useGetSimulQuery()
  const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRPGQuery()

  // const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  // const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  // const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  // const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  // const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesAcao(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((res) => setGamesEsportes(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((res) => setGamesSimulacao(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((res) => setGamesLuta(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((res) => setGamesRPG(res))
  // }, [])

  if (gamesAcao && gamesEsportes && gamesLuta && gamesSimulacao && gamesRPG) {
    return (
      <>
        <ListaDeProdutos
          games={gamesRPG}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ListaDeProdutos
          games={gamesAcao}
          title="Ação"
          background="gray"
          id="action"
        />
        <ListaDeProdutos
          games={gamesEsportes}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ListaDeProdutos
          games={gamesSimulacao}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ListaDeProdutos
          games={gamesLuta}
          title="Luta"
          background="black"
          id="fight"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Categories
