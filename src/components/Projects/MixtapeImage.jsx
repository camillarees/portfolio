import * as React from 'react';
import { useState } from 'react';
import { useHover } from '@mantine/hooks';
import { Anchor, Button, Image, Overlay, Title, Text } from '@mantine/core';


const MixtapeImage = () => {
    const { hovered, ref } = useHover();

    return (
        <>
            <Image
                src={`https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true?raw=true?w=248&fit=crop&auto=format`}
                srcSet={`https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt='my mixtape'
                loading="lazy"
                fit='contain'
                ref={ref}
                style={{ cursor: hovered ? 'pointer' : 'none' }}
            />
        </>
    );
}

export default MixtapeImage;