import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import video from "../assets/video/large.mp4"
import Row from "react-bootstrap/Row";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple5 = () => {
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
        className=" col-12 mb-5 pb-5 pt-md-5 "
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="mt-md-5 pt-md-5">
          <Col>
            <h1 className="text-center fonttt">
              All-new 48MP Main camera. For breathtaking, smile-making picture
              taking.
            </h1>
          </Col>
        </div>
        <div className="mt-5 pt-md-5 ms-5 ps-md-5">
          <video
            className="col-12 ms-md-5 hidden"
            autoplay="autoplay"
            muted="muted"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="container mx-md-5 posi ">
          <Row>
            <Col />
            <Col className="col-md-4  col-4">
              <h4 className="text-secondary text-start fontttt">
                Now the Main camera shoots in super-high resolution. So it’s
                easier than ever to{" "}
                <b>take standout photos with amazing detail</b> — from snapshots
                to stunning landscapes.
              </h4>
            </Col>
            <Col />
            <Col className="col-md-4 col-4">
              <h4 className="text-secondary text-start fontttt">
                Up to <br />
                <h1 className="black fonttttt">4x resolution</h1>
                to capture incredible detail <br />{" "}
                <h1 className="black fonttttt">2x Telephoto</h1>
                is like having a third camera
              </h4>
            </Col>
            <Col />
          </Row>
        </div>
      </motion.div>
    </>
  );
};
export default Apple5;
