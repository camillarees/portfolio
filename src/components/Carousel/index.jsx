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

const PlantSpaceCarousel = () => {
    const plantSpaceImages = [
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/plantSpace-UML.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/signup.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/signin.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/createPlant.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/updatePlant.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/getAllOrders.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/getAllPlants.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/addToCart.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/placeAnOrder.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/readOneOrder.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/updateOrder.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/chatServer2.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/serverTests.png',
                'https://github.com/CHSMD/plant.space/raw/main/assets/img/authRouteTests.png',
      
    ];

    const { classes } = useStyles();
    const slides = plantSpaceImages.map((item) => (
        <Carousel.Slide key={item[0]}>
            <Image src={item[0]} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            classNames={classes}
            sx={{ maxWidth: 320 }}
            mx="auto"
            withIndicators
            height={200}
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

export default PlantSpaceCarousel;