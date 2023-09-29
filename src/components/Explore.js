import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./body.scss";
import iphone1 from "../assets/image/dynamic_island_hw__bq0da9ahwxpy_large.png";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Explore = () => {
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
        className=" col-12 mt-5 "
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="mb-md-5 pb-md-5">
          <Row>
            <Col>
              <h1 className="fontt">Explore the full story.</h1>
            </Col>
          </Row>
        </div>
        <div className="mt-md-5 pt-md-5 mt-3">
          <Row>
            <Col></Col>
            <Col className="col-md-7 col-8">
              <h1 className="text-center fonttt">
                Dynamic Island.For when things just pop up.
              </h1>
            </Col>
            <Col></Col>
          </Row>
        </div>
        <div className="mt-md-5 pt-md-5 mt-3">
          <Row>
            <Col></Col>
            <Col className="col-md-7 col-10">
              <h5 className="text-center text-secondary fontttt">
                Dynamic Island bubbles up alerts and Live Activities — so you
                don’t miss them while you’re doing something else. You can track
                your next ride, see who’s calling, check your flight status, and
                so much more.
              </h5>
            </Col>
            <Col></Col>
          </Row>
        </div>
        <div className="mt-md-5 pt-md-5 mt-3">
          <Row>
            <Col></Col>
            <Col className="col-md-6 col-6">
              <img className="d-block w-100 " src={iphone1} alt="First slide" />
            </Col>
            <Col></Col>
          </Row>
        </div>
      </motion.div>
    </>
  );
};
export default Explore;
