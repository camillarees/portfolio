import * as React from 'react';
import { BackgroundImage, Center, Box, Stack, Title, Text, List, ThemeIcon } from '@mantine/core';
import { Plant, HeartHandshake, UserCheck } from 'tabler-icons-react';

const CoreValues = () => {

    return (
        <>
            <Box align='flex-end' sx={{ width: 375 }} mx="auto">
                <BackgroundImage
                    src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    radius="sm"
                >
                    <Center p="md">
                        <Stack align="center">
                            <Title color='#fff'>Core Values</Title>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                            >
                                <List.Item
                                    icon={
                                        <ThemeIcon color="teal" size={35} radius="xl">
                                            <Plant
                                                size={48}
                                                strokeWidth={2}
                                                color={'black'}
                                            />
                                        </ThemeIcon>
                                    }>  <Text fz="xl" color="#fff" fw={700}>Growth Mindset</Text></List.Item>
                                <List.Item
                                    icon={
                                        <ThemeIcon color="blue" size={35} radius="xl">
                                            <UserCheck
                                                size={48}
                                                strokeWidth={2}
                                                color={'black'}
                                            />
                                        </ThemeIcon>
                                    }>  <Text fz="xl" color="#fff" fw={700}>Integrity</Text></List.Item>
                                <List.Item
                                    icon={
                                        <ThemeIcon color="#ed6ea0" size={35} radius="xl">
                                            <HeartHandshake
                                                size={48}
                                                strokeWidth={2}
                                                color={'black'}
                                            />
                                        </ThemeIcon>
                                    }>  <Text fz="xl" color="#fff" fw={700}>Inclusion</Text></List.Item>
                            </List>
                        </Stack>
                    </Center>
                </BackgroundImage>
            </Box>
        </>
    )
}

export default CoreValues;