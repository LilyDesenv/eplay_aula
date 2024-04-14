import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const BotaoContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  color: ${cores.branca};
`

export const BotaoLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  color: ${cores.branca};
`
