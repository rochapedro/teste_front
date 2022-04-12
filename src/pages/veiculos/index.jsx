/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import P from 'prop-types';
import Link from 'next/link';
import nookies from 'nookies';

import Layout from '../../layout';

import { Container } from '../../components/container';
import { FaCar, FaUserEdit, FaTrash } from 'react-icons/fa';
import { Header, Titulo, ButtonGroup } from './styles';
import {
  ButtonPrimary,
  ButtonDanger,
  ButtonSuccess,
} from '../../components/button';
import { MenuIcon } from '../../components/menuIcon';
import { Section } from '../../components/section';
import CustomTable from '../../components/table';
import Table from '../../components/myTable';

export default function Index({ data }) {
  const dataTeste = [
    {
      license_plate: 'JDID-3748',
      year: '2001',
      car_model: 'Uno',
      company: 'Empresa de Teste',
    },
    {
      license_plate: 'JDID-3748',
      year: '2001',
      car_model: 'Uno',
      company: 'Empresa de Teste',
    },
    {
      license_plate: 'JDID-3748',
      year: '2001',
      car_model: 'Uno',
      company: 'Empresa de Teste',
    },
    {
      license_plate: 'JDID-3748',
      year: '2001',
      car_model: 'Uno',
      company: 'Empresa de Teste',
    },
  ];
  return (
    <Section>
      <Container>
        <Header>
          <Titulo>Veículos</Titulo>
          <Link href={'/veiculos/cadastrarVeiculo'}>
            <ButtonSuccess>
              <MenuIcon>
                <FaCar />
              </MenuIcon>
              Cadastrar novo veículo
            </ButtonSuccess>
          </Link>
        </Header>
        <Table
          columnsHeader={['Placa', 'Ano', 'Modelo', 'Empresa']}
          dbColumns={['license_plate', 'year', 'car_model', 'company']}
          data={dataTeste}
        />
      </Container>
    </Section>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(ctx) {
  const { token } = nookies.get(ctx);

  if (token) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    console.log(data);

    return { props: { data } };
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}

Index.proTypes = {
  data: P.array,
};
