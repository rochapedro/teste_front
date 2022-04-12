import { AppProps } from 'next/app';
import { transitions, positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '5px',
  transition: transitions.SCALE,
};

export function AlertProvider({ children }) {
  return (
    <Provider template={AlertTemplate} {...options}>
      {children}
    </Provider>
  );
}

AlertProvider.propTypes = AppProps;
