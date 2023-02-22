import { Carousel } from '@mantine/carousel';
import { createStyles, Image } from '@mantine/core';

const useStyles = createStyles((_theme, _params, getRef) => ({
    controls: {
      ref: getRef('controls'),
      transition: 'opacity 150ms ease',
      opacity: 0,
    },
  
    root: {
      '&:hover': {
        [`& .${getRef('controls')}`]: {
          opacity: 1,
        },
      },
    },
  }));

function ProjectCarousel() {

    const projectsData =
    [
        {
                img: [
                    'https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/login_screen.png',
                    'https://github.com/chjkt-bug-tracker/bug-tracker-frontend/blob/dev/assets/hero_page.png?raw=true',
                    'https://github.com/chjkt-bug-tracker/bug-tracker-frontend/blob/dev/assets/Ticket_UserGuide.jpg?raw=true',
                    'https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/dashboard_page.png',
                    'https://github.com/chjkt-bug-tracker/bug-tracker-frontend/raw/dev/assets/teammembers_page.png',

            ],
        },
        {
                img: [
                    'https://github.com/CHSMD/plant.space/blob/main/assets/img/plantSpace-UML.png?raw=true',
                    'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            ],
        },
        {
                img: [
                    'https://github.com/ACES-301/Documentation/blob/main/assets/demo1.png?raw=true',
                    'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            ],
        },
    ];


    const { classes } = useStyles();
    const slides = projectsData.map((project) => (
        <Carousel.Slide key={project.img[0]}>
            <Image src={project.img[0]} />
        </Carousel.Slide>
    ))

  return (
    <Carousel
        classNames={classes}
      sx={{ maxWidth: 1000 }}
      mx="auto"
      withIndicators
      height="100%"
      styles={{
        indicator: {
          width: 12,
          height: 4,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
            control: {
                '&[data-inactive]': {
                  opacity: 0,
                  cursor: 'default',
                },
            },
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
}

export default ProjectCarousel;