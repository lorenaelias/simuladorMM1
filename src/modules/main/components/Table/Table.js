import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(experimento, tec, tc, tf, tis, tfs, tcs, tl) {
  return { experimento, tec, tc, tf, tis, tfs, tcs, tl };
}

const rows = [
  createData(1, 22, 6, 24, 4, 5, 4, 5),
  createData(2, 23, 9, 37, 4, 4, 4, 4),
  createData(3, 20, 16, 24, 6, 2, 2, 3),
  createData(4, 23, 3, 67, 4, 3, 2, 1),
  createData(5, 20, 16, 49, 3, 1, 3, 3),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Experimento</TableCell>
            <TableCell align="right">TEC</TableCell>
            <TableCell align="right">TC</TableCell>
            <TableCell align="right">TF</TableCell>
            <TableCell align="right">TIS</TableCell>
            <TableCell align="right">TFS</TableCell>
            <TableCell align="right">TCS</TableCell>
            <TableCell align="right">TL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.experimento}>
              <TableCell component="th" scope="row">
                {row.experimento}
              </TableCell>
              <TableCell align="right">{row.tec}</TableCell>
              <TableCell align="right">{row.tc}</TableCell>
              <TableCell align="right">{row.tf}</TableCell>
              <TableCell align="right">{row.tis}</TableCell>
              <TableCell align="right">{row.tfs}</TableCell>
              <TableCell align="right">{row.tcs}</TableCell>
              <TableCell align="right">{row.tl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}