
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
import { motion } from "framer-motion";
const HomeApple = () => {



  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
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

      </motion.div>
    </>
  );
};
export default HomeApple;
