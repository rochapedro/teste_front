import styled from 'styled-components';

import Media from '../../styles/media.js';

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`;

export const Container = styled(ContainerFluid)`
  ${Media.min_576} {
    max-width: 540px;
  }
  ${Media.min_768} {
    max-width: 720px;
  }
  ${Media.min_992} {
    max-width: 960px;
  }
  ${Media.min_1200} {
    max-width: 1140px;
  }
  ${Media.min_1400} {
    max-width: 1320px;
  }
`;
