/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import P from 'prop-types';
import { useRef, useState } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import { Form } from '@unform/web';

import Layout from '../../layout';

import { Container } from '../../components/container';
import { FaArrowCircleDown, FaUserEdit, FaTrash } from 'react-icons/fa';
import {
  Header,
  Titulo,
  ButtonGroup,
  FormContainer,
  CustomFormGroup,
  ButtonSubmit,
  SubTitulo,
  Row,
  Panel,
  PanelBody,
  CardTitle,
  CustomTabs,
  PanelColaborador,
  PanelFoto,
} from './styles';
import {
  ButtonPrimary,
  ButtonDanger,
  ButtonSuccess,
} from '../../components/button';
import Table from '../../components/myTable';
import { MenuIcon } from '../../components/menuIcon';
import { Section } from '../../components/section';
import InputForm from '../../components/form/inputForm';
import { Select } from '../../components/form/select';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';

export default function Index({ data }) {
  const formRef = useRef(null);
  const [movimentacaoValue, setMovimentacaoValue] = useState();
  const [empresaValue, setEmpresaValue] = useState();
  const [placaValue, setPlacaValue] = useState();
  const [motoristaValue, setMotoristaValue] = useState();

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
          <Titulo>Controle de portaria</Titulo>
        </Header>
        <CustomTabs>
          <TabList>
            <Tab>Frota</Tab>
            <Tab>Colaboradores</Tab>
          </TabList>

          <TabPanel>
            <Container>
              <SubTitulo>Movimentação de veículos - Frota</SubTitulo>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <FormContainer>
                  <Row>
                    <CustomFormGroup>
                      <label>Movimentação</label>
                      <Select
                        name="movimentacao"
                        id="movimentacao"
                        value={movimentacaoValue}
                        onChange={(e) => {
                          setMovimentacaoValue(e.target.value);
                        }}
                      >
                        <InputForm
                          name={'movimentacao'}
                          value={movimentacaoValue}
                          type={'hidden'}
                        />
                        <option value="">Selecione a movimentação</option>
                        <option value={1}>Entrada</option>
                        <option value={2}>Saida</option>
                      </Select>
                    </CustomFormGroup>
                    <CustomFormGroup>
                      <label>Data</label>
                      <InputForm name={'date'} type={'date'} />
                    </CustomFormGroup>
                  </Row>
                  <Panel>
                    <PanelBody>
                      <CardTitle>Informações do veículo</CardTitle>
                      <Row>
                        <CustomFormGroup>
                          <label>Placa</label>
                          <Select
                            name="placa"
                            id="placa"
                            value={placaValue}
                            onChange={(e) => {
                              setPlacaValue(e.target.value);
                            }}
                          >
                            <InputForm
                              name={'licence_plate'}
                              value={placaValue}
                              type={'hidden'}
                            />
                            <option value="">Selecione a placa</option>
                            <option value={1}>HYD-4337</option>
                            <option value={2}>HTD-4837</option>
                            <option value={3}>AYD-4457</option>
                          </Select>
                        </CustomFormGroup>

                        <CustomFormGroup>
                          <label>Ano</label>
                          <InputForm name={'year'} type={'date'} />
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
                            value={empresaValue}
                            onChange={(e) => {
                              setEmpresaValue(e.target.value);
                            }}
                          >
                            <InputForm
                              name={'company_id'}
                              value={empresaValue}
                              type={'hidden'}
                            />
                            <option value="">Selecione a Empresa</option>
                            <option value={1}>Empresa de Teste 1</option>
                            <option value={2}>Empresa de Teste 2</option>
                            <option value={3}>Empresa de Teste 3</option>
                            <option value={4}>Empresa de Teste 4</option>
                          </Select>
                        </CustomFormGroup>
                      </Row>
                    </PanelBody>
                  </Panel>
                  <Panel>
                    <PanelBody>
                      <CardTitle>Informações do motorista</CardTitle>
                      <Row>
                        <CustomFormGroup>
                          <label>Nome do motorista</label>
                          <Select
                            name="placa"
                            id="placa"
                            value={placaValue}
                            onChange={(e) => {
                              setPlacaValue(e.target.value);
                            }}
                          >
                            <InputForm
                              name={'licence_plate'}
                              value={placaValue}
                              type={'hidden'}
                            />
                            <option value="">Selecione a placa</option>
                            <option value={1}>HYD-4337</option>
                            <option value={2}>HTD-4837</option>
                            <option value={3}>AYD-4457</option>
                          </Select>
                        </CustomFormGroup>

                        <CustomFormGroup>
                          <label>CPF do motorista</label>
                          <InputForm name={'cpf'} type={'text'} />
                        </CustomFormGroup>
                      </Row>
                    </PanelBody>
                  </Panel>
                  <ButtonSubmit>
                    <MenuIcon>
                      <FaArrowCircleDown />
                    </MenuIcon>
                    Cadastrar
                  </ButtonSubmit>
                </FormContainer>
              </Form>
            </Container>
            <Container>
              <Table
                columnsHeader={[
                  'Placa',
                  'Ano',
                  'Modelo',
                  'Data',
                  'Motorista',
                  'CPF Motorista',
                  'Empresa',
                  'Movimento',
                ]}
                dbColumns={[
                  'placa',
                  'ano',
                  'modelo',
                  'data',
                  'motorista',
                  'cpf',
                  'empresa',
                  'movimento',
                ]}
                data={[
                  {
                    placa: 'EID-3847',
                    ano: '2010',
                    modelo: 'Palio',
                    data: '12/03/2021',
                    motorista: 'Pedro Corre',
                    cpf: '283.234.567-76',
                    empresa: 'Empresa de Teste',
                    movimento: 'Entrada',
                  },
                  {
                    placa: 'EID-3847',
                    ano: '2010',
                    modelo: 'Palio',
                    data: '12/03/2021',
                    motorista: 'Pedro Corre',
                    cpf: '283.234.567-76',
                    empresa: 'Empresa de Teste',
                    movimento: 'Saida',
                  },
                  {
                    placa: 'EID-3847',
                    ano: '2010',
                    modelo: 'Palio',
                    data: '12/03/2021',
                    motorista: 'Pedro Corre',
                    cpf: '283.234.567-76',
                    empresa: 'Empresa de Teste',
                    movimento: 'Entrada',
                  },
                  {
                    placa: 'EID-3847',
                    ano: '2010',
                    modelo: 'Palio',
                    data: '12/03/2021',
                    motorista: 'Pedro Corre',
                    cpf: '283.234.567-76',
                    empresa: 'Empresa de Teste',
                    movimento: 'Saida',
                  },
                ]}
              />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container>
              <SubTitulo>Movimentação de colaboradores</SubTitulo>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <FormContainer>
                  <Row>
                    <CustomFormGroup>
                      <label>Movimentação</label>
                      <Select
                        name="movimentacao"
                        id="movimentacao"
                        value={movimentacaoValue}
                        onChange={(e) => {
                          setMovimentacaoValue(e.target.value);
                        }}
                      >
                        <InputForm
                          name={'movimentacao'}
                          value={movimentacaoValue}
                          type={'hidden'}
                        />
                        <option value="">Selecione a movimentação</option>
                        <option value={1}>Entrada</option>
                        <option value={2}>Saida</option>
                      </Select>
                    </CustomFormGroup>
                    <CustomFormGroup>
                      <label>Data</label>
                      <InputForm name={'date'} type={'date'} />
                    </CustomFormGroup>
                  </Row>
                  <Row>
                    <PanelFoto>
                      <PanelBody>
                        <CardTitle>Foto colaborador</CardTitle>
                        <img src="" style={{ width: '100%', height: 'auto' }} />
                      </PanelBody>
                    </PanelFoto>
                    <PanelColaborador>
                      <PanelBody>
                        <CardTitle>Informações do colaborador</CardTitle>
                        <Row>
                          <CustomFormGroup>
                            <label>Nome</label>
                            <Select
                              name="name"
                              value={placaValue}
                              onChange={(e) => {
                                setPlacaValue(e.target.value);
                              }}
                            >
                              <InputForm
                                name={'licence_plate'}
                                value={placaValue}
                                type={'hidden'}
                              />
                              <option value="">Selecione o nome</option>
                              <option value={1}>Pedro Correa</option>
                              <option value={2}>João Alberto</option>
                              <option value={3}>Diego Fernandes</option>
                            </Select>
                          </CustomFormGroup>

                          <CustomFormGroup>
                            <label>CPF</label>
                            <InputForm name={'cpf'} type={'text'} />
                          </CustomFormGroup>

                          <CustomFormGroup>
                            <label>E-mail</label>
                            <InputForm name={'email'} type={'email'} />
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
                              value={empresaValue}
                              onChange={(e) => {
                                setEmpresaValue(e.target.value);
                              }}
                            >
                              <InputForm
                                name={'company_id'}
                                value={empresaValue}
                                type={'hidden'}
                              />
                              <option value="">Selecione a Empresa</option>
                              <option value={1}>Empresa de Teste 1</option>
                              <option value={2}>Empresa de Teste 2</option>
                              <option value={3}>Empresa de Teste 3</option>
                              <option value={4}>Empresa de Teste 4</option>
                            </Select>
                          </CustomFormGroup>
                        </Row>
                      </PanelBody>
                    </PanelColaborador>
                  </Row>
                  <ButtonSubmit>
                    <MenuIcon>
                      <FaArrowCircleDown />
                    </MenuIcon>
                    Cadastrar
                  </ButtonSubmit>
                </FormContainer>
              </Form>
            </Container>
            <Container>
              <Table
                columnsHeader={[
                  'Nome',
                  'CPF',
                  'E-mail',
                  'Telefone',
                  'Empresa',
                  'Data',
                  'Movimento',
                ]}
                dbColumns={[
                  'nome',
                  'cpf',
                  'email',
                  'telefone',
                  'empresa',
                  'data',
                  'movimento',
                ]}
                data={[
                  {
                    nome: 'Pedro Correa',
                    cpf: '323.543.456-54',
                    email: 'pedro.correa@hotmail.com',
                    telefone: '(31) 98473-4726',
                    empresa: 'Empresa de Teste',
                    data: '10/03/2021',
                    movimento: 'Entrada',
                  },
                  {
                    nome: 'Pedro Correa',
                    cpf: '323.543.456-54',
                    email: 'pedro.correa@hotmail.com',
                    telefone: '(31) 98473-4726',
                    empresa: 'Empresa de Teste',
                    data: '10/03/2021',
                    movimento: 'Saida',
                  },
                  {
                    nome: 'Pedro Correa',
                    cpf: '323.543.456-54',
                    email: 'pedro.correa@hotmail.com',
                    telefone: '(31) 98473-4726',
                    empresa: 'Empresa de Teste',
                    data: '10/03/2021',
                    movimento: 'Entrada',
                  },
                  {
                    nome: 'Pedro Correa',
                    cpf: '323.543.456-54',
                    email: 'pedro.correa@hotmail.com',
                    telefone: '(31) 98473-4726',
                    empresa: 'Empresa de Teste',
                    data: '10/03/2021',
                    movimento: 'Saida',
                  },
                ]}
              />
            </Container>
          </TabPanel>
        </CustomTabs>
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
