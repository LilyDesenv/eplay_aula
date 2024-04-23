import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxwidth?: string
}

type RowProps = {
  margintop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.margintop || '0'};
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxwidth || 'auto'};
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 16px;
    }
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  padding: 0 8px;
  border: none;
  height: 32px;
  margin-right: 16px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
