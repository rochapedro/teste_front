import styled from 'styled-components';

import { ButtonSuccess } from '../../components/button';
import FormGroup from '../../components/form/formGroup';
import Media from '../../styles/media';

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

export const ButtonSubmit = styled(ButtonSuccess)`
  width: 100%;
  margin-top: 30px;

  ${Media.min_576} {
    width: 27rem;
    float: right;
  }
`;

export const CustomFormGroup = styled(FormGroup)`
  ${Media.min_768} {
    width: 50%;
    padding: 0px 5px 0px 5px;
  }

  ${Media.min_1400} {
    width: 33.33%;
  }
`;

export const FormContainer = styled.div`
  ${Media.min_768} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
