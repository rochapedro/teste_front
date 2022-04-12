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

export default function CadastrarUsuario({ data }) {
  const formRef = useRef(null);
  const alert = useAlert();
  const [selectValue, setSelectValue] = useState();

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        contributor_id: Yup.string().required('Selecionar o colaborador.'),
        user_name: Yup.string().required('Preencher o nome de usuário.'),
        password: Yup.string().required('Preencher a senha.'),
        perfil: Yup.string().required('Selecionar o perfil.'),
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
        formRef.current.getFieldRef('contributor_id').focus();
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
          <Titulo>Cadastrar novo usuário</Titulo>
          <Link href={'/usuarios'}>
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
              <label>Colaborador</label>
              <Select
                name="contributors"
                id="contributors"
                value={selectValue}
                onChange={(e) => {
                  setSelectValue(e.target.value);
                }}
              >
                <InputForm
                  name={'contributor_id'}
                  value={selectValue}
                  type={'hidden'}
                />
                <option value="">Selecione o colaborador</option>
                {data.map((comp) => {
                  return (
                    <option key={comp.id} value={comp.id}>
                      {comp.name}
                    </option>
                  );
                })}
              </Select>
            </CustomFormGroup>

            <CustomFormGroup>
              <label>Nome de usuário</label>
              <InputForm name={'user_name'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>Senha</label>
              <InputForm name={'password'} type={'password'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>Perfil</label>
              <Select
                name="contributors"
                id="contributors"
                value={selectValue}
                onChange={(e) => {
                  setSelectValue(e.target.value);
                }}
              >
                <InputForm
                  name={'perfil'}
                  value={selectValue}
                  type={'hidden'}
                />
                <option value="">Selecione perfil</option>
                <option value="1">Administrador</option>
                <option value="2">Comum</option>
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

CadastrarUsuario.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

CadastrarUsuario.propTypes = {
  data: P.array,
};

export async function getServerSideProps(ctx) {
  const { token } = nookies.get(ctx);

  if (token) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contributors`, {
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
