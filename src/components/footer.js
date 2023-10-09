import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/image/Logo1.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="boxFooter">
        <div className="container ">
          <Row className="pt-5">
            <Col />
            <Col className="col-12 col-md-3">
              <p className="text-center">
                {" "}
                <img alt="" src={Logo} width="140px" height="140px" />
                <br />
                <h3 className="text-light">Review Official</h3>
              </p>
            </Col>

            <Col className="col-12 col-md-3">
              <hr
                style={{ color: "white", width: "60%" }}
                className="mx-auto"
              />
              <p className="text-center text-light">
                <h1>Menu</h1>
                <br />
                <NavLink to="/React-Apple" className="text-decoration-none">
                  <h5 className="text-secondary">Apple</h5>
                </NavLink>
                <br />
                <h5 className="text-secondary">Xiaomi</h5>
              </p>
            </Col>
            <Col />
          </Row>
          <Row>
            <Col>
              <hr
                style={{ color: "white", width: "60%" }}
                className="mx-auto"
              />
              <h5 className="text-center text-secondary py-3 py-md-5 fontttt">
                © Hieu Nguyen. All Rights Reserved. Designed by Review Official.
              </h5>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Footer;
