import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import icontrade from "../assets/image/icon_trade_in__mqu4q4oi88i2_large.png";
import icon1 from "../assets/image/icon1.png";
import icon2 from "../assets/image/icon2.png";
import icon3 from "../assets/image/icon3.png";
import icon4 from "../assets/image/icon4.png";


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
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple14 = () => {
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
        className=" col-12 mt-5 pt-md-5 "
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="pt-md-5  mt-5">
          <Col className="col-12 pt-md-5">
            <h1 className="text-start ">Ways to shop and save at Apple.</h1>
          </Col>
        </div>
        <div className="mt-5 pt-md-3">
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            <div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3 shadow-sm"
                >
                  <Card.Body>
                    <Row className="d-flex flex-column">
                      <Col>
                        <img src={icontrade} />
                      </Col>
                      <br />
                      <Col>
                        <h3 className="col-8">Save with Apple Trade In.</h3>
                      </Col>

                      <Col>
                        <p style={{ fontSize: "18px" }}>
                          Get $200–$650 in credit toward iPhone 15 or iPhone 15
                          Pro when you trade in iPhone 11 or higher.*
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>{" "}
            </div>
            <div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3 shadow-sm"
                >
                  <Card.Body>
                    <Row className="d-flex flex-column">
                      <Col>
                        <img src={icon1} />
                      </Col>
                      <br />
                      <Col>
                        <h3 className="col-8">Pay over time, interest‑free.</h3>
                      </Col>

                      <Col>
                        <p style={{ fontSize: "18px" }}>
                          When you choose to check out with Apple Card Monthly
                          Installments.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
            <div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3 shadow-sm"
                >
                  <Card.Body>
                    <Row className="d-flex flex-column">
                      <Col>
                        <img src={icon2} />
                      </Col>
                      <br />
                      <Col>
                        <h3 className="col-12">
                          iPhone carrier deals. Right here at Apple. For as low
                          as $0.
                        </h3>
                      </Col>

                      <Col>
                        <p style={{ fontSize: "18px" }}>
                          Includes trade‑in and carrier credits. AT&T: up to
                          $1000. T‑Mobile: up to $800. Verizon: up to $830.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
           
          </Carousel>
        </div>
      </motion.div>
    </>
  );
};
export default Apple14;
