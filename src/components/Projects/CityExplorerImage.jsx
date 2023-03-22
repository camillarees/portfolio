import * as React from 'react';
import { useHover } from '@mantine/hooks';
import {  Image } from '@mantine/core';


const MixtapeImage = () => {
    const { hovered, ref } = useHover();

    return (
        <>
            <Image
                src={`https://github.com/camillarees/city-explorer/blob/main/public/images/city-explorer-demo-image.png?raw=true?raw=true?raw=true?w=248&fit=crop&auto=format`}
                srcSet={`https://github.com/camillarees/city-explorer/blob/main/public/images/city-explorer-demo-image.png?raw=true?raw=true?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt='city explorer'
                loading="lazy"
                fit='contain'
                ref={ref}
                style={{ cursor: hovered ? 'pointer' : 'none' }}
            />
        </>
    );
}

export default MixtapeImage;