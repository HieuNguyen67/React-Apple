
import './body.scss';
import Container from 'react-bootstrap/Container';
import video from "../assets/video/iphone.mp4"

import Apple1 from "./Apple1";
import Apple2 from "./Apple2";
import Apple3 from "./Apple3";
import SlideCroll from "./SlideshowIndicators";
import Explore from "./Explore";
const HomeApple = () => {



  return (
   
    <div className="boxx ">
    <video className='col-12' autoplay="autoplay" muted="muted" >
    <source src={video} type="video/mp4" />
    </video>
    
    <Container>
        
          <Apple1/>
          
          <Apple2/>
          
          <SlideCroll/>
          
          <Explore/>

          

    </Container>
         
    <Apple3/>
    
      
    </div>
    
    
    
    
    
    
    
   
    
  );
};
export default HomeApple;
