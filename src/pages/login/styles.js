import styled, { css } from 'styled-components';

import Media from '../../styles/media';

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    min-width: 350px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      45deg,
      ${theme.colors.color1},
      ${theme.colors.color6}
    );
  `}
`;

export const Container = styled.div`
  background-color: white;
  position: absolute;
  width: 90vw;
  min-width: 350px;
  height: 80vh;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);

  h1 {
    margin-bottom: 7rem;
  }

  Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;

    input {
      padding: 0px 30px 0px 60px;

      &:focus::-webkit-input-placeholder {
        color: transparent;
      }
    }

    button {
      margin-top: 2.5rem;
      width: 100%;
    }

    input,
    button {
      height: 50px;
      border-radius: 25px;
    }
  }

  ${Media.min_576} {
    max-width: 540px;
    max-height: 600px;
  }
`;

export const Div = styled.div`
  width: 100%;
  z-index: 1;
  margin-bottom: 15px;
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    pointer-events: none;
    font-size: 1.8rem;
    padding-left: 33px;
    transition: all 0.4s;
  }
`;
