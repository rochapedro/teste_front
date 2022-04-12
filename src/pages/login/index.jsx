/* eslint-disable no-undef */
import { useContext, useRef } from 'react';
import { useAlert } from 'react-alert';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import { Section, Container, Div } from './styles';

import InputForm from '../../components/form/inputForm';
import { ButtonPrimary } from '../../components/button';
import { AuthContext } from '../../context/AuthContext';

export default function Index() {
  const formRef = useRef(null);
  const { singIn } = useContext(AuthContext);
  const alert = useAlert();

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        user_name: Yup.string().required('Preencher o usário.'),
        password: Yup.string().required('Preencher a senha.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      singIn(data);

      reset();
      formRef.current.getFieldRef('user_name').focus();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          alert.error(error.message);
        });
        reset();
        formRef.current.getFieldRef('user_name').focus();
      } else {
        alert.error(
          'Ocorreu um erro. Entre em contato com os administradores do sitema.',
        );
      }
    }
  }

  return (
    <Section id="SectionRelatorios">
      <Container>
        <h1>LOGIN</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Div>
            <InputForm
              name={'user_name'}
              type={'text'}
              placeholder={'Usuário'}
            />
            <span>
              <FaUserAlt />
            </span>
          </Div>
          <Div>
            <InputForm
              name={'password'}
              type={'password'}
              placeholder={'Senha'}
            />
            <span>
              <FaLock />
            </span>
          </Div>
          <ButtonPrimary>Entrar</ButtonPrimary>
        </Form>
      </Container>
    </Section>
  );
}
