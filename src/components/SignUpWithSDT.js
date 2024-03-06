import { Container } from "@mui/system"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './body.scss'
import Header from "./Header";




const SignUpWithSDT=()=>{
    return (
      <>
        <Header />
        <Container className="mt-5 mx-auto  ">
          <div>
            <Row>
              <Col></Col>
              <Col className="col-10 ">
                <h2 className="text-center text-break fw-bold ">Đăng Ký</h2>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
        <br />
        <Container className="">
          <Form className="col-11 col-lg-4 col-md-4 mx-auto ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <h6>Ngày sinh của bạn là ngày nào?</h6>
              </Row>
              <Row>
                <Col>
                  <Form.Select
                    aria-label="Floating label select example "
                    className="mb-1 col-3 shadow-sm"
                  >
                    <option>Ngày</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    aria-label="Floating label select example "
                    className="mb-1 col-3 shadow-sm"
                  >
                    <option>Tháng</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select
                    aria-label="Floating label select example "
                    className="mb-1 col-3 shadow-sm"
                  >
                    <option>Năm</option>
                    <option value="1">2017</option>
                    <option value="2">2018</option>
                    <option value="3">2019</option>
                    <option value="3">2020</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <h7 className="text-secondary mb-4">
                  Ngày sinh của bạn sẽ không được hiển thị công khai.
                </h7>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Điện thoại</Form.Label>
                </Col>
                <Col className="text-end">
                  <Form.Label className="fss">
                    <NavLink
                      to="/SignUpWithEmail"
                      className=" link-dark text-danger decorate fw-semibold "
                    >
                      Đăng ký bằng email{" "}
                    </NavLink>
                  </Form.Label>
                </Col>
              </Row>
              <div className="d-flex flex-column">
                <Form.Select
                  aria-label="Floating label select example "
                  className="mb-1 col-3 shadow-sm"
                >
                  <option>VN +84</option>
                  <option value="1">Afghanistan +93</option>
                  <option value="2">Albania +355</option>
                  <option value="3">Algeria +213</option>
                  <option value="3">American Samoa +1684</option>
                </Form.Select>

                <Form.Control
                  type="email"
                  placeholder="Số điện thoại"
                  className="shadow-sm"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Row className="d-flex mb-2">
                <Col>Nhập mã:</Col>
                <Col className="text-end">
                  <NavLink className=" link-dark text-primary decorate ">
                    Gửi mã
                  </NavLink>
                </Col>
              </Row>
              <Form.Control
                type="password"
                placeholder="Nhập mã gồm 6 chữ số"
                className="shadow-sm"
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="col-12 mt-4 shadow">
              Đăng ký
            </Button>
          </Form>
          <br />
          <div>
            <Row>
              <Col></Col>
              <Col className="col-12">
                <h6 className="text-center text-break  ">
                  <NavLink
                    to="/SignUp"
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
                    Bạn đã có tài khoản?
                    <NavLink
                      to="/user"
                      className=" link-dark text-danger decorate "
                    >
                      {" "}
                      Đăng nhập
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
export default SignUpWithSDT;