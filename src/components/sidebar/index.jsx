import {
  Container,
  Header,
  Separador,
  ContainerMenu,
  Menu,
  MenuItem,
} from './styles';

import { MenuIcon } from '../menuIcon';

import {
  FaUserFriends,
  FaExchangeAlt,
  FaIndustry,
  FaCarAlt,
} from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import { HiOutlineDocumentReport } from 'react-icons/hi';

import { Span } from './styles';
import { IoClose } from 'react-icons/io5';

import P from 'prop-types';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Sidebar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const router = useRouter();

  return (
    <Container clicked={props.clicked}>
      <Header>
        <h3>Supervisao 24 Horas</h3>
        <Span onClick={() => props.handleClick()}>
          <IoClose />
        </Span>
      </Header>
      <Separador />
      <ContainerMenu>
        <Menu>
          <Link href={'/colaboradores'}>
            <MenuItem pathName={router.pathname} href={'/colaboradores'}>
              <MenuIcon>
                <GrUserWorker />
              </MenuIcon>
              Colaboradores
            </MenuItem>
          </Link>
          <Link href={'/controlePortaria'}>
            <MenuItem pathName={router.pathname} href={'/controlePortaria'}>
              <MenuIcon>
                <FaExchangeAlt />
              </MenuIcon>
              Controle de Portaria
            </MenuItem>
          </Link>
          <Link href={'/empresas'}>
            <MenuItem pathName={router.pathname} href={'/empresas'}>
              <MenuIcon>
                <FaIndustry />
              </MenuIcon>
              Empresas
            </MenuItem>
          </Link>
          <Link href={'/usuarios'}>
            <MenuItem pathName={router.pathname} href={'/usuarios'}>
              <MenuIcon>
                <FaUserFriends />
              </MenuIcon>
              Usuários
            </MenuItem>
          </Link>
          {/* <Link href={'/relatorios'}>
            <MenuItem pathName={router.pathname} href={'/relatorios'}>
              <MenuIcon>
                <HiOutlineDocumentReport />
              </MenuIcon>
              Relatórios
            </MenuItem>
          </Link> */}
          <Link href={'/veiculos'}>
            <MenuItem pathName={router.pathname} href={'/veiculos'}>
              <MenuIcon>
                <FaCarAlt />
              </MenuIcon>
              Veículos
            </MenuItem>
          </Link>
        </Menu>
      </ContainerMenu>
    </Container>
  );
}

Sidebar.propTypes = {
  clicked: P.bool.isRequired,
  handleClick: P.func.isRequired,
};
