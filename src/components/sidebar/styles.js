import styled, { css } from 'styled-components';

import Media from '../../styles/media';

export const Container = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.color2};
    height: 100vh;
    width: 100vw;
    min-width: 27rem;
    position: fixed;
    top: 0;
    left: ${(props) => (props.clicked ? '0' : '-100%')};
    transition: left ease-in-out 0.5s;
    z-index: 1;
    .active {
      background-image: linear-gradient(
        45deg,
        ${theme.colors.color1},
        ${theme.colors.color6}
      );
    }

    ${Media.min_768} {
      width: 35rem;
    }

    ${Media.min_1200} {
      width: 27rem;
      left: ${(props) => (props.clicked ? '-100%' : '0')};
    }
  `};
`;

export const ContainerMenu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 7rem;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: white;
  font-size: 2rem;
  box-sizing: border-box;
`;

export const Menu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  list-style: none;
  padding: 10px;
  box-sizing: border-box;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    text-decoration: none;
    width: 100%;
    height: 3.3rem;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 10px 10px 0px 10px;
    padding: 5px 10px 5px 15px;
    background-color: ${(props) =>
      props.href === props.pathName ? theme.colors.color8 : ''};
    color: white;
    border-radius: 8px;
    box-sizing: border-box;
    &:hover {
      background-color: ${theme.colors.color8};
      cursor: pointer;
    }
  `}
`;

export const Span = styled.span`
  margin-right: 5px;
  position: absolute;
  right: 5px;
  cursor: pointer;

  svg {
    height: 3.4rem;
    width: 3.4rem;
    color: #fff;
    padding: 5px;
    box-sizing: border-box;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);

    &:hover {
      border: 2px solid #fff;
      border-radius: 5px;
    }
  }

  ${Media.min_1200} {
    display: none;
  }
`;

export const Separador = styled.hr`
  border: 0.5px solid #fff;
  margin: 0px 10px 0px 10px;
`;
