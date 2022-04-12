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
import { FaUserPlus } from 'react-icons/fa';
import { Select } from '../../components/form/select';
import { createContributor } from '../../services/contributors';

export default function CadastrarColaborador({ data }) {
  const formRef = useRef(null);
  const alert = useAlert();
  const [selectValue, setSelectValue] = useState();

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Preencher o nome.'),
        last_name: Yup.string().required('Preencher o sobrenome.'),
        cpf: Yup.string().required('Preencher o cpf.'),
        email: Yup.string().required('Preencher o email.'),
        telephone: Yup.string().required('Preencher o telephone.'),
        company_id: Yup.string().required('Selecionar a empresa.'),
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
          <Titulo>Cadastrar novo colaborador</Titulo>
          <Link href={'/colaboradores'}>
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
              <label>Sobrenome</label>
              <InputForm name={'last_name'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>CPF</label>
              <InputForm name={'cpf'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>E-mail</label>
              <InputForm name={'email'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>Telefone</label>
              <InputForm name={'telephone'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>Empresa</label>
              <Select
                name="companies"
                id="companies"
                value={selectValue}
                onChange={(e) => {
                  setSelectValue(e.target.value);
                }}
              >
                <InputForm
                  name={'company_id'}
                  value={selectValue}
                  type={'hidden'}
                />
                <option value="">Selecione a Empresa</option>
                {data.map((comp) => {
                  return (
                    <option key={comp.id} value={comp.id}>
                      {comp.name}
                    </option>
                  );
                })}
              </Select>
            </CustomFormGroup>
          </FormContainer>
          <ButtonSubmit>
            <MenuIcon>
              <FaUserPlus />
            </MenuIcon>
            Cadastrar
          </ButtonSubmit>
        </Form>
      </Container>
    </Section>
  );
}

CadastrarColaborador.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

CadastrarColaborador.propTypes = {
  data: P.array,
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
