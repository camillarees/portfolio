import * as React from 'react';
import { Image, Space } from '@mantine/core';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <>
            <Space h="xl" />
            <motion.div
                align='center'
                transition={{
                    duration: .5,
                    delay: 1,
                    ease: [0.2, 0.2, 0.2, 0.2],
                }}
                initial={{ opacity: 0, y: 23 }}
                whileInView={{ opacity: 1, y: 5 }}
                viewport={{ once: true }}
            >
                <Image
                    radius="md"
                    width='80%'
                    src='https://media.licdn.com/dms/image/D5603AQHNTq2UEOLZ5A/profile-displayphoto-shrink_800_800/0/1671139885545?e=1687392000&v=beta&t=tsbYpidp7OzcnwlBN8-9PUF66ozLO-KoKGcQADLcrLA'
                    alt="profile"
                    fit='contain'
                    align='center'
                />
            </motion.div>
        </>

    )
}

export default Profile;