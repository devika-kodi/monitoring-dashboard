import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(breakdownType, downTime) {
  return { breakdownType, downTime };
}

const rows = [
  createData("Bearing", 10),
  createData("Shaft", 23),
  createData("Pneumatic", 28),
  createData("Radius Forming Unit", 5),
];

export default function Breakdown() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Breakdown Type</TableCell>
            <TableCell align="right">Downtime</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.breakdownType}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.breakdownType}
              </TableCell>
              <TableCell align="right">{row.downTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
