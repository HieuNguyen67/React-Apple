import { Container } from "@mui/system"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './body.scss'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Header from "./Header";


const LoginwithEmail1=(props) =>{
     
const responseFacebook = (response) => {
    console.log(response);
  }
    return (
      <>
        <Header />
        <Container className="mt-5 mx-auto  ">
          <div>
            <Row>
              <Col></Col>
              <Col className="col-10 ">
                <h2 className="text-center text-break fw-bold ">Đăng Nhập</h2>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
        <br />
        <Container className="">
          <Form className="col-10 col-lg-4 col-md-4 mx-auto ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col className="text-end">
                  <Form.Label className="fss">
                    <NavLink
                      to="/5"
                      className=" link-dark text-danger decorate fw-semibold"
                    >
                      Đăng nhập bằng SĐT{" "}
                    </NavLink>
                  </Form.Label>
                </Col>
              </Row>

              <Form.Control
                type="email"
                placeholder="Email"
                className="shadow-sm"
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Row className="d-flex mb-2">
                <Col>Password</Col>
                <Col className="text-end">
                  <NavLink className=" link-dark text-primary decorate ">
                    Forgot password?
                  </NavLink>
                </Col>
              </Row>
              <Form.Control
                type="password"
                placeholder="Password"
                className="shadow-sm"
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="col-12 mt-4 shadow">
              Đăng nhập
            </Button>
          </Form>
          <br />
          <div>
            <Row>
              <Col></Col>
              <Col className="col-12">
                <h6 className="text-center text-break  ">
                  <NavLink
                    to="/user"
                    className=" link-dark text-danger decorate "
                  >
                    <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                    Go back
                  </NavLink>
                </h6>
              </Col>
              <Col></Col>
            </Row>
          </div>
          <hr></hr>
          <div>
            <Row>
              <Col></Col>
              <Col className="col-12 col-md-12 mt-3">
                <Col>
                  <h6 className="text-secondary  text-center text-break fw-bold">
                    Bạn không có tài khoản?
                    <NavLink
                      to="/SignUp"
                      className=" link-dark text-danger decorate "
                    >
                      {" "}
                      Đăng ký
                    </NavLink>
                  </h6>
                </Col>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </>
    );
}
export default LoginwithEmail1