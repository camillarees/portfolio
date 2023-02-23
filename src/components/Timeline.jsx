import * as React from 'react';
import { Timeline, Text } from '@mantine/core';

const MyStory = () => {

    return (
        <>

<Timeline color="indigo" active={4} bulletSize={24} lineWidth={2}>
<Timeline.Item title="Full-stack JavaScript Development Certification">
    <Text color="dimmed" size="sm">Code Fellows</Text>
    <Text size="xs" mt={4}>February 3rd, 2023</Text>
</Timeline.Item>
<Timeline.Item title="Enrolled in Code Fellows bootcamp">
    <Text color="dimmed" size="sm">Code Fellows</Text>
    <Text size="xs" mt={4}>June 1, 2022</Text>
</Timeline.Item>

<Timeline.Item title="Nonprofit Program Manager">
    <Text color="dimmed" size="sm">Utah State University </Text>
    <Text size="xs" mt={4}>October 2019 - November 2022</Text>
</Timeline.Item>

<Timeline.Item title="BS in Family Studies from Brigham Young University">
    <Text color="dimmed" size="sm">Brigham Young University</Text>
    <Text size="xs" mt={4}>December 2019</Text>
</Timeline.Item>

<Timeline.Item title="Photographer and Relationship Blogger">
    <Text color="dimmed" size="sm">Founder</Text>
    <Text size="xs" mt={4}>2015-2021</Text>
</Timeline.Item>
</Timeline>
</>
    );
}

export default MyStory;