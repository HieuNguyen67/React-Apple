import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import "./body.scss";
import mac from "../assets/image/mac__gjso4uqfnb2i_large.jpg";

import "react-multi-carousel/lib/styles.css";
import Accordion from "react-bootstrap/Accordion";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
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
          transition={{ duration: 4, type: "tween" }}
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
        </motion.div>
      </>
    );


}
export default Apple13;
