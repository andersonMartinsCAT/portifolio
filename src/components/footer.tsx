
import { calcCurrentYear } from "@/utils";
import { Box, Typography } from "@mui/material";

export default function Footer(){
    return <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height:'80px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography>Desenvolvido por Anderson Martins</Typography>
        <Typography>{calcCurrentYear()}</Typography>
      </Box>
}