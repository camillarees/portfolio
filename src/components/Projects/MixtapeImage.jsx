import * as React from 'react';
import { Image } from '@mantine/core';


const MixtapeImage = () => {

    return (
     
                 <Image
             src={`https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true?raw=true?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='my mixtape'
             loading="lazy"
             fit='contain'
             >
                </Image>
             
      
    );
}

export default MixtapeImage;