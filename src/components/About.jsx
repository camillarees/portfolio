import * as React from 'react';
import { Space, Blockquote, Title, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
    body: {
        padding: '.6%',
        lineHeight: 1.5,
    },
}));

const About = () => {

    const { classes } = useStyles();

    return (
        <>
            <motion.div
                transition={{
                    duration: .5,
                    delay: 0.3,
                    ease: [0.2, 0.2, 0.2, 0.2],
                }}
                initial={{ opacity: 0, y: 23 }}
                whileInView={{ opacity: 1, y: 5 }}
                viewport={{ once: true }}
            >
                <Title size={100} align='center' variant="gradient" gradient={{ from: '#ed6ea0', to: 'blue' }} inherit >Camilla Rees</Title>
            </motion.div>
            <Space h="xl" />
            <motion.div
                transition={{
                    duration: .5,
                    delay: 0.7,
                    ease: [0.2, 0.2, 0.2, 0.2],
                }}
                initial={{ opacity: 0, y: 23 }}
                whileInView={{ opacity: 1, y: 5 }}
                viewport={{ once: true }}

            >
                <Blockquote classNames={classes.body}>
                    Hi! I'm Camilla Rees, the new girl in tech. I'm a collaborative, people-centered front-end developer and career pivoter from the nonprofit, higher education, marketing, and content development fields.
                    <Space h="xl" />
                    My dynamic experience and skillset help me create aesthetic, usable full-stack applications that benefit others' lives and educate and engage communities.
                    <Space h="xl" />
                    Throughout my career, I've witnessed an immense positive impact on societal ecosystems when we improve the ways we connect good people with the right resources and opportunities. Making life better for others is one of my guiding principles and I'm always seeking opportunities to serve in the tech space!
                </Blockquote>
            </motion.div>
        </>
    );
}

export default About;