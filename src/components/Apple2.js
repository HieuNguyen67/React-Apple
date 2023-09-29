import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './body.scss';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import iphone1 from '../assets/image/iphone1.png'
import iphone2 from '../assets/image/iphone2.png'
import iphone3 from '../assets/image/iphone3.png'
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Apple1 = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    
    <motion.div
      className=" col-12 mt-5 pt-md-5"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
    <Container >
    <div className="mb-md-5 pb-md-5">
            <Row >
              <Col ><h1 className=" text-start text-break col-12 fontt"  >Get the highlights.</h1></Col>
            </Row>
          </div>
          
          <div >
          <Carousel data-bs-theme="dark" slide={false} className="shadow rounded-4 my-4"> 
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-4"
          src={iphone1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-4"
          src={iphone2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-4"
          src={iphone3}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
          </div>
    </Container>
    
    
    </motion.div>
    
  );
};
export default Apple1;
