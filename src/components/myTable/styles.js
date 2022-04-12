import styled, { css } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
`;

export const TableHead = styled.thead`
  text-align: left;

  path {
    fill: #fff;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  cursor: pointer;
  border-bottom: 1px solid #ccc;

  &:nth-of-type(odd) {
    background: #eee;
  }

  &:hover {
    background: #ccc;
  }

  &:active {
    background: #ccc;
  }
`;

export const TableCellHeader = styled.th`
  ${({ theme }) => css`
    background-color: ${theme.colors.color2};
    color: #fff;
    font-weight: bold;
    padding: 6px;
    text-align: left;
  `}
`;

export const TableCellBody = styled.td`
  padding: 6px;
  text-align: left;
  font-size: 1.4rem;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;

  button {
    margin: 0px 5px 0px 5px;
    font-size: 1.4rem;
  }

  span {
    margin-right: 0;
  }
`;
