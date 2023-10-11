import Container from "react-bootstrap/Container";
import "./body.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Logo from "../assets/image/thumb-1920-937133-removebg-preview.png"
import { motion, useAnimation } from "framer-motion";
import Footer from "./Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const Xiaomi = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 98 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{type: "spring", duration: 0.6 }}
      >
        <Container>
          <div>
            <Row className="d-flex flex-row">
              <Col className="col-12 col-md-7">
                {" "}
                <div>
                  <div>
                    <h1>About.</h1>
                    <br />
                    <p style={{ fontSize: "20px" }} className="fontttt">
                      <span className="text-primary">Little of me: </span>
                      Currently, I am a final year student who is self-taught
                      and seriously determined on becoming a good frontend
                      developer.
                    </p>
                    <br />

                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <div>
                          <Row>
                            <Col>
                              {" "}
                              <p
                                className="text-center mt-3 fontttt"
                                style={{ fontSize: "20px" }}
                              >
                                <span className="text-primary">
                                  My university:{" "}
                                </span>
                                Saigon Technology University (STU).
                                <br />
                                <span className="text-primary">
                                  Major:
                                </span>{" "}
                                Software Engineering.
                                <br />
                              </p>
                            </Col>
                          </Row>
                        </div>
                      }
                    >
                      <p
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                        className="text-secondary"
                      >
                        Something else:
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-md-5 mt-5 pt-5 mt-md-0 pt-md-0">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <img src={Logo} />
                </motion.div>
              </Col>
            </Row>
          </div>
          <br />
          <hr />
          <Row className=" mx-auto">
            <p className="col-12 text-center">
              <a
                href="https://github.com/HieuNguyen67"
                target="_blank"
                style={{ color: "black" }}
              >
                <GitHubIcon fontSize="large" />
              </a>
              &emsp;
              <a href="https://www.facebook.com/hieu1511202/" target="_blank">
                <FacebookIcon fontSize="large" />
              </a>
            </p>
          </Row>
        </Container>
        <Footer />
      </motion.div>
    </>
  );
};
export default Xiaomi;
