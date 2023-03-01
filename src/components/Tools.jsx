import * as React from 'react';
import { Group } from '@mantine/core';
import { BrandReact, BrandReactNative, BrandJavascript, BrandMantine, BrandMysql, BrandMongodb, BrandSass, BrandFigma, BrandGithub, BrandHtml5, BrandVscode } from 'tabler-icons-react';
import { motion } from 'framer-motion';

const ToolsLanguages = () => {

    return (

        <>
            <motion.div
                transition={{
                    duration: .5,
                    delay: .3,
                    ease: [0.2, 0.2, 0.2, 0.2],
                }}
                initial={{ opacity: 0, y: 23 }}
                whileInView={{ opacity: 1, y: 5 }}
                viewport={{ once: true }}
            >
                <Group>
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
                </Group>
            </motion.div>

        </>

    );
}

export default ToolsLanguages;