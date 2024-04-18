import styled from 'styled-components'
import { cores } from '../../styles'
import { HashLink as routerLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const Titulo = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(routerLink)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const Copyrigt = styled.p``
