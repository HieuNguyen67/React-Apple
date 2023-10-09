import React, { useState } from 'react';
import pink from '../assets/image/pink.png'
import yellow from '../assets/image/yellow.png'
import green from '../assets/image/green.png'
import titan from '../assets/image/titan.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
   
    <Container  className='d-flex flex-row my-md-5 py-md-5 my-4'>
    
    <Row  className='d-flex flex-row  col-12 '>
    <Col></Col>
    <Col className=" col-md-2 col-12">
    
      <div className=" ">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="anh " />
      </div>
      
   
    </Col>
    <Col></Col>
    </Row>
    <Row className='me-5'>
    <Col></Col>
      <Col className="indicators "> <br></br>
        {slides.map((slide, index) => (
          <button 
            key={index} 
            className={index === currentSlide ? 'active' : ''}
            onClick={() => goToSlide(index)}
          >
           
          </button>
        ))}
      </Col>
      <Col></Col>
      </Row>
      
    </Container>
    
  );
};

const SlideCroll = () => {
  const slides = [
    pink,
    yellow,
    green,
    titan
    // Add more image URLs as needed
  ];
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
      className=" col-12 mt-3 mt-md-5 pt-md-5"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transition={{ duration: 4, type: "tween" }}
    >
      <Col>
        <h1 className="fontt">Take a closer look.</h1>

        <Slideshow slides={slides} />
      </Col>
    </motion.div>
  );
};
export default SlideCroll;
