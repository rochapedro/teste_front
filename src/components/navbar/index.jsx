import { useContext } from 'react';
import Image from 'next/image';

import { ContainerNavbar, Menus, Span } from './styles';
import Dropdown from '../dropdown';
import { AuthContext } from '../../context/AuthContext';

import P from 'prop-types';

import { FaBars, FaUserAlt } from 'react-icons/fa';
import { destroyCookie } from 'nookies';

export default function Navbar(props) {
  return (
    <ContainerNavbar clicked={props.clicked}>
      <Span onClick={() => props.handleClick()}>
        <FaBars />
      </Span>
      <Menus>
        <Dropdown
          width="45"
          height="45"
          borderRadius="50"
          contentMarginTop="12"
          icon={<FaUserAlt />}
          itens={[
            {
              text: 'Sair',
              link: '/logout',
            },
          ]}
        />
      </Menus>
    </ContainerNavbar>
  );
}

Navbar.propTypes = {
  handleClick: P.func.isRequired,
  clicked: P.bool.isRequired,
};
