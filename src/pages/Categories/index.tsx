import ProductsList from '../../components/ProductsList'
import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulQuery,
  useGetFightQuery,
  useGetRPGQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: SportGames, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightQuery()
  const { data: simulatorGames, isLoading: isLoadingSimulation } =
    useGetSimulQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRPGQuery()

  // const [actionGames, setactionGames] = useState<Game[]>([])
  // const [SportGames, setSportGames] = useState<Game[]>([])
  // const [simulatorGames, setsimulatorGames] = useState<Game[]>([])
  // const [fightGames, setfightGames] = useState<Game[]>([])
  // const [rpgGames, setrpgGames] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
  //     .then((res) => res.json())
  //     .then((res) => setactionGames(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
  //     .then((res) => res.json())
  //     .then((res) => setSportGames(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
  //     .then((res) => res.json())
  //     .then((res) => setsimulatorGames(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
  //     .then((res) => res.json())
  //     .then((res) => setfightGames(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
  //     .then((res) => res.json())
  //     .then((res) => setrpgGames(res))
  // }, [])

  return (
    <>
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={SportGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={simulatorGames}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
    </>
  )
}
export default Categories
