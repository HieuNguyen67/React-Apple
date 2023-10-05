import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ReactTyped from "react-typed";
import * as React from "react";
import video from "../assets/video/large_2x.mp4";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import Modal from "react-bootstrap/Modal";
import "./body.scss";
import color from "../assets/image/dd_colors__ee640q5kx2uu_large.jpg";
import creatingcolor from "../assets/image/creatingcolor.png";
import adesign from "../assets/image/Adesign.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import woman from "../assets/image/dd_chemistry__bjfbpo191wpe_large.jpg";
import icon from "../assets/image/dd_icon_telephoto__bklfurjy2w2q_large.png";
import man from "../assets/image/dd_main__e3h2l832qdg2_large.jpg";
import onex from "../assets/image/1x.png";
import dance from "../assets/image/dd_beautiful__dyi0uwc0bsq6_large.jpg";
import halfx from "../assets/image/0.5x.png";
import manpink from "../assets/image/manpink.jpg";
import womanred from "../assets/image/womanred.jpg";
import womancamera from "../assets/image/womancamera.jpg";
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
  const [show, setshow] = React.useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <>
      <motion.div
        className=" col-12 mb-5 pb-md-5"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="pt-md-5 pt-4 ">
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
                loop
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
            <Col className="mt-md-5 col-md-4 col-6 mt-5">
              <Button
                onClick={handleShow}
                variant="outline-dark"
                className="shadow col-md-12 col-12 mt-md-5 py-md-3   pt-3 rounded-5"
              >
                <h3 className="fontttt ">
                  Go deeper on design <AddCircleIcon color="primary" />
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
                        Color through and through. Tough all around.
                      </h1>
                    </Col>
                    <Col></Col>
                  </Row>
                </div>

                <div>
                  <Row>
                    <Col></Col>
                    <Col className="col-md-8 col-12">
                      <img className="d-block w-100 rounded-3" src={color} />
                    </Col>
                    <Col></Col>
                  </Row>
                </div>
                <div className="mt-5 mb-5 pt-md-5 ">
                  <Row>
                    <Col></Col>
                    <Col className="col-md-8 col-12">
                      <h1 className="text-start ">
                        Creating color through chemistry.
                      </h1>
                      <br />
                      <h5 className="text-secondary fontttt">
                        <b className="black">
                          Superfine metallic ions embed color into the glass{" "}
                        </b>
                        — with a unique formulation for each color. Then the
                        glass is polished with nanocrystalline particles and
                        etched to create a textured matte finish.
                      </h5>
                    </Col>
                    <Col></Col>
                  </Row>
                </div>
                <div className="">
                  <img className="d-block w-100 rounded-3" src={woman} />
                </div>
                <div className="mt-5">
                  <Row>
                    <Col className="mt-md-5 pt-md-5 ">
                      <div className=" ms-md-5  mt-md-5 pt-md-5 ">
                        <h1 className="col-8">
                          A design that feels just right.
                        </h1>
                        <h5 className="text-start col-9 text-secondary fontttt mt-3">
                          The aerospace‑grade aluminum frame is highly durable,
                          and{" "}
                          <b className="black">
                            the new contoured edges feel even better in your
                            hand.
                          </b>
                        </h5>
                      </div>
                    </Col>
                    <Col className="col-12 col-md-6 mt-3" md={{ order: "first" }}>
                      <img
                        className="d-block w-100  mt-md-5  mt-4"
                        src={dance}
                      />
                    </Col>
                  </Row>
                </div>
              </Container>
            </Modal.Body>
          </Modal>
        </div>
      </motion.div>
    </>
  );
};
export default Apple4;
