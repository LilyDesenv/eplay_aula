import { useEffect, useState } from 'react'
import ListaDeProdutos from '../../components/ListaDeProdutos'
import { Game } from '../../pages/Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])
  return (
    <>
      <ListaDeProdutos games={gamesRPG} title="RPG" background="black" />
      <ListaDeProdutos games={gamesAcao} title="Ação" background="gray" />
      <ListaDeProdutos
        games={gamesEsportes}
        title="Esportes"
        background="black"
      />
      <ListaDeProdutos
        games={gamesSimulacao}
        title="Simulação"
        background="gray"
      />
      <ListaDeProdutos games={gamesLuta} title="Luta" background="black" />
    </>
  )
}
export default Categories
