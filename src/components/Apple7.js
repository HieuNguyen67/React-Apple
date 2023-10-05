import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardSlider.scss";
import "./body.scss";
import one from "../assets/image/dd_main__e3h2l832qdg2_large.jpg";
import two from "../assets/image/2.jpg";
import three from "../assets/image/dance.jpg";
import four from "../assets/image/4.jpg";
import five from "../assets/image/womanred.jpg";
import six from "../assets/image/6.jpg";
import seven from "../assets/image/manpink.jpg";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "react-bootstrap/Button";
import color from "../assets/image/dd_focus__ckerb2vuk8r6_large.jpg";
import woman from "../assets/image/dd_photonic__enur2ohg6emq_large.jpg";

import man from "../assets/image/dd_zoom__jxm6768epgii_large.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import dance from "../assets/image/dd_pinch__fft66fhthgi2_large.jpg";

import { Container } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
import video from "../assets/video/large.mp4";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";

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
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: one,
  },
  {
    url: two,
  },
  //Second image url
  {
    url: three,
  },
  //Third image url
  {
    url: four,
  },

  //Fourth image url

  {
    url: five,
  },
  {
    url: six,
  },
  {
    url: seven,
  },
];
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Slider = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const [show, setshow] = useState(false);
  const handleShow = () => setshow(true);
  const handleClose = () => setshow(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen=()=>setOpen(true);
  const handleCloseOpen=()=>setOpen(false)
  const slides = [
    { src: one },
    { src: two },
    { src: three },
    { src: four },
    { src: five },
    { src: six },
    { src: seven },
  ];
  return (
    <motion.div
      className=" col-12 mb-md-5 pb-5 "
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="parent">
        <div>
          <div className="pt-md-5  ">
            <Col className="col-8 pt-md-5">
              <h1 className="text-start fonttt">2x Telephoto</h1>
            </Col>
          </div>
          <h4 className="text-secondary fontttt">
            to frame the perfect portrait
          </h4>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          className="cursor"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img
                  src={imageUrl.url}
                  alt="movie"
                  className="d-block w-100 "
                  onClick={handleOpen}
                />
              </div>
            );
          })}
        </Carousel>
        <Lightbox
          open={open}
          close={handleCloseOpen}
          slides={slides}
          className="d-block w-100 "
        />
      </div>

      <div className="">
        <Row>
          <Col></Col>
          <Col className=" col-md-4 col-7">
            <Button
              onClick={handleShow}
              variant="outline-dark"
              className="shadow col-md-12 col-12 mt-md-5 py-md-3    rounded-5 "
            >
              <h3 className="fontttt mt-2">
                More on potraits <AddCircleIcon color="primary" />
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
          <Modal.Body className="">
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
              <div>
                <img className="d-block w-100 rounded-3" src={color} />
              </div>
              <div className="mt-md-5 pt-md-5 ">
                <Col className="">
                  <h1 className="text-center  white position-relative all sizemores">
                    Focus-pocus, magical new portraits.
                  </h1>
                </Col>
              </div>

              <div>
                <Row className="d-flex flex-row">
                  <Col className="mt-md-5 pt-md-5" md={{ order: "last" }}>
                    <div className=" ms-md-5 mt-md-5 pt-md-5 ">
                      <h1 className="text-start col-11 text-dark  mt-3 col-md-7">
                        Keep on zooming.
                      </h1>
                    </div>
                  </Col>
                  <Col className="col-12 col-md-6 mt-3">
                    <img className="d-block w-100 " src={man} />
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col className="mt-md-5 pt-md-5 ">
                    <div className=" ms-md-5  mt-md-5 pt-md-5 ">
                      <h5 className="text-start col-9 text-secondary fontttt mt-3">
                        Use the optical-quality 2x Telephoto to zoom in and
                        <b className="black">
                          frame the perfect portrait from right where you are.
                        </b>{" "}
                        Need to go closer still? Use continuous zoom to move in
                        even more.
                      </h5>
                    </div>
                  </Col>
                  <Col className="col-12 col-md-6" md={{ order: "last" }}>
                    <img className="d-block w-100  mt-md-5  mt-4" src={dance} />
                  </Col>
                </Row>
              </div>
              <div className="mt-md-5 pt-md-5 mt-5">
                <Col className="">
                  <h1 className="text-start ">Phantastic Photonic photos.</h1>
                </Col>
              </div>
              <div>
                <Col className="col-md-7 mt-md-5 mt-3 col-7">
                  <h5 className="text-start fontttt text-secondary">
                    <b className="black">
                      The new Photonic Engine supercharges your portraits.
                    </b>{" "}
                    It combines the best pixels from a super‑high‑resolution
                    image with another that’s optimized for light capture. So
                    you get a 24MP image with twice the resolution. It’s perfect
                    for everyday photos — at a file size small enough for
                    storing and sharing.
                  </h5>
                </Col>
              </div>
              <div>
                <Col className="mb-md-5 mb-3">
                  <img className="d-block w-100  mt-md-5  mt-4" src={woman} />
                </Col>
              </div>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </motion.div>
  );
};
export default Slider;
