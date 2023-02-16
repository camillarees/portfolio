import * as React from 'react';
import { Space, Blockquote, Title, Image } from '@mantine/core';

import MyStory from './About';
import SkillBadges from './Skills';
import ToolsLanguages from './Tools';
import CoreValues from './Values';


const About = () => {

    return (
        <>
            <Title align='center'>Camilla Rees</Title>
            <Space h="xl" />
            <Blockquote>
                Hi! I'm Camilla Rees, the new girl in tech. I'm a recent bootcamp grad that pivoted from the nonprofit management and marketing space to software development.
            </Blockquote>

            <Image
                radius="md"
                src='https://media.licdn.com/dms/image/D5603AQHNTq2UEOLZ5A/profile-displayphoto-shrink_800_800/0/1671139885545?e=1681344000&v=beta&t=SeVUCH_rAJ9gWeXImVo7ntjO8xMJj54t4c7jxfgD4q4'
                alt="profile"
            />

            <MyStory />
            <SkillBadges />
            <ToolsLanguages />
            <CoreValues />

           

        </>
    );
}

export default About;