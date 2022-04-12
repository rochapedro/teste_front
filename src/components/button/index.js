import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1.6rem;
  border-radius: 0.35rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const ButtonPrimary = styled(Button)`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;

  &:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;

export const ButtonDanger = styled(Button)`
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;

  &:hover {
    color: #fff;
    background-color: #bb2d3b;
    border-color: #b02a37;
  }
`;

export const ButtonSuccess = styled(Button)`
  color: #fff;
  background-color: #198754;
  border-color: #198754;

  &:hover {
    color: #fff;
    background-color: #157347;
    border-color: #146c43;
  }
`;
