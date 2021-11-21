import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:' #607d8b',
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 400
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];


export default function Manufacturer({manufacturerData}) {
  // const { pendingRequests } = manufacturerData;
  const pendingRequests = manufacturerData?.pendingRequests;
  console.log("pendingRequests:",pendingRequests);
  const prodName = ["Fans", "Geyser", "Coolers"];

  return (
    <TableContainer component={Paper} style={{width:'47%'}}>
      <Table sx={{ maxWidth: '100%'}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Current Stock</StyledTableCell>
            <StyledTableCell align="right">Reorder Point</StyledTableCell>
            <StyledTableCell align="right">Request By Warehouse</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody> 
            {pendingRequests?.map((e, i) => (
              <>
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                  {prodName[i]}
                  </StyledTableCell>
                    {console.log("totalCount:", e.fTotalCount, prodName[1], e.requestCount)}
                  <StyledTableCell align="right">{e.fTotalCount}</StyledTableCell>
                  <StyledTableCell align="right">10</StyledTableCell>
                  <StyledTableCell align="right">{e.requestCount}</StyledTableCell>
                </StyledTableRow>
                </>
             ))}
             
        </TableBody>

              {/* <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}

      </Table>
    </TableContainer>
  );
}
