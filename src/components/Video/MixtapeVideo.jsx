import { AspectRatio } from '@mantine/core';

const MixtapeVideo = () => {

  return (
    <>

    <AspectRatio ratio={16 / 9}>
     <iframe 
     width="560" 
     height="315" 
     src='https://www.youtube.com/embed/0jg4kzETsE4'
     title='my mixtape' 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowFullScreen>
     </iframe>
    </AspectRatio>
     </>
  );
}


export default MixtapeVideo;