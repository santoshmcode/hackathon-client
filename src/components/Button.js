import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ColorButtons() {
  return (
    <Stack style={{textAlign:'center'}}>
      <Button variant="contained" color="success" style={{width:'70%',margin:'auto'}}>
        Sell
      </Button>
    </Stack>
  );
}
