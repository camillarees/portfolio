import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Title, Space, Image } from '@mantine/core';


const VftImage = () => {

    return (
        <Container>
        <Space h="xl" />
        <Box sx={{ width: 800 }}>
            <Image
             src={`https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png?w=248&fit=crop&auto=format?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='vft'
             loading="lazy"
             >
                </Image>
            
             
        </Box>
        </Container>
    );
}

export default VftImage;