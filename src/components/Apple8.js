import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import "./body.scss";
import battery from "../assets/image/battery__cqocvkpqjn2a_large.jpg";
import CountUp from "react-countup";
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple8 = () => {
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
        className=" col-12 mt-5 pt-md-5"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="mt-md-5 pt-md-5">
          <Row className="d-flex">
            <Col />
            <Col className="col-10 col-md-8">
              <h1 className="text-center fonttt">
                All-day battery life. For all the things you want to keep doing.
              </h1>
            </Col>
            <Col />
          </Row>
        </div>
        <img className="d-block w-100 mt-md-5 mt-3" src={battery} />
        <div className="hours ms-4">
          <Row className="d-flex flex-row">
            <Col />
            <Col className="col-md-4 col-4">
              <Row className="d-flex flex-column">
                <Col>
                  <h4 className="text-start text-secondary fontttt">
                    Up to
                    <br />
                    <CountUp
                      className="account-balance count black"
                      start={0}
                      end={26}
                      duration={8}
                      useEasing={true}
                      separator=","
                      enableScrollSpy={true}
                      scrollSpyDelay={2}
                    />
                    hrs
                    <br />
                    video playback on iPhone 15 Plus
                  </h4>
                </Col>
              </Row>
            </Col>
            <Col className="col-md-4 ms-5 ps-md-5 col-4 ">
              {" "}
              <Row className="d-flex flex-column">
                <Col>
                  <h4 className="text-start text-secondary fontttt">
                    Up to
                    <br />
                    <CountUp
                      className="account-balance count black fontttt"
                      start={0}
                      end={20}
                      duration={8}
                      useEasing={true}
                      separator=","
                      enableScrollSpy={true}
                      scrollSpyDelay={2}
                    />
                    hrs
                    <br />
                    video playback on iPhone 15
                  </h4>
                </Col>
              </Row>
            </Col>
            <Col />
          </Row>
        </div>
      </motion.div>
    </>
  );
};
export default Apple8;
