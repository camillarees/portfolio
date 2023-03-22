import { AspectRatio } from '@mantine/core';

const CityVideo = () => {

    return (
        <>

            <AspectRatio ratio={16 / 9}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/H8pqJxt56G4"
                    title="city explorer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;   picture-in-picture; web-share"
                    allowfullscreen>

                </iframe>
            </AspectRatio>
        </>
    );
}


export default CityVideo;