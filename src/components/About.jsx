import * as React from 'react';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, Image } from '@mantine/core';

const PRIMARY_COL_HEIGHT = 300;

const FullWidthGrid = () => {

    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

    return (
        <Container my="md">
            <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
                <Grid gutter="md">
                    <Grid.Col>
                        <Image
                            radius="md"
                            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            alt="Random unsplash image"
                        />
                        {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                    </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>
    );
}

export default FullWidthGrid;