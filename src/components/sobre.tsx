import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import foraDoMundo from "../assets/fora-do-mundo-profissional.jpeg"
import minhaHistoria from "../assets/minha-historia.jpeg"
import minhasHabilidades from "../assets/minhas-habilidades.jpeg"
import oQueEstouBuscando from "../assets/o-que-estou-buscando.jpeg"
import oQueFaco from "../assets/o-que-faco.jpeg"

export default function Sobre() {
    return <>
        <Box sx={{ maxWidth: '1400px', minHeight: '100vh', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap:'1rem' }}>            
            <Card title={"O que faço?"} image={oQueFaco} >Trabalho como Analista de Desenvolvimento de Sistemas na WEG Commercial Motors, onde minha missão é criar soluções que unam todos os pontos da cadeia de produção. Desenvolvo aplicações web, automatizo processos e analiso dados para encontrar aquelas oportunidades de melhoria que fazem toda a diferença.
            </Card>
            <Card title={"Minhas Habilidades?"} image={minhasHabilidades} >Sou um mestre em REST APIs usando Node.js, brinco com Angular, React e Next.js no front-end, e me sinto em casa com bancos de dados como MySQL e PostgreSQL. Além disso, sou um aventureiro em DevOps, navegando por GitLab, CI/CD, Docker e Kubernetes. Ah, e se precisar, encaro Python, C++, e até mesmo um pouco de Matlab.
            </Card>
            <Card title={"Minha História?"} image={minhaHistoria} >Minha jornada começou na Universidade Federal de Ouro Preto, onde me aventurei não só nos estudos, mas também como membro da equipe de futebol de robôs RODETAS. Bolsista de iniciação científica, me dediquei ao desenvolvimento de uma bancada para práticas de controle de processos com acesso remoto. E, é claro, fui o monitor da disciplina de Informática Industrial.
            </Card>
            <Card title={"Fora do Mundo Profissional?"} image={foraDoMundo} >Além da vida profissional, sou um músico freelancer em Belo Horizonte desde 2012. Afinal, a vida não é só códigos e algoritmos, certo?
            </Card>
            <Card title={"O Que Estou Buscando?"} image={oQueEstouBuscando} >Atualmente, estou de olho na certificação Six Sigma Green Belt, com um projeto que mergulha na análise de ruído e vibração automatizado. Afinal, o aprendizado nunca para!
            </Card> 
        </Box>
    </>
}

interface CardInterface {
    title: string;
    children: string;
    image: StaticImageData;
}

function Card({ title, children, image }: CardInterface) {
    return <Box
      sx={{
        maxWidth: '24rem',
        gap: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        p: '1rem',
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Image
        width={380}
        height={260}
        src={image}
        alt={`${image} Imagem gerada utilizando Bing.`}
      />
      <Typography>{children}</Typography>
    </Box>
}