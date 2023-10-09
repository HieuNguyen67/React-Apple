import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import iphonepink from "../assets/image/iphone_15__dozjxuchowcy_large.jpg";
import iphonetitan from "../assets/image/iphone_15pro__ezc4eofw13yq_large.jpg";
import iphonepink1 from "../assets/image/iphone_15_swatch__dnsqb7k1le0y_large.jpg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple15 = () => {
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
        className=" col-12 mt-5 pt-md-5 pb-5"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        transition={{ duration: 4, type: "tween" }}
      >
        <div className="pt-md-5  mt-5">
          <Col className="col-12 pt-md-5">
            <h1 className="text-start ">Keep exploring iPhone.</h1>
          </Col>
        </div>
        <div className=" mt-5 inboxgrey container rounded-5  py-5">
          <Row className="d-flex flex-row  ">
            <Col />
            <Col className="mx-auto col-12 col-md-3 ">
              <img src={iphonepink} className="mx-4" />
              <br />
              <p className="text-center  mt-3" style={{ color: "brown" }}>
                <img src={iphonepink1} />
              </p>
              <br />
              <p className="text-center" style={{ color: "brown" }}>
                New
              </p>
              <h2 className="text-center">iPhone 15</h2>
              <br />
              <h5 className="text-center">
                From $799 or $33.29/mo. for 24 mo.
              </h5>{" "}
              <br />
              <h5 className="text-center text-secondary">
                Currently viewing&ensp;&ensp;
                <a href="#" class="text-decoration-none">
                  Buy {">"}
                </a>
              </h5>
            </Col>
            <Col className="mx-md-5  col-12 col-md-3 mt-5 mt-md-0 ">
              <p className="text-center" style={{ color: "brown" }}>
                <img src={iphonetitan} />
              </p>
              <p className="text-center mt-3" style={{ color: "brown" }}>
                <img src={iphonepink1} />
              </p>
              <br />
              <p className="text-center" style={{ color: "brown" }}>
                New
              </p>
              <h2 className="text-center">iPhone 15 Pro</h2>
              <br />
              <h5 className="text-center">
                From $999 or $41.62/mo. for 24 mo.
              </h5>{" "}
              <br />
              <h5 className="text-center text-secondary">
                <Button variant="primary" className="rounded-5">
                  Learn more
                </Button>
                &ensp;&ensp;
                <a href="#" class="text-decoration-none">
                  Buy {">"}
                </a>
              </h5>{" "}
            </Col>
            <Col />
          </Row>
          <br />
          <Col className="col-6 mx-auto">
            <hr />
          </Col>
        </div>
      </motion.div>
    </>
  );
};
export default Apple15;
