import * as React from 'react';
import { BackgroundImage, Center, Space, Stack, Title, Text, List, ThemeIcon } from '@mantine/core';
import { Plant, HeartHandshake, UserCheck } from 'tabler-icons-react';
import { motion } from 'framer-motion';

const CoreValues = () => {

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
                <BackgroundImage
                    src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    radius="sm"
                    width="100%"
                    height="100%"
                    padding={10}
                >
                    <Center p="xl">
                        <Stack align="center">
                            <Title size={45} color='#fff' align='center'>Core Values</Title>
                            <Space h="xl" />
                            <List
                                spacing="xl"
                                size="xl"
                                center
                                withPadding
                            >
                                <List.Item

                                    icon={
                                        <ThemeIcon color="teal" size={45} radius="xl">
                                            <Plant
                                                size={55}
                                                strokeWidth={2}
                                                color={'black'}
                                            />
                                        </ThemeIcon>
                                    }>  <Text size={40} color="#fff" fw={700}>Growth Mindset</Text></List.Item>
                                <List.Item
                                    icon={
                                        <ThemeIcon color="blue" size={45} radius="xl">
                                            <UserCheck
                                                size={55}
                                                strokeWidth={2}
                                                color={'black'}
                                            />
                                        </ThemeIcon>
                                    }>  <Text size={40} color="#fff" fw={700}>Integrity</Text></List.Item>
                                <List.Item
                                    icon={
                                        <ThemeIcon color="#ed6ea0" size={45} radius="xl">
                                            <HeartHandshake
                                                size={55}
                                                strokeWidth={2}
                                                color={'black'}
                                            />
                                        </ThemeIcon>
                                    }>  <Text size={40} color="#fff" fw={700}>Inclusion</Text></List.Item>
                            </List>
                        </Stack>
                    </Center>
                </BackgroundImage>
            </motion.div>
        </>
    )
}

export default CoreValues;