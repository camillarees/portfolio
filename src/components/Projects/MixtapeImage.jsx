import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Title, Space, Image } from '@mantine/core';


const MixtapeImage = () => {

    return (
        <Container>
       
        <Space h="xl" />
        <Box sx={{ width: 800 }}>
        
                <Space h="xl" />
                 <Image
             src={`https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true?raw=true?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='my mixtape'
             loading="lazy"
             >
                </Image>
             
        </Box>
        </Container>
    );
}

export default MixtapeImage;