/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import P from 'prop-types';
import Link from 'next/link';
import nookies from 'nookies';

import Layout from '../../layout';

import { Container } from '../../components/container';
import { FaIndustry, FaUserEdit, FaTrash } from 'react-icons/fa';
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
  return (
    <Section>
      <Container>
        <Header>
          <Titulo>Empresas</Titulo>
          <Link href={'/empresas/cadastrarNovaEmpresa'}>
            <ButtonSuccess>
              <MenuIcon>
                <FaIndustry />
              </MenuIcon>
              Cadastrar nova empresa
            </ButtonSuccess>
          </Link>
        </Header>
        <Table
          columnsHeader={['Nome', 'CNPJ']}
          dbColumns={['name', 'cnpj']}
          data={data}
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

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
