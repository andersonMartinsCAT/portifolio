
import { Box, Button, Stack, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { calcAge } from "@/utils";

export default function Top(){
    return <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '800px', margin: 'auto', height: '100vh' }}>
    <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>

      <Typography sx={{ width: 'minContent' }} variant="h3" component="h1" fontSize={40} fontWeight={600}>OI, SOU ANDERSON,</Typography>
      <Box>
        <Button
          href="https://github.com/andersonMartinsCAT"
          size="large"
          target="_blank"
        >
          <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}>
            <GitHubIcon sx={{ fontSize: 64 }} />
            <Typography >GitHub</Typography >
          </Stack>
        </Button>
        <Button
          href="https://www.linkedin.com/in/amartins-dev/"
          size="large"
          target="_blank"
        >
          <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}>
            <LinkedInIcon sx={{ fontSize: 64 }} />
            <Typography >Linkedin</Typography >
          </Stack>
        </Button>
        <Button
          href="../../public/Anderson-Martins-Curriculo.pdf"
          size="large"
          target="_blank"
          download
        >
          <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}>
            <FileDownloadIcon sx={{ fontSize: 64 }} />
            <Typography >Curriculo</Typography >
          </Stack>
        </Button>
      </Box>
    </Box>
    <Typography variant="h1" component="h2" fontSize={120} fontWeight={900}>FULLSTACK</Typography>
    <Typography variant="h1" component="h2" fontSize={120} fontWeight={900}> DEVELOPER</Typography>
    <Typography variant="body1" fontSize={22} align='justify' >
      Com {calcAge()} anos de idade, tenho experiência como
      desenvolvedor fullstack, trabalhando com tecnologias como
      {" "}<strong>React</strong>, <strong>Angular</strong> e <strong>Node.js</strong>.
    </Typography>
  </ Box>
}