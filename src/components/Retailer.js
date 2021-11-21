import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from './Button.js';
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "../features/userSlice.js";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#607d8b",
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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables({ retailerData }) {
  console.log("In retailerData:", retailerData);
  const products = retailerData?.products;
  // console.log("products:", products);
  const name = retailerData?.name;
  // const [stock, setStock] = useState(products?.productCount);
  // console.log("stock:", stock);
  // const [retailerId, setRetailerId] = useState(retailerData?._id);
  // console.log("retailerId:", retailerId, retailerData);
  const user = useSelector(selectUser);
  const token = user.token;
  const retailerId = retailerData?._id;
  // console.log("retailerId:", retailerId, retailerData);

  let arr1 = ["Geyser", "Fans"];
  let arr2 = ["Cooler", "Fans"];
  // let retailer1 = [...arr1];
  // let retailer2 = [...arr2];

  const handleSell = async (productId, productCount, reorderPoint) => {

      console.log("productId:", productId, productCount, retailerId);
      try {
          let retailerCountUpdate = await axios.patch(
              `${process.env.REACT_APP_BASE_URL}/retailer/api/productCount`,
              { retId: retailerId, proId: productId, count: productCount - 1 },
              {
                  headers: {
                      authorization: `Bearer ${token}`,
                  },
              }
          );
        console.log("retailerCountUpdate:", retailerCountUpdate);
        
        if (productCount === reorderPoint + 1) {
            alert(
                `reorderPoint: ${reorderPoint} >= productCount: ${productCount} so, product request sent successfully to warehouse`
            );
            let warehouseReqCount = await axios.patch(
                `${process.env.REACT_APP_BASE_URL}/warehouse/api/requestCount`,
                {
                    retId: retailerId,
                    proId: productId,
                    count: reorderPoint - productCount,
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log("warehouseReqCount", warehouseReqCount);
        }
          // setManufacturerData(resManufacturer.data[0]);
      } catch (err) {
          console.log(err);
      }
  };
  
  return (
      <TableContainer
          component={Paper}
          style={{ width: "50%", margin: "1rem 1rem" }}
      >
          <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
              <TableHead>
                  <TableRow>
                      <StyledTableCell>Product</StyledTableCell>
                      <StyledTableCell align="center">
                          Current Stock
                      </StyledTableCell>
                      <StyledTableCell align="center">
                          Reorder Point
                      </StyledTableCell>
                      <StyledTableCell align="center">
                          Sold Product
                      </StyledTableCell>
                      {/* <StyledTableCell align="center">Protein&nbsp;(g)</StyledTableCell> */}
                  </TableRow>
              </TableHead>
              <TableBody>
                  {products?.map((row, i) => (
                      <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                              {name === "Pradeep Electronics"
                                  ? arr1[i]
                                  : arr2[i]}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                              {row.productCount}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                              {row.reorderPoint}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                              <Button
                                  handleSell={handleSell}
                                  reorderPoint={row.reorderPoint}
                                  productId={row.productId}
                                  productCount={row.productCount}
                              />
                          </StyledTableCell>
                          {/* <StyledTableCell align="center">{row.protein}</StyledTableCell> */}
                      </StyledTableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  );
}
