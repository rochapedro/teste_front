import P from 'prop-types';
import { useState, useRef } from 'react';

import {
  Table as CustomTable,
  TableHead,
  TableRow,
  TableBody,
  TableCellHeader,
  TableCellBody,
  TableContainer,
  ButtonGroup,
} from './styles';
import { ButtonSuccess, ButtonPrimary, ButtonDanger } from '../button';
import { MenuIcon } from '../menuIcon';

import { FaUserPlus, FaUserEdit, FaTrash } from 'react-icons/fa';

export default function Table(props) {
  const [select, setSelect] = useState(false);
  const rowRef = useRef(null);

  return (
    <TableContainer>
      <CustomTable>
        <TableHead align="left">
          <TableRow>
            {props.columnsHeader.map((header, index) => {
              return <TableCellHeader key={index}>{header}</TableCellHeader>;
            })}
            <TableCellHeader></TableCellHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((dados) => {
            return (
              <TableRow select={false} ref={rowRef} key={dados[0]}>
                {Object.keys(dados).map((column) =>
                  props.dbColumns.includes(column) ? (
                    <TableCellBody key={column}>{dados[column]}</TableCellBody>
                  ) : (
                    ''
                  ),
                )}
                <TableCellBody>
                  <ButtonGroup>
                    <ButtonPrimary>
                      <MenuIcon>
                        <FaUserEdit />
                      </MenuIcon>
                    </ButtonPrimary>
                    <ButtonDanger>
                      <MenuIcon>
                        <FaTrash />
                      </MenuIcon>
                    </ButtonDanger>
                  </ButtonGroup>
                </TableCellBody>
              </TableRow>
            );
          })}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
}

Table.propTypes = {
  data: P.array.isRequired,
  columnsHeader: P.array.isRequired,
  dbColumns: P.array.isRequired,
};
