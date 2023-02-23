import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Space, Image } from '@mantine/core';


const PlantSpaceImage = () => {

    return (
        <Container>
        <Space h="xl" />
        <Box sx={{ width: 800 }}>
                 <Image
             src={`https://github.com/CHSMD/plant.space/blob/main/assets/img/plantSpace-UML.png?raw=true?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/CHSMD/plant.space/blob/main/assets/img/plantSpace-UML.png?raw=true?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='plant.space'
             loading="lazy"
             >

             </Image>
    
             
        </Box>
        </Container>
    );
}

export default PlantSpaceImage;