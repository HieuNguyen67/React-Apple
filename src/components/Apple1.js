import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import './body.scss';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  hidden: { opacity: 0, scale: 0 }
};

const Apple1 = () => {

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
    <motion.div
      className=" col-12 "
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      
    >
      <Container>
        <div>
          <Row>
            <Col />
            <Col></Col>
            <Col></Col>
            <Col md={3} sm={3} xs={6}>
              <Nav.Link>
                <button
                  type="button"
                  className="col-12 btn btn-dark rounded-4 mt-4 text-center shadow"
                >
                  Buy
                </button>
              </Nav.Link>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
        <br />

        <div>
          <Row>
            <Col></Col>
            <Col>
              <h4 h4 className="text-center text-break fonts">
                From $799 or $33.29/mo. for 24 mo.1
              </h4>
            </Col>
            <Col></Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col></Col>
            <Col className=" ">
              <h5 className="fw-light text-center text-break fonts mt-md-3">
                Available starting 9.22
              </h5>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
};
export default Apple1;
