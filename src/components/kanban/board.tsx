import { Box } from "@mui/material";
import { green } from "@mui/material/colors";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}


export default function Board({children}: Props) {
  return(
    <Box sx={{
      display: "flex",
      gap: 2,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '#333',     
      
    }}>
      {children}
    </Box>
  )
}