import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBRL } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItemCart = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBRL(item.prices.current)}</span>
                  </div>
                  <button
                    onClick={() => removeItemCart(item.id)}
                    type="button"
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de{parseToBRL(getTotalPrice(items))}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui pra finalizar a compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <>
            <p className="emptyText">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
