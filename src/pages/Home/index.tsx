import Banner from '../../components/Banner'
import ListaDeProdutos from '../../components/ListaDeProdutos'
import {
  useGetComingSoonGameQuery,
  useGetOnSaleGameQuery
} from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: promocoes, isLoading } = useGetOnSaleGameQuery()
  const { data: emBreve, isLoading: isLoadingSoon } =
    useGetComingSoonGameQuery()

  // const [promocoes, setPromocoes] = useState<Game[]>([])
  // const [emBreve, setEmBreve] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
  //     .then((res) => res.json())
  //     .then((res) => setPromocoes(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
  //     .then((res) => res.json())
  //     .then((res) => setEmBreve(res))
  // }, [])

  if (promocoes && emBreve) {
    return (
      <>
        <Banner />
        <ListaDeProdutos
          games={promocoes}
          title="Promoções"
          background="gray"
          id="onSale"
        />
        <ListaDeProdutos
          games={emBreve}
          title="Em breve"
          background="black"
          id="comingSoon"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Home
