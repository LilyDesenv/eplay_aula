import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SessionTitle>Categorias</S.SessionTitle>
        <S.Links>
          <li>
            <S.Link
              to="/categories#rpg"
              title="Clique aqui para acessar jogos de RPG"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#action"
              title="Clique aqui para acessar jogos de Ação"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#sports"
              title="Clique aqui para acessar jogos de Esportes"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#simulation"
              title="Clique aqui para acessar jogos de Simulação"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#fight"
              title="Clique aqui para acessar jogos de Luta"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SessionTitle>Acesso rápido</S.SessionTitle>
        <S.Links>
          <li>
            <S.Link
              to="/#onSale"
              title="Clique aqui para acessar a sessão de Promoções"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/#comingSoon"
              title="Clique aqui para acessar a sessão Em breve"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </S.FooterSection>
    </div>
  </S.Container>
)

export default Footer
