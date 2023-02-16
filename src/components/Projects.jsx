import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Title, Space } from '@mantine/core';

const Projects = () => {
    const itemData = [
        {
            img: [
                'https://github.com/chjkt-bug-tracker/bug-tracker-frontend/blob/dev/assets/login_Screen.jpg?raw=true',
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
            <ImageList variant="masonry" cols={2} gap={10}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img[0]}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
        </Container>
    );
}

export default Projects;