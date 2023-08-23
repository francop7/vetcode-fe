import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/Images/GatitoBañado.jpg';
import image2 from '../../assets/Images/Rubio.jpg';
import image3 from '../../assets/Images/PerrosYGatos.jpg'


const CarouselIndex = () => {
  return (
    <Carousel fade className='d-none d-sm-block'>
      <Carousel.Item >
        <a href="https://www.google.com" target='blank'>
          <img  className='img-fluid' src={image1}/>  
        </a>
        
        
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://www.google.com" target='blank'>
          <img  className='img-fluid' src={image2}/>
        </a>
        
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://www.google.com" target='blank'>
          <img  className='img-fluid' src={image3}/>
        </a>
        
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselIndex
