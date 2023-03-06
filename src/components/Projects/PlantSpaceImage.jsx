import * as React from 'react';
import { useHover } from '@mantine/hooks';
import { Image } from '@mantine/core';


const PlantSpaceImage = () => {
    const { hovered, ref } = useHover();

    return (
       
                 <Image
             src={`https://github.com/CHSMD/plant.space/raw/main/assets/img/plantspace.jpg?raw=true?w=248&fit=crop&auto=format`}
             srcSet={`https://github.com/CHSMD/plant.space/raw/main/assets/img/plantspace.jpg?raw=true?w=248&fit=crop&auto=format&dpr=2 2x`}
             alt='plant.space'
             loading="lazy"
             fit='contain'
             ref={ref}
             style={{ cursor: hovered ? 'pointer' : 'none' }}
             
             >

             </Image>
    
             
       
    );
}

export default PlantSpaceImage;