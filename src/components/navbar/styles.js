import styled, { css } from 'styled-components';

import Media from '../../styles/media';

export const ContainerNavbar = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.color1};
    height: 70px;
    min-width: 35rem;
    position: relative;
    display: flex;
    align-items: center;
    transition: margin-left ease-in-out 0.5s;

    ${Media.min_1200} {
      margin-left: ${(props) => (props.clicked ? '0' : '27rem')};
    }
  `}
`;

export const Span = styled.span`
  margin-left: 15px;
  display: flex;
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
`;

export const Menus = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding-right: 15px;
`;
