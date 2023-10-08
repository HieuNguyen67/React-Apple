
import './body.scss';
import Container from 'react-bootstrap/Container';
import video from "../assets/video/iphone.mp4"

import Apple1 from "./Apple1";
import Apple2 from "./Apple2";
import Apple3 from "./Apple3";
import Apple9 from "./Apple9";
import SlideCroll from "./SlideshowIndicators";
import Explore from "./Explore";
import Apple11 from './Apple11';
import ColorInversionFooter from './footer';
const HomeApple = () => {



  return (
    <>
      
      <div className="">
        <video className="col-12 " autoplay="autoplay" muted="muted">
          <source src={video} type="video/mp4" />
        </video>

        <Container className="">
          <Apple1 />

          <Apple2 />

          <SlideCroll />

          <Explore />
        </Container>
      </div>
      <Apple3 />

      <Apple9 />

      <Apple11 />

      <ColorInversionFooter/>


    </>
  );
};
export default HomeApple;
