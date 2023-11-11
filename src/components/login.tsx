import { Box, Button, TextField, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Login() {
  return (<>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', height: '100vh' }}>
      <Box
        sx={{
          width: 360,
          maxWidth: '100%',
        }}>

        <Typography variant="h1" component="h2" fontSize={36} fontWeight={900}>Login</Typography>
        <Typography variant="subtitle1">Sign in with your social account</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button><FacebookIcon fontSize="large" /></Button>
          <Button><GoogleIcon fontSize="large" /></Button>
          <Button><GitHubIcon fontSize="large" /></Button>
        </Box>
        <TextField id="username" label="username" variant="outlined" margin="dense" type="text" fullWidth />
        <TextField id="password" label="password" variant="outlined" margin="dense" type="password" fullWidth />

        <Button variant="contained" fullWidth>Login</Button>
      </Box>
    </Box>
  </>)
}