import { AspectRatio } from '@mantine/core';

const CityVideo = () => {

    return (
        <>

            <AspectRatio ratio={16 / 9}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Ja6cdZBoynE"
                    title="city explorer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;   picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </AspectRatio>
        </>
    );
}


export default CityVideo;