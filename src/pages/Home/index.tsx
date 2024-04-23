import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import {
  useGetComingSoonGameQuery,
  useGetOnSaleGameQuery
} from '../../services/api'

const Home = () => {
  const { data: onSale, isLoading: isLoadingSale } = useGetOnSaleGameQuery()
  const { data: soon, isLoading: isLoadingSoon } = useGetComingSoonGameQuery()

  // const [onSale, setonSale] = useState<Game[]>([])
  // const [soon, setsoon] = useState<Game[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/eplay/onSale')
  //     .then((res) => res.json())
  //     .then((res) => setonSale(res))

  //   fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
  //     .then((res) => res.json())
  //     .then((res) => setsoon(res))
  // }, [])

  return (
    <>
      <Banner />
      <ProductsList
        games={onSale}
        title="Promoções"
        background="gray"
        id="onSale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soon}
        title="Em breve"
        background="black"
        id="comingSoon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}
export default Home
