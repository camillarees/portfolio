import * as React from 'react';
import { useHover } from '@mantine/hooks';
import { Image } from '@mantine/core';


const VftImage = () => {
    const { hovered, ref } = useHover();

    return (

            <Image
             src={`https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png?w=248&fit=crop&auto=format?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='vft'
             loading="lazy"
             fit='contain'
             ref={ref}
             style={{ cursor: hovered ? 'pointer' : 'none' }}
             
             >
                </Image>
            
    );
}

export default VftImage;