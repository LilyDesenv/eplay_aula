import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  cursor: pointer;
`

export const Item = styled.li`
  position: relative;
  > img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;

  &.visivel {
    display: flex;
    transition: opacity 0.5s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    img {
      cursor: pointer;
    }
  }

  > img,
  iframe {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 80vh;
  }

  iframe {
    height: 480px;
  }
`
