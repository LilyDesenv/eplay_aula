import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import cartIcon from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburger>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Link>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a página de Categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a sessão de Em Breve"
                  to="/#comingSoon"
                >
                  Em Breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a sessão de Promoções"
                  to="/#onSale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Link>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span> - Produto(s)</span>
          <img src={cartIcon} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'isOpen' : ''}>
        <S.Link>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a página de Categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a sessão de Em Breve"
              to="/#comingSoon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em Breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a sessão de Promoções"
              to="/#onSale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Link>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
