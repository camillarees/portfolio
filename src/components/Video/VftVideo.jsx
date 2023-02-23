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
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowfullscreen>
     </iframe>
    </AspectRatio>
     </>
  );
}


export default VftVideo;