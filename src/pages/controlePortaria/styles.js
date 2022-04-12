import styled from 'styled-components';

import { ButtonSuccess } from '../../components/button';
import FormGroup from '../../components/form/formGroup';
import Media from '../../styles/media';
import { Tabs } from 'react-tabs';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  button {
    margin: 7px 7px 6px 0px;
    width: 100%;

    ${Media.min_576} {
      width: 27rem;
    }
  }

  ${Media.min_768} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Titulo = styled.h1`
  font-size: 2.7rem;
  margin-bottom: 1rem;

  ${Media.min_768} {
    margin-bottom: 0;
  }
`;

export const SubTitulo = styled.h3`
  margin-top: 20px;
`;

export const ButtonSubmit = styled(ButtonSuccess)`
  width: 100%;
  margin-top: 30px;
  float: rigth;

  ${Media.min_576} {
    width: 27rem;
    float: right;
  }
`;

export const CustomFormGroup = styled(FormGroup)`
  ${Media.min_768} {
    width: 33.33%;
    padding: 0px 5px 0px 5px;
  }
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  ${Media.min_768} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Panel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 100%;
  margin: 10px 0px 10px 0px;
`;

export const PanelColaborador = styled(Panel)`
  width: 65%;
`;

export const PanelFoto = styled(Panel)`
  width: 30%;
  margin-right: 10px;
`;

export const PanelBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
`;

export const CardTitle = styled.h4`
  margin-bottom: 20px;
`;

export const CustomTabs = styled(Tabs)`
  margin-bottom: 50px;
`;
