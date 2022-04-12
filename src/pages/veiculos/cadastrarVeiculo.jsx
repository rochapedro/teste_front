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
import { FaCar } from 'react-icons/fa';
import { Select } from '../../components/form/select';
import { createContributor } from '../../services/contributors';

export default function CadastrarEmpresa({ data }) {
  const formRef = useRef(null);
  const alert = useAlert();
  const [selectValue, setSelectValue] = useState();

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        license_plate: Yup.string().required('Preencher a placa.'),
        year: Yup.string().required('Preencher o ano.'),
        car_model: Yup.string().required('Preencher o modelo.'),
        company_id: Yup.string().required('Preencher a empresa.'),
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
        formRef.current.getFieldRef('license_plate').focus();
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
          <Titulo>Cadastrar novo veículo</Titulo>
          <Link href={'/veiculos'}>
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
              <label>Placa</label>
              <InputForm name={'license_plate'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>Ano</label>
              <InputForm name={'year'} type={'text'} />
            </CustomFormGroup>

            <CustomFormGroup>
              <label>Modelo</label>
              <InputForm name={'car_model'} type={'text'} />
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
              <FaCar />
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
