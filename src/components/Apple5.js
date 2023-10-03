import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import video from "../assets/video/large.mp4";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "react-bootstrap/Button";
import color from "../assets/image/dd_camera__eqmu43g7h6mq_large.jpg";
import woman from "../assets/image/dd_telephoto__ezpmid85m9g2_large.jpg";
import icon from "../assets/image/dd_icon_telephoto__bklfurjy2w2q_large.png";
import man from "../assets/image/dd_main__e3h2l832qdg2_large.jpg";
import onex from "../assets/image/1x.png";
import dance from "../assets/image/dance.jpg";
import halfx from "../assets/image/0.5x.png";
import manpink from "../assets/image/manpink.jpg";
import womanred from "../assets/image/womanred.jpg";
import womancamera from "../assets/image/womancamera.jpg";
import { Container } from "@mui/system";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple5 = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
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
            loop="loop"
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
        <div className="position-relative poo">
          <Row>
            <Col></Col>
            <Col className=" col-md-4 col-6">
              <Button
                onClick={handleShow}
                variant="outline-dark"
                className="shadow col-md-12 col-12 mt-md-5 py-md-3   pt-3 rounded-5 "
              >
                <h3 className="fontttt ">
                  Zoom in on the cameras <AddCircleIcon color="primary" />
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
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Container>
                <div className="mt-md-5 pt-md-5">
                  <Col className="">
                    <h1 className="text-center fonttz">
                      All-new 48MP Main camera. For breathtaking, smile-making
                      picture taking.
                    </h1>
                  </Col>
                </div>
                <div>
                  <img
                    className="d-block w-100  mt-md-5 pt-md-5 mt-4"
                    src={color}
                  />
                </div>
                <div className="ms-md-5 ps-md-5">
                  <h1 className="sizemore">More room to zoom.</h1>
                  <h4 className="text start col-7 text-secondary fontttt">
                    Three optical-quality zoom levels let you{" "}
                    <b className="black">effortlessly frame the perfect shot</b>{" "}
                    from right where you are.
                  </h4>
                </div>
                <div className="container">
                  <img
                    className="d-block w-100  mt-md-5 pt-md-5 mt-4"
                    src={woman}
                  />
                </div>
                <div className=" ms-md-5">
                  <img
                    className="d-block w-10  mt-md-5  mt-4 sizex"
                    src={icon}
                  />
                  <h4 className="text start col-5 text-secondary fontttt mt-3">
                    Choose 2x Telephoto to zoom in for that perfect close‑up.
                  </h4>
                </div>
                <div>
                  <Row className="d-flex flex-row">
                    <Col className="col-12 col-md-6">
                      <img className="d-block w-100  mt-md-5  mt-4" src={man} />
                    </Col>
                    <Col className="mt-md-5 pt-md-5 ms-3 ">
                      <div className=" ms-md-5 mt-md-5 pt-md-5 ">
                        <img
                          className="d-block w-10  mt-md-5  mt-4 sizex"
                          src={onex}
                        />
                        <h4 className="text start col-9 text-secondary fontttt mt-3">
                          Choose 1x for detailed middle‑distance shots.
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col className="col-12 col-md-6" md={{ order: "last" }}>
                      <img
                        className="d-block w-100  mt-md-5  mt-4"
                        src={dance}
                      />
                    </Col>
                    <Col className="mt-md-5 pt-md-5 ">
                      <div className=" ms-md-5  mt-md-5 pt-md-5 ">
                        <img
                          className="d-block w-10  mt-md-5  mt-4 sizex"
                          src={halfx}
                        />
                        <h4 className="text-start col-9 text-secondary fontttt mt-3">
                          Choose 0.5x to capture way more of the scene with the
                          Ultra Wide camera.
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className="d-flex flex-row">
                    <Col className="col-12 col-md-6">
                      <img
                        className="d-block w-100  mt-md-5  mt-4"
                        src={manpink}
                      />
                    </Col>
                    <Col className="mt-md-5 pt-md-5 ms-3">
                      <div className="ms-md-5">
                        <h1 className="sizemore mt-3">Night mode</h1>
                        <h4 className="text-start col-md-8 col-12 text-secondary fontttt">
                          Night mode automatically activates in especially dark
                          scenes and now{" "}
                          <b className="black">
                            captures even richer color and sharper detail.
                          </b>
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className="d-flex flex-row">
                    <Col className="col-12 col-md-6" md={{ order: "last" }}>
                      <img
                        className="d-block w-100  mt-md-5  mt-4"
                        src={womanred}
                      />
                    </Col>
                    <Col className="mt-md-5 pt-md-5 ms-3">
                      <div className="ms-md-5">
                        <h1 className="sizemore mt-3">Smart HDR</h1>
                        <h4 className="text-start col-md-8 col-12 text-secondary fontttt">
                          When lighting is bright or uneven, the latest Smart
                          HDR intelligently optimizes for both your subject and
                          the background. So you get{" "}
                          <b className="black">
                            gorgeous color and even more true-to-life skin
                            tones.
                          </b>
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mt-md-5">
                  <Row className="d-flex flex-row">
                    <Col className="col-12 col-md-6" md={{ order: "last" }}>
                      <img
                        className="d-block w-100  mt-md-5  mt-4"
                        src={womancamera}
                      />
                    </Col>
                    <Col className="mt-md-5 pt-md-5 ">
                      <div className="ms-md-5">
                        <h1 className="sizemore1 ">
                          A front camera autofocused on you.
                        </h1>
                        <h4 className="text-start col-md-8 col-12 text-secondary fontttt">
                          The TrueDepth camera automatically focuses on you and
                          your friends, for{" "}
                          <b className="black">
                            spectacular selfies and supersharp FaceTime calls.
                          </b>
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className="d-flex flex-column">
                    <Col md={{ order: "last" }} className="mt-5">
                      <div>
                        <video
                          className="col-12 ms-md-3 hidden"
                          autoplay="autoplay"
                          muted="muted"
                          loop="loop"
                          
                        >
                          <source src={video} type="video/mp4" />
                        </video>
                      </div>
                    </Col>
                    <Col>
                      <div className="ms-md-5 ">
                        <h1 className="sizemore1 col-8">
                          Videos that deserve the most views.
                        </h1>
                        <h5 className="text-start col-md-6 col-12 text-secondary fontttt">
                          Take 4K HDR{" "}
                          <b className="black">
                            videos with amazing detail, color, and contrast.
                          </b>{" "}
                          Use Action mode to steady a really shaky handheld
                          shot. Or try 4K Cinematic mode to automatically shift
                          the focus to the most important subject in a scene.
                        </h5>
                      </div>
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
export default Apple5;
