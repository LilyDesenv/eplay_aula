import ListaDeProdutos from '../../components/ListaDeProdutos'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: resident,
    infos: ['10%', 'R$250'],
    system: 'Windows'
  },

  {
    id: 2,
    title: 'Resident Evil 4 - Remake',
    category: 'Aventura',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: star_wars,
    infos: ['5%', 'R$290'],
    system: 'PS5'
  },

  {
    id: 3,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: resident,
    infos: ['10%', 'R$250'],
    system: 'PS5'
  },

  {
    id: 4,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: star_wars,
    infos: ['10%', 'R$250'],
    system: 'PS5'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Legend of Zelda',
    category: 'Aventura',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: zelda,
    infos: ['25/07'],
    system: 'Windows'
  },
  {
    id: 6,
    title: 'Diablo 4',
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: diablo,
    infos: ['17/05'],
    system: 'Windows'
  },
  {
    id: 7,
    title: 'Legend of Zelda',
    category: 'Aventura',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: zelda,
    infos: ['25/07'],
    system: 'Windows'
  },
  {
    id: 8,
    title: 'Diablo 4',
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vitae autem, voluptatem temporibus ex sequi deleniti voluptatibus deserunt fugiat veritatis vel eos alias, cumque quasi quas molestias dignissimos optio cupiditate.',
    image: diablo,
    infos: ['17/05'],
    system: 'Windows'
  }
]

const Categories = () => (
  <>
    <ListaDeProdutos games={promocoes} title="RPG" background="gray" />
    <ListaDeProdutos games={emBreve} title="Ação" background="black" />
    <ListaDeProdutos games={promocoes} title="Aventura" background="gray" />
    <ListaDeProdutos games={emBreve} title="FPS" background="black" />
  </>
)
export default Categories
