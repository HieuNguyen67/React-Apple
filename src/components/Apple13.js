import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import "./body.scss";
import mac from "../assets/image/mac__gjso4uqfnb2i_large.jpg";
import CountUp from "react-countup";
import Image from "react-bootstrap/Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { height } from "@mui/system";
import icontrade from "../assets/image/icon_trade_in__mqu4q4oi88i2_large.png";
import icon1 from "../assets/image/icon1.png";
import icon2 from "../assets/image/icon2.png";
import icon3 from "../assets/image/icon3.png";
import icon4 from "../assets/image/icon4.png";
import iphonepink from "../assets/image/iphone_15__dozjxuchowcy_large.jpg";
import iphonetitan from "../assets/image/iphone_15pro__ezc4eofw13yq_large.jpg";
import iphonepink1 from "../assets/image/iphone_15_swatch__dnsqb7k1le0y_large.jpg";
import Button from "react-bootstrap/Button";
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};


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
const Apple13=()=>{
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
          <div className="pt-md-5  ">
            <Col className="col-8 pt-md-5">
              <h1 className="text-start ">Significant others.</h1>
            </Col>
          </div>
          <div className="pt-md-3 pt-1 pb-1 pb-md-3 mt-5 inboxgrey1 container rounded-5  ">
            <Row className="my-5 d-flex flex-row">
              <Col className="col-12 col-md-5">
                <Accordion defaultActiveKey="0" flush className="backss">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="collapsed">
                      <h3>iPhone and Mac</h3>
                    </Accordion.Header>
                    <Accordion.Body className="backs">
                      You can answer calls or messages from your iPhone directly
                      on your Mac. Copy images, video, or text from your iPhone,
                      then paste into another app on your nearby Mac. And with
                      iCloud, you can access your favorite files from either
                      your iPhone or Mac.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h3>iPhone and Apple Watch</h3>
                    </Accordion.Header>
                    <Accordion.Body className="backs">
                      Misplaced your iPhone? The latest Apple Watch models can
                      show you its approximate distance and direction.17 To set
                      up a group photo on your iPhone, join the group and use
                      Apple Watch as a viewfinder to snap the shot. And, when
                      you take a call on your Apple Watch, just tap your iPhone
                      to continue the conversation there.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h3>iPhone and AirPods</h3>
                    </Accordion.Header>
                    <Accordion.Body className="backs">
                      Set up AirPods on iPhone with just a tap. You’ll love
                      Adaptive Audio, which automatically tailors the noise
                      control to provide the best listening experience across
                      different environments and interactions throughout the
                      day.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col className="col-md-1" />
              <Col className="col-md-6 mt-md-0 mt-3">
                <img className="d-block w-100 " src={mac} />
              </Col>
            </Row>
          </div>
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
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3"
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
              </div>
              <div>
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3"
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
              </div>
              <div>
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3"
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
              </div>
              <div>
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3"
                >
                  <Card.Body>
                    <Row className="d-flex flex-column">
                      <Col>
                        <img src={icon3} />
                      </Col>
                      <br />
                      <Col>
                        <h3 className="col-10">
                          Get flexible delivery and easy pickup.
                        </h3>
                      </Col>

                      <Col>
                        <p style={{ fontSize: "18px" }}>
                          Choose two‑hour delivery from an Apple Store, free
                          delivery, or easy pickup options.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card
                  style={{
                    width: "24rem",
                    height: "20rem",
                    border: "0px solid white",
                  }}
                  className="rounded-5 mx-auto p-3"
                >
                  <Card.Body>
                    <Row className="d-flex flex-column">
                      <Col>
                        <img src={icon4} />
                      </Col>
                      <br />
                      <Col>
                        <h3 className="col-10">Get to know your new iPhone.</h3>
                      </Col>

                      <Col>
                        <p style={{ fontSize: "18px" }}>
                          Learn how to get the most out of your new iPhone with
                          a free one‑on‑one Personal Session.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Carousel>
          </div>
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


}
export default Apple13;
