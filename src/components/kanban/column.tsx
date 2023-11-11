import { Box, Typography } from "@mui/material";
import { title } from "process";
import { ReactNode } from "react";


interface Props {
  children?: ReactNode,
  title: string
}
export default function Column({children, title}: Props) {
  return(
    <>
      <Box sx={{
        backgroundColor: '#eee',
        padding: "15px 0 15px 15px" ,
        borderRadius: "8px"
        
      }}
      >
        <Typography variant="subtitle1" fontWeight={800}>{title}</Typography>
        <Box sx={{          
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "80vh",
          overflowY: 'scroll',
        }}>
        {children}

        </Box>
      </Box>
    </>
  )
}