import * as React from 'react';
import { Image } from '@mantine/core';


const PlantSpaceImage = () => {

    return (
       
                 <Image
             src={`https://github.com/CHSMD/plant.space/raw/main/assets/img/plantspace.jpg?raw=true?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/CHSMD/plant.space/raw/main/assets/img/plantspace.jpg?raw=true?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='plant.space'
             loading="lazy"
             fit='contain'
             >

             </Image>
    
             
       
    );
}

export default PlantSpaceImage;