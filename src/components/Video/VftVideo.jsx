import { AspectRatio } from '@mantine/core';

const VftVideo = () => {

  return (
    <>
    <AspectRatio ratio={16 / 9}>
     <iframe 
     width="560" 
     height="315" 
     src='https://www.youtube.com/embed/OV23NNmTaMM'
     title='vft'
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowFullScreen>
     </iframe>
    </AspectRatio>
     </>
  );
}


export default VftVideo;