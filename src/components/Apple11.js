import "./body.scss";
import Apple12 from "./Apple12";
import usb from "../assets/image/usbc__bvuxditgibci_large.png";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Modal from "react-bootstrap/Modal";
import "./body.scss";
import color from "../assets/image/dd_findmy__f7z04hcqyc2u_large.jpg";

import CancelIcon from "@mui/icons-material/Cancel";

import dance from "../assets/image/dd_charger__cp1yvs3potea_large-removebg-preview.png";
import apple from "../assets/image/2023-10-06_003512.png";
import values from "../assets/image/values__bhdzybdgpkxe_large.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


import "./body.scss";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple11 = () => {
     const [show, setshow] = useState(false);
     const handleClose = () => setshow(false);
     const handleShow = () => setshow(true);

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
      <div className="boxApple11">
        <div className="container">
          <Apple12 />
        </div>
        <div className="mt-5 poss">
          <img className="d-block w-100 rounded-3 mt-5" src={usb} />
        </div>
        <div className="container">
          <div className="mb-5 pb-md-5">
            <Row>
              <Col></Col>
              <Col className=" col-md-4 col-7">
                <Button
                  onClick={handleShow}
                  variant="outline-dark"
                  className="shadow col-md-12 col-12 mt-md-5 py-md-3   pt-3 rounded-5 "
                >
                  <h3 className="fontttt ">
                    Explore connectivity <AddCircleIcon color="primary" />
                  </h3>
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </div>
          <div>
            <Modal
              show={show}
              onHide={handleClose}
              className="rounded-5 "
              size="xl"
            >
              <Modal.Body>
                <Container>
                  <Row>
                    <Col></Col>
                    <Col className="col-md-11 col-9"></Col>
                    <Col className="ms-md-4">
                      <button onClick={handleClose} className="fix ">
                        <CancelIcon fontSize="large" />
                      </button>
                    </Col>
                  </Row>
                  <div className="mt-4 mb-5">
                    <Row>
                      <Col></Col>
                      <Col className="col-md-8 col-12">
                        <h1 className="text-start fonttz">
                          USB-C
                          <span className="text-secondary">ompatible.</span>
                        </h1>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>

                  <div>
                    <img className="d-block w-100 rounded-3" src={usb} />
                  </div>
                </Container>
                <div className="boxGrey">
                  <Container>
                    <div className="mt-5">
                      <Row>
                        <Col className=" ">
                          <div className=" ms-md-5  mt-3 pt-md-5 ">
                            <h1 className="col-8">Turbocharge.</h1>
                            <h5 className="text-start col-9 text-secondary fontttt mt-3">
                              <span className="black">
                                Charge up to 50% in around 30 minutes
                              </span>{" "}
                              with the 20W USB-C Power Adapter. Or add a MagSafe
                              Charger for fast, efficient wireless charging.
                              (Both sold separately.)
                            </h5>
                          </div>
                        </Col>
                        <Col className="col-12 col-md-6 mt-3">
                          <img
                            className="d-block w-100  mt-md-5  mt-4"
                            src={dance}
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className=" ms-md-5  mt-5 pt-md-5 ">
                      <h1 className="col-12">Ah, there you are.</h1>
                      <h5 className="text-start col-md-9 col-12 text-secondary fontttt mt-3">
                        Want to find a friend in a crowded train station or busy
                        park? Look no further than Precision Finding for Find My
                        friends. Powered by the new, second-generation Ultra
                        Wideband chip, Precision Finding now has three times
                        greater range, so{" "}
                        <span className="black">
                          it can lead you right to them.
                        </span>
                      </h5>
                    </div>
                    <div className="mt-5 pt-md-5">
                      <img className="d-block w-100 rounded-3" src={color} />
                    </div>
                    <div className=" ms-md-5  mt-5 pt-md-5 mb-5 pb-md-5">
                      <h1 className="col-12 col-md-6">
                        Connect here, there, and everywhere.
                      </h1>
                      <Row className="text-secondary mt-md-5 mt-3">
                        <Col />
                        <Col className="col-md-3 col-12 ">
                          <h4 className="fontttt">
                            {" "}
                            <span className="black">eSIM</span> simplifies
                            traveling. Just activate an eSIM for the country
                            you’re visiting before you go. Or when you arrive.
                          </h4>
                        </Col>
                        <Col className="col-md-3 col-12">
                          <h4 className="fontttt">
                            <span className="black">5G</span> provides a
                            superfast experience so you can make high-quality
                            FaceTime calls, quickly download files, and play
                            real-time multiplayer games on the go.
                          </h4>
                        </Col>
                        <Col className="col-md-3 col-12">
                          <h4 className="fontttt">
                            {" "}
                            <span className="black">Wi-Fi</span> 6 is speedy. So
                            you can stream movies at the highest resolutions.
                            And make Wi-Fi calls without a hitch.
                          </h4>
                        </Col>
                        <Col />
                      </Row>
                    </div>
                  </Container>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <div className="boxGrey1">
        <div className="container">
          <motion.div
            className=" col-11 mx-auto mt-5 pt-md-5 my-3"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <div className="pt-5 pb-md-5">
              <img className="d-block w-100 rounded-5" src={apple} />
            </div>

            <div className="pt-5 mt-5 inboxgrey container rounded-5 pb-5 ">
              <Row className="d-flex flex-column ms-md-5 ps-md-5 mt-md-5 mt-2 pt-md-5">
                <Col>
                  <img className="d-block w-10 " src={values} />
                </Col>
                <Col>
                  <h1 className="text-start fonttz col-md-6 col-12 mt-3">
                    Designed to make a difference.
                  </h1>
                </Col>
              </Row>
              <br />
              <Row>
                <Col></Col>
                <Col className="col-10">
                  <hr />
                </Col>
                <Col></Col>
              </Row>
              <br />{" "}
              <Row className="d-flex flex-row ms-md-5 ps-md-5 mb-md-5">
                <Col className="col-12 col-md-6">
                  <h5 className="text-start text-secondary col-md-10 col-12 mt-3 fontttt">
                    <span className="black">
                      What matters to you matters to Apple, too.{" "}
                    </span>
                    From privacy protections that give you more control over
                    your data. To using more recycled materials that minimize
                    environmental impact. To creating built-in features that
                    make iPhone accessible to all.
                  </h5>
                </Col>
                <Col className="col-12 col-md-6">
                  <h5 className="text-start text-secondary fontttt col-md-7 col-12 mt-3">
                    The enclosure of iPhone 15 has
                  </h5>

                  <h1 className="col-md-6">75% recycled aluminum</h1>
                </Col>
              </Row>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Apple11;
