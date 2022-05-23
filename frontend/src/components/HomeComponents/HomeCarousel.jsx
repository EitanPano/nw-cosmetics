import { Carousel } from 'react-bootstrap';

export const HomeCarousel = () => {
    return (
        <Carousel variant="light" className='carousel'>
            <Carousel.Item>
                <img className="d-block w-100" src="../assets/imgs/carousel/cosmetic-products.jpg" alt="First slide" />
                <Carousel.Caption>
                    <h2 className='text-light'>Handmade high quality Creams & Preperators.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="../assets/imgs/carousel/face-treatment.jpg" alt="Second slide" />
                <Carousel.Caption>
                    <h2 className='text-light'>Healthy skin is a reflection of overall wellness.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="../assets/imgs/carousel/letter-news.jpg" alt="Third slide" />
                <Carousel.Caption>
                    <h2 className='text-light'>Subscribe to our Newsletter!</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
