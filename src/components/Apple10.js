import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import "./body.scss";
import video from "../assets/video/chip.mp4"
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Apple10 = () => {
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
    <>
      <motion.div
        className=" col-12 mt-5 pt-md-5 white"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transition={{ duration: 4, type: "tween" }}
      >
        <div className="mt-md-5 pt-md-5 pt-5">
          <Row className="d-flex">
            <Col />
            <Col className="col-10 col-md-6">
              <h1 className="text-center fonttt">
                A16 Bionic chip. A Pro-proven powerhouse.
              </h1>
            </Col>
            <Col />
          </Row>
        </div>
        <div className="mt-5">
          <video
            className="col-12 "
            autoplay="autoplay"
            muted="muted"
            enableScrollSpy={true}
            loop="loop"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="mt-md-5 pt-md-5 pt-5">
          <Row className="d-flex">
            <Col />
            <Col className="col-10 col-md-6">
              <h4 className="text-center fontttt grey">
                <b className="white">
                  A16 Bionic powers all kinds of advanced features.
                </b>{" "}
                Like computational photography used for 24MP photos and next-gen
                portraits. Voice Isolation for phone calls. And smooth
                performance for graphics-intensive games. All with incredible
                efficiency for great battery life. No wonder it started as a Pro
                chip.
                <hr />
                The A16 Bionic GPU is up to 40% faster than the GPU in iPhone 12
              </h4>
            </Col>
            <Col />
          </Row>
        </div>
        <br />
        <br />
      </motion.div>
    </>
  );
};
export default Apple10;
