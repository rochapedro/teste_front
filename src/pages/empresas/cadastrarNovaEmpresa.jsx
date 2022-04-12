/* eslint-disable no-undef */
import P from 'prop-types';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import nookies from 'nookies';

import Layout from '../../layout';

import { Section } from '../../components/section';
import { MenuIcon } from '../../components/menuIcon';
import { Container } from '../../components/container';
import {
  Header,
  Titulo,
  ButtonSubmit,
  CustomFormGroup,
  FormContainer,
} from './styles';
import { ButtonPrimary } from '../../components/button';
import InputForm from '../../components/form/inputForm';

import { IoArrowBack } from 'react-icons/io5';
import { FaIndustry } from 'react-icons/fa';
import { Select } from '../../components/form/select';
import { createContributor } from '../../services/contributors';

export default function CadastrarEmpresa() {
  const formRef = useRef(null);
  const alert = useAlert();
  const [selectValue, setSelectValue] = useState();

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Preencher o nome.'),
        cnpj: Yup.string().required('Preencher o CNPJ.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          alert.error(error.message);
        });
        reset();
        formRef.current.getFieldRef('name').focus();
      } else {
        console.log(err);
        alert.error(
          'Ocorreu um erro. Entre em contato com os administradores do sitema.',
        );
      }
    }
  }

  return (
    <Section>
      <Container>
        <Header>
          <Titulo>Cadastrar nova empresa</Titulo>
          <Link href={'/empresas'}>
            <ButtonPrimary>
              <MenuIcon>
                <IoArrowBack />
              </MenuIcon>
              Voltar
            </ButtonPrimary>
          </Link>
        </Header>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormContainer>
            <CustomFormGroup>
              <label>Nome</label>
              <InputForm name={'name'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>CNPJ</label>
              <InputForm name={'cnpj'} type={'text'} />
            </CustomFormGroup>
          </FormContainer>
          <ButtonSubmit>
            <MenuIcon>
              <FaIndustry />
            </MenuIcon>
            Cadastrar
          </ButtonSubmit>
        </Form>
      </Container>
    </Section>
  );
}

CadastrarEmpresa.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

CadastrarEmpresa.propTypes = {
  data: P.array,
};

export async function getServerSideProps(ctx) {
  const { token } = nookies.get(ctx);

  if (token) {
    return { props: {} };
  } else {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}
