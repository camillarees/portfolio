import * as React from 'react';
import { Title, Badge, Group, Stack } from '@mantine/core';

const SkillBadges = () => {

    return (
        <>
            <Group>
            <Badge
                variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                Front-end Development
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: 'blue', deg: 35 }}>
                UX/UI
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Project Management
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Documentation
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Planning
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                Back-end Development
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: 'blue', deg: 60 }}>
                Problem-solving
            </Badge>
            </Group>
        </>
    );
}

export default SkillBadges;