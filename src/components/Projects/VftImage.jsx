import * as React from 'react';
import { Image } from '@mantine/core';


const VftImage = () => {

    return (

            <Image
             src={`https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png?w=248&fit=crop&auto=format?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='vft'
             loading="lazy"
             fit='contain'
             >
                </Image>
            
    );
}

export default VftImage;