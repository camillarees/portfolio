import * as React from 'react';
import { Group, Space, Blockquote, Title, Image, createStyles } from '@mantine/core';
import { motion } from "framer-motion"

const useStyles = createStyles((theme) => ({
    body: {
        padding: '.6%',
        lineHeight: 1.5,
    },
}));

const About = () => {

    <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
/>

    const { classes } = useStyles();

    return (
        <>
  
           <Title align='center' >Camilla Rees</Title>
    
            <Space h="xl" />
            <Group position="center" grow>
            <Blockquote classNames={classes.body}>
                Hi! I'm Camilla Rees, the new girl in tech. I'm a recent bootcamp grad that pivoted from the nonprofit management and marketing space to software development.
            </Blockquote>

            <Image
                radius="md"
                width='100%'
                fit="contain"
                src='https://media.licdn.com/dms/image/D5603AQHNTq2UEOLZ5A/profile-displayphoto-shrink_800_800/0/1671139885545?e=1681344000&v=beta&t=SeVUCH_rAJ9gWeXImVo7ntjO8xMJj54t4c7jxfgD4q4'
                alt="profile"
            />
            </Group>

           

        </>
    );
}

export default About;