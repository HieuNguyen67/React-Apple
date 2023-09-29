import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ReactTyped from "react-typed";

import video from "../assets/video/large_2x.mp4";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Apple4 = () => {
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
        className=" col-12"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="pt-md-5 pt-4">
          <Col className="col-8 pt-md-5">
            <h1 className="text-start fonttt">
              Color through and through. Tough all around.
            </h1>
          </Col>
        </div>
        <div>
          <Col className="col-md-5 mt-md-5 mt-3 col-7">
            <h4 className="text-start fontttt text-secondary">
              <ReactTyped
                strings={[
                  "The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.",
                ]}
                typeSpeed={20}
                loop={false}
              />
            </h4>
          </Col>
        </div>
        <div className="mt-md-5 mt-3">
          <video
            className="col-12 rounded-3 shadow"
            autoplay="autoplay"
            muted="muted"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div>
          <Row>
            <Col className="col-md-4 mt-md-5 ms-3 ms-md-5 col-5">
              <h3 className="text-start  ms-md-5 fontttt">
                <DiamondIcon sx={{ fontSize: 100 }} className="fontttt" />
                <br />
                Dependably durable.
                <br />
                The Ceramic Shield
                <br />
                Tfront is tougher than
                <br />
                Tany smartphone glass.
              </h3>
            </Col>
            <Col></Col>
            <Col className="col-md-4 mt-md-5 me-3 me-md-5 col-5">
              <h3 className="text-start me-md-5 fontttt">
                <InvertColorsIcon sx={{ fontSize: 100 }} />
                <br />
                Remarkably resistant.
                <br />
                iPhone is splash, water, and dust resistant.4 What a relief.
              </h3>
            </Col>
          </Row>
        </div>
        <div className="mt-md-5">
          <Row>
            <Col></Col>
            <Col className="mt-md-5 col-md-3 col-5 mt-5">
              <Button
                variant="dark"
                className="shadow col-md-12 col-12 mt-md-5 py-md-3 py-md-1 pt-3 rounded-5"
              >
                <h3 className="fontttt ">Go deeper on design</h3>
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </motion.div>
    </>
  );
};
export default Apple4;
