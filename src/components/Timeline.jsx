import * as React from 'react';
import { Timeline, Text } from '@mantine/core';
import { motion } from 'framer-motion';

const MyStory = () => {

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
<Timeline color="indigo" active={6} bulletSize={24} lineWidth={2}>
<Timeline.Item title="Code Instructor">
    <Text color="dimmed" size="sm">CodeFu | CodeX Academy</Text>
    <Text size="xs" mt={4}>March 2023</Text>
</Timeline.Item>
<Timeline.Item title="Full-stack JavaScript Development Certification">
    <Text color="dimmed" size="sm">Code Fellows</Text>
    <Text size="xs" mt={4}>February 2023</Text>
</Timeline.Item>
<Timeline.Item title="Enrolled at Code Fellows">
    <Text color="dimmed" size="sm">Code Fellows</Text>
    <Text size="xs" mt={4}>May 2022</Text>
</Timeline.Item>

<Timeline.Item title="Program and Marketing Manager">
    <Text color="dimmed" size="sm">Utah State University </Text>
    <Text size="xs" mt={4}>October 2019</Text>
</Timeline.Item>

<Timeline.Item title="B.S in Family Studies and Human Development, Dean's List">
    <Text color="dimmed" size="sm">Brigham Young University</Text>
    <Text size="xs" mt={4}>December 2019</Text>
</Timeline.Item>

<Timeline.Item title="Photographer, Copywriter, and Content Creator">
    <Text color="dimmed" size="sm">Self-Employed</Text>
    <Text size="xs" mt={4}>2015-2021</Text>
</Timeline.Item>
</Timeline>
</motion.div>
</>
    );
}

export default MyStory;