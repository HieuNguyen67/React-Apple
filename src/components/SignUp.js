
import { Container } from '@mui/system';
import './body.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Login=(props)=>{
  const responseFacebook = (response) => {
    console.log(response);
  }
  const responseGoogle = (response1) => {
    console.log(response1);
  }


    return (<>

      <Container className="mt-5 mx-auto  ">
        <div>
        <Row>
          <Col ></Col>
          <Col ><h2 h4 className="text-center text-break fw-bold sizedangnhap">Đăng Ký</h2></Col>
          <Col ></Col>
        </Row>
        </div><br/>
        
        <div><Row>
        <Col ></Col>
          <NavLink  to="/SignUpWithSDT" className='col-10 col-md-4 mb-3  '><button type="button" className="btn btn-outline-dark col-12 mx-auto py-2 shadow "><AccountCircleIcon className=''/>Sử dụng Số điện thoại hoặc Email</button></NavLink>
          <Col ></Col>
          </Row>
        </div>
        <div><Row>
        <Col ></Col>
          <NavLink  to="/6" className='col-10 col-md-4 mb-3'><GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    callback={responseGoogle}
    render={renderProps => (
      <button type="button" className="btn btn-outline-dark col-12 mx-auto py-2  shadow " onClick={renderProps.onClick} ><GoogleIcon className=''/>Tiếp tục với Google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /></NavLink>
          <Col ></Col>
          </Row>
        </div>
        <div><Row>
        <Col ></Col>
          <NavLink    className='col-10 col-md-4 mb-3'><FacebookLogin
  appId="1088597931155576"
  
  callback={responseFacebook}
  render={renderProps => (
    <button type="button" className="me btn btn-outline-dark col-12 mx-auto py-2 shadow " onClick={renderProps.onClick} ><FacebookIcon className=''/>Tiếp tục với Facebook</button>
  )}
/></NavLink>
          <Col ></Col>
          </Row>
        </div>
        <div><Row>
        <Col ></Col>
          <NavLink   className='col-10 col-md-4 mb-3'><button type="button" className="btn btn-outline-dark col-12 mx-auto py-2 shadow  "><TwitterIcon className=''/>Tiếp tục với Twitter</button></NavLink>
          <Col ></Col>
          </Row>
        </div>
        <div>
        <Row>
          <Col ></Col>
          <Col className='col-12 col-md-7 mt-3'><h6  className="text-secondary text-center text-break fw-bold sizedangnhap me">Bằng cách tiếp tục, bạn đồng ý với Điều khoản Sử dụng của Review Official và xác nhận rằng bạn đã đọc hiểu Chính sách Quyền riêng tư của Review Official.</h6></Col>
          <Col ></Col>
        </Row>
        </div>
        <hr></hr>
        <div>
        <Row>
          <Col ></Col>
          <Col className='col-12 col-md-12 mt-3'><Col><h6 className='text-secondary  text-center text-break fw-bold' > Bạn đã có tài khoản?<NavLink to="/user"  className=" link-dark text-danger decorate "> Đăng nhập</NavLink></h6></Col></Col>
          <Col ></Col>
        </Row>
        </div>
        
        
        
        
          {/* <Form className=" box1 col-sm-5 col-8 mx-auto " >
          
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
    
    
    </Container>
    
    
    

    
    
    
    
    </>

    )
}
export default Login