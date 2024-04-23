import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import Button from '../../components/Button'
import Card from '../../components/Card'

import creditCard from '../../assets/images/cartao.png'
import barcode from '../../assets/images/boleto.png'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBRL } from '../../utils'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])
  const totalPrice = getTotalPrice(items)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      nome: '',
      email: '',
      cpf: '',
      emailEntrega: '',
      emailConfirm: '',
      nomeCard: '',
      cpfCard: '',
      nomeInCard: '',
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
      cvv: '',
      parcelas: 1
    },
    validationSchema: yup.object({
      nome: yup
        .string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: yup
        .string()
        .email('email inválido')
        .required('O campo é obrigatório'),
      cpf: yup
        .string()
        .min(14, 'O cpf precisa ter 14 caracteres')
        .max(14, 'O cpf precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      emailEntrega: yup
        .string()
        .email('email inválido')
        .required('O campo é obrigatório'),
      emailConfirm: yup
        .string()
        .oneOf([yup.ref('emailEntrega')], 'Os email são diferentes')
        .required('O campo é obrigatório'),

      nomeCard: yup
        .string()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        ),
      cpfCard: yup
        .string()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        ),
      nomeInCard: yup
        .string()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        ),
      cardNumber: yup
        .string()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        ),
      cardMonth: yup
        .string()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        ),
      cardYear: yup
        .string()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        ),
      cvv: yup
        .string()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        ),
      parcelas: yup
        .number()
        .when((values, squema) =>
          payWithCard ? squema.required('O campo é obrigatório') : squema
        )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.nome,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.emailEntrega
        },
        payment: {
          card: {
            active: payWithCard,
            owner: {
              name: values.nomeCard,
              document: values.cpfCard
            },
            name: values.nomeInCard,
            number: values.cardNumber,
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear)
            },
            code: Number(values.cvv)
          },
          installments: values.parcelas
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isChanged && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateStallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBRL(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateStallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Muito Obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="mt">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="mt">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="mt">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente
            </p>
            <p className="mt">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados da cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.values.nome}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('nome') ? 'error' : ''}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    type="text"
                    id="cpf"
                    name="cpf"
                    onChange={form.handleChange}
                    value={form.values.cpf}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                    mask="999.999.999-99"
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="mt">Dados de entrega - conteúdo digital</h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="emailEntrega">E-mail</label>
                  <input
                    type="email"
                    id="emailEntrega"
                    name="emailEntrega"
                    value={form.values.emailEntrega}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('emailEntrega') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="emailConfirm">Confirmar E-mail</label>
                  <input
                    type="email"
                    id="emailConfirm"
                    name="emailConfirm"
                    value={form.values.emailConfirm}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('emailConfirm') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                type="button"
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
              >
                <img src={barcode} alt="Boleto bancário" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                type="button"
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
              >
                <img src={creditCard} alt="Cartão" />
                Cartão de Crédito
              </S.TabButton>
              <div className="mt">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="nomeCard">
                          Nome do Titular do cartão
                        </label>
                        <input
                          type="text"
                          id="nomeCard"
                          name="nomeCard"
                          value={form.values.nomeCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('nomeCard') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCard">
                          CPF do Titular do cartão
                        </label>
                        <InputMask
                          type="text"
                          id="cpfCard"
                          name="cpfCard"
                          value={form.values.cpfCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cpfCard') ? 'error' : ''
                          }
                          mask="999.999.999-99"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row margintop="24px">
                      <S.InputGroup>
                        <label htmlFor="nomeInCard">Nome no cartão</label>
                        <input
                          type="text"
                          id="nomeInCard"
                          name="nomeInCard"
                          value={form.values.nomeInCard}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('nomeInCard') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxwidth="123px">
                        <label htmlFor="cardMonth">Mês do vencimento</label>
                        <InputMask
                          type="text"
                          id="cardMonth"
                          name="cardMonth"
                          value={form.values.cardMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxwidth="123px">
                        <label htmlFor="cardYear">Ano do vencimento</label>
                        <InputMask
                          type="text"
                          id="cardYear"
                          name="cardYear"
                          value={form.values.cardYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxwidth="48px">
                        <label htmlFor="cvv">CVV</label>
                        <InputMask
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={form.values.cvv}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cvv') ? 'error' : ''}
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row margintop="24px">
                      <S.InputGroup maxwidth="150px">
                        <label htmlFor="parcelas">Parcelamento</label>
                        <select
                          id="parcelas"
                          name="parcelas"
                          value={form.values.parcelas}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('parcelas') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option
                              value={installment.quantity}
                              key={installment.quantity}
                            >
                              {installment.quantity}x de{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            onClick={form.handleSubmit}
            type="submit"
            title="Clique aqui para finalizar a compra"
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar Compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
