import * as React from 'react';
import { Badge, Group } from '@mantine/core';
import { motion } from 'framer-motion';

const SkillBadges = () => {

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
            </motion.div>
        </>
    );
}

export default SkillBadges;