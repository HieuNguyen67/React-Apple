import { Container } from "@mui/system"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './body.scss'

const LoginwithEmail=(props) =>{
    return(<>
    
    <Container className="mt-5 mx-auto  ">
      
    <div>
        <Row>
          <Col ></Col>
          <Col className="col-10 "><h2  className="text-center text-break fw-bold ">Đăng Nhập</h2></Col>
          <Col ></Col>
        </Row>
        </div>
    </Container><br/>
    <Container className="">
   
    <Form className="col-10 col-lg-4 col-md-4 mx-auto ">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row>
        <Col><Form.Label>Điện thoại</Form.Label></Col>
        <Col className="text-end"><Form.Label className="fss"><NavLink to="/10"className=" link-dark text-danger decorate fw-semibold">Đăng nhập bằng email </NavLink></Form.Label></Col>
        </Row>
        <div className="d-flex flex-column">
        
        <Form.Select aria-label="Floating label select example " className="mb-1 col-3 shadow-sm">
        <option>VN +84</option>
        <option value="1">Afghanistan +93</option>
        <option value="2">Albania +355</option>
        <option value="3">Algeria +213</option>
        <option value="3">American Samoa +1684</option>
      </Form.Select>
      
      
        <Form.Control type="email" placeholder="Số điện thoại" className="shadow-sm"/>
        
        </div>
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Row className="d-flex mb-2">
        <Col>Nhập mã</Col>
        <Col className="text-end"><NavLink className=" link-dark text-primary decorate ">Gửi mã</NavLink></Col>
        </Row> 
        <Form.Control type="password" placeholder="Nhập mã gồm 6 chữ số" className="shadow-sm" />
      </Form.Group>
      
      <Button variant="dark" type="submit" className="col-12 mt-4 shadow">
        Đăng nhập
      </Button>
    </Form><br/>
    <div>
        <Row>
          <Col ></Col>
          <Col className="col-12"><h6  className="text-center text-break  "><NavLink to="/user" className=" link-dark text-danger decorate "><ArrowBackIosIcon sx={{ fontSize: 20 }}/>Go back</NavLink></h6></Col>
          <Col ></Col>
        </Row>
        </div><hr></hr>
        <div>
        <Row>
          <Col ></Col>
          <Col className='col-12 col-md-12 mt-3'><Col><h6 className='text-secondary  text-center text-break fw-bold' >Bạn không có tài khoản?<NavLink to="/SignUp"  className=" link-dark text-danger decorate ">  Đăng ký</NavLink></h6></Col></Col>
          <Col ></Col>
        </Row>
        </div>
    
    
    </Container>
    
    
    
    
    </>)
}
export default LoginwithEmail