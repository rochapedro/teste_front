import styled, { css } from 'styled-components';

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdowButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.color2};
    color: white;
    width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
    height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    border: none;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius + '%' : '0'};
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${theme.colors.color4};
    }
  `}
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  right: 0;
  margin-top: ${(props) =>
    props.contentMarginTop ? props.contentMarginTop + 'px' : '0'};
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: #fff;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #ddd;
    }
  }
`;
