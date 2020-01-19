import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel'
import logo from './logo.jpg'


const Slider=()=>{
    return(
<Carousel indicators={false}>
  <Carousel.Item>
     
    <img
      className="d-block w-100"
      src="https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/banner2.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
 
    <img
      className="d-block w-100"
      src="https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/banner1.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
 
    <img
      className="d-block w-100"
      src="https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/banner3.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
 
    <img
      className="d-block w-100 h-50"
      src={logo}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    )
}
export default Slider