import * as React from 'react';
import { Title } from '@mantine/core';
import { BrandReact, BrandReactNative, BrandJavascript, BrandMantine, BrandMysql, BrandMongodb, BrandSass, BrandFigma, BrandGithub, BrandHtml5, BrandVscode } from 'tabler-icons-react';

const ToolsLanguages = () => {

    return (

        <>
            <Title>Tools & Languages</Title>
            <BrandJavascript
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandReact
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandReactNative
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandMysql
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandMongodb
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandSass
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandMantine
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandFigma
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandGithub
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandHtml5
                size={48}
                strokeWidth={2}
                color={'black'}
            />
            <BrandVscode
                size={48}
                strokeWidth={2}
                color={'black'}
            />

        </>

    );
}

export default ToolsLanguages;