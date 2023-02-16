import * as React from 'react';
import { Title, Badge } from '@mantine/core';

const SkillBadges = () => {

    return (
        <>

            <Title>Skills</Title>
            <Badge
                variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                UX/UI
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Documentation
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Marketing
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Organization
            </Badge>
            <Badge
                variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                Full-stack
            </Badge>
        </>
    );
}

export default SkillBadges;