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
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowfullscreen>
     </iframe>
    </AspectRatio>
     </>
  );
}


export default MixtapeVideo;