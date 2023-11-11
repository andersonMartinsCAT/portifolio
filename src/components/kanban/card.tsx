import { Box, Typography } from "@mui/material";

interface Props {
  title: string,
  color?: string
  text: string
}

export default function Card({title, color, text}:Props) {
  return(
    <>
      <Box sx={{
        width: 300,
        border: "1px solid #ddd",
        borderRadius: "4px"
      }}>
        <Box  
        color={'primary'}
        sx={{
          backgroundColor: '#08e',
          
          padding: "5px 15px",
          borderRadius: "4px 4px 0 0"
        }}>
            <Typography color={'#fff'} variant="subtitle1" fontWeight={600}>{title}</Typography>
        </Box>
        <Box sx={{
          backgroundColor: '#fff',
          borderRadius: " 0 0 4px 4px",
          padding: "10px 20px",          
        }}>
            <Typography variant="body1" align='justify'>{text} </Typography>

        </Box>
      </Box>
    </>
  )
}