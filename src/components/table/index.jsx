import P from 'prop-types';
import { useState, useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { Checkbox } from '@mui/material';

import { StyledTableCell, StyledTableRow, Search } from './styles';

export default function CustomTable(props) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dataTeste, setDataTeste] = useState(null);
  const inputRef = useRef(null);

  if (dataTeste) {
    console.log(dataTeste);
  }

  function handleSelectAllClick() {
    inputRef.current.selected;
    console.log(inputRef.current);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <Search
                type="search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </TableRow>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                  checked
                />
              </StyledTableCell>
              {props.columnsHeader.map((header) => (
                <StyledTableCell align="left" key={header}>
                  {header}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((item) => {
                if (search == '') {
                  return item;
                } else if (
                  Object.values(item)
                    .toString()
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return item;
                }
                for (var i = 0; i <= Object.keys(item).length; i++) {
                  if (
                    Object.keys(item)
                      [i].toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                }
              })
              .map((data) => {
                return (
                  <StyledTableRow
                    key={data[0]}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    hover={true}
                    ref={inputRef}
                    role="checkbox"
                    selected={Checkbox.checked}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        inputProps={{
                          'aria-label': 'select all desserts',
                        }}
                        checked={true}
                      />
                    </StyledTableCell>
                    {Object.keys(data).map((column) =>
                      props.dbColumns.includes(column) ? (
                        <StyledTableCell key={column} align="left">
                          {data[column]}
                        </StyledTableCell>
                      ) : (
                        ''
                      ),
                    )}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

CustomTable.propTypes = {
  data: P.array.isRequired,
  columnsHeader: P.array.isRequired,
  dbColumns: P.array.isRequired,
};
