import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ColorButtons({handleSell, productId, productCount}) {
  return (
    <Stack style={{textAlign:'center'}}>
      <Button onClick={() => { handleSell(productId, productCount)}} variant="contained" color="grey" style={{width:'70%',margin:'auto', backgroundColor: "#cfd8dc"}} className="sellBtn">
        Sell
      </Button>
    </Stack>
  );
}
