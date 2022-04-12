/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Theme from '../styles/theme';

import { AppProps } from 'next/app';
import Media from '../styles/media';

export default function Layout({ children }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const Main = styled.main`
    width: 100%;
    box-sizing: border-box;
  `;

  const Content = styled.div`
    box-sizing: border-box;

    ${Media.min_1200} {
      transition: all ease-in-out 0.5s;
      margin-left: ${(props) => (props.clicked ? '0' : '27rem')};
    }
  `;

  return (
    <>
      <Theme>
        <Navbar clicked={click} handleClick={handleClick} />
        <Sidebar clicked={click} handleClick={handleClick} />
        <Content clicked={click}>
          <Main>{children}</Main>
        </Content>
      </Theme>
    </>
  );
}

Layout.propTypes = AppProps;
