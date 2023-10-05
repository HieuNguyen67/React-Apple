import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./body.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const Login = (props) => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response1) => {
    console.log(response1);
  };

  return (
    <>
      <Container className="mt-5 mx-auto  ">
        <div>
          <Row>
            <Col/>
            <Col>
              <h2 h4 className="text-center text-break fw-bold sizedangnhap ">
                Đăng Nhập
              </h2>
            </Col>
            <Col/>
          </Row>
        </div>
        <br />
        <div>
          <Row>
            <Col></Col>
            <NavLink to="/4" className="col-10 col-md-4 mb-3">
              <button
                type="button"
                className="btn btn-outline-dark col-12 mx-auto py-2 shadow   "
              >
                <QrCode2Icon className="" />
                Sử dụng mã QR
              </button>
            </NavLink>
            <Col></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col></Col>
            <NavLink to="/5" className="col-10 col-md-4 mb-3">
              <button
                type="button"
                className="btn btn-outline-dark col-12 mx-auto py-2 shadow   "
              >
                <AccountCircleIcon className="" />
                Số điện thoại/ Email /TikTok
              </button>
            </NavLink>
            <Col></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col></Col>
            <NavLink to="/6" className="col-10 col-md-4 mb-3">
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                callback={responseGoogle}
                render={(renderProps) => (
                  <button
                    type="button"
                    className="btn btn-outline-dark col-12 mx-auto py-2 shadow  "
                    onClick={renderProps.onClick}
                  >
                    <GoogleIcon className="" />
                    Tiếp tục với Google
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </NavLink>
            <Col></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col></Col>
            <NavLink className="col-10 col-md-4 mb-3">
              <FacebookLogin
                appId="1088597931155576"
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    type="button"
                    className="me btn btn-outline-dark col-12 mx-auto py-2 shadow "
                    onClick={renderProps.onClick}
                  >
                    <FacebookIcon className="" />
                    Tiếp tục với Facebook
                  </button>
                )}
              />
            </NavLink>
            <Col></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col></Col>
            <NavLink className="col-10 col-md-4 mb-3">
              <button
                type="button"
                className="btn btn-outline-dark col-12 mx-auto py-2 shadow  "
              >
                <TwitterIcon className="" />
                Tiếp tục với Twitter
              </button>
            </NavLink>
            <Col></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col></Col>
            <Col className="col-12 col-md-7 mt-3">
              <h6 className="text-secondary text-center text-break fw-bold sizedangnhap me">
                Bằng cách tiếp tục, bạn đồng ý với Điều khoản Sử dụng của Review
                Official và xác nhận rằng bạn đã đọc hiểu Chính sách Quyền riêng
                tư của Review Official.
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
                  {" "}
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
};
export default Login;