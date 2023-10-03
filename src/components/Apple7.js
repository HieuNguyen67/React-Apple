import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardSlider.scss";
import "./body.scss";
import one from "../assets/image/dd_main__e3h2l832qdg2_large.jpg";
import two from "../assets/image/2.jpg";
import three from "../assets/image/dance.jpg";
import four from "../assets/image/4.jpg";
import five from "../assets/image/womanred.jpg";
import six from "../assets/image/6.jpg";
import seven from "../assets/image/manpink.jpg";


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
    // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: one,
  },
  {
    url: two,
  },
  //Second image url
  {
    url: three,
  },
  //Third image url
  {
    url: four,
  },

  //Fourth image url

  {
    url: five,
  },
  {
    url: six,
  },
  {
    url: seven,
  },
  
];
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Slider = () => {
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
      className=" col-12 mb-5 pb-5 "
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="parent">
        <div>
          <div className="pt-md-5  ">
            <Col className="col-8 pt-md-5">
              <h1 className="text-start fonttt">2x Telephoto</h1>
            </Col>
          </div>
          <h4 className="text-secondary fontttt">to frame the perfect portrait</h4>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img
                  src={imageUrl.url}
                  alt="movie"
                  className="d-block w-100 "
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </motion.div>
  );
};
export default Slider;
