import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import camera from "../assets/video/camera.mp4"
import Row from "react-bootstrap/Row";
import smile from "../assets/image/smile.jpg"
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple6 = () => {
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
        className=" col-12  "
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div>
          <div className="pt-md-5  ">
            <Col className="col-8 pt-md-5">
              <h1 className="text-start fonttt">
                Focus‑pocus, magical new portraits.
              </h1>
            </Col>
          </div>
          <div>
            <Col className="col-md-5 mt-md-5 mt-3 col-7">
              <h4 className="text-start fontttt text-secondary">
                More detail and richer color make a dramatic difference in your
                portraits. And now you can tap to{" "}
                <b className="black">
                  shift the focus between subjects — even after you take the
                  shot.
                </b>{" "}
                Presto chango.
              </h4>
            </Col>
          </div>
          <div className="mt-5 pt-md-5">
            <video
              className="col-12 ms-md-3 hidden"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source src={camera} type="video/mp4" />
            </video>
          </div>
          <div className="mt-5">
            <Row className="d-flex flex-row ms-md-5 ps-md-5">
              <Col className="col-8 col-md-6 ">
                <img className="d-block w-100  mt-md-5  mt-4" src={smile} />
              </Col>
              <Col className="mt-md-5 pt-md-5 me-3 mt-4 rela">
                <div className="ms-md-5">
                  <h5 className="text-start col-md-8 text-secondary fontttt">
                    Want to quickly capture the moment before it’s gone?
                    <b className="black">
                      {" "}
                      You no longer have to switch to Portrait mode.
                    </b>{" "}
                    If your subject is a person, dog, or cat, iPhone 15
                    automatically captures depth information. So you can choose
                    to instantly see your photo as a portrait, with an artful
                    blur effect. Or later in the Photos app.
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          
        </div>
        


      </motion.div>
    </>
  );
};
export default Apple6;
