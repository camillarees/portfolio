import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Title, Space, Image } from '@mantine/core';


const ProjectImage = () => {

    const projectsData =
    [
        {
                img: [
                    'https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png',
                    '../public/images/projects/vft/login.png',
            ],
                title: 'vft',
        },
        {
                img: [
                    'https://github.com/CHSMD/plant.space/blob/main/assets/img/plantSpace-UML.png?raw=true',
                    'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            ],
                title: 'plant.space',
        },
        {
                img: [
                    'https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true',
                    'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            ],
                title: 'mymixtape',
        },
    ];


    return (
        <Container>
        <Title align="center">Projects</Title>
        <Space h="xl" />
        <Box sx={{ width: 800 }}>
        {projectsData.map((item) => (
            <Image
             key={item.img}
             src={`${item.img[0]}?w=248&fit=crop&auto=format`}
             srcSet={`${item.img[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt={item.title}
             loading="lazy"
             >
               
               
            </Image>
             ))}
        </Box>
        </Container>
    );
}

export default ProjectImage;