import { Container } from "@mui/system"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './body.scss'
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink } from 'react-router-dom';

const LoginQR =(props) =>{

    return(<>
    
    
    <Container className="mt-5 mx-auto  ">
        <div>
        <Row>
          <Col className="user-select-none"></Col>
          <Col className="col-10 "><h2  className="text-center text-break fw-bold ">Log in with QR code</h2></Col>
          <Col className="user-select-none"></Col>
        </Row>
        </div><br className="user-select-none"/>
        <Container>
        <Row >
          <Col className="user-select-none"></Col>
          <Col className="col-10 col-lg-4 col-md-4 "><h1  className="text-center text-break fw-bold boxQR rounded-3 py-auto shadow"><QrCode2Icon sx={{ fontSize:200 }} /></h1></Col>
          <Col className="user-select-none"></Col>
        </Row>
        </Container><br className="user-select-none"/>
        <div>
        <Row>
          <Col className="user-select-none"></Col>
          <Col className="col-12"><h6  className="text-center text-break  ">1. Scan with your mobile device’s camera <br/>2. Confirm login or sign up</h6></Col>
          <Col className="user-select-none"></Col>
        </Row>
        </div>
        <br className="user-select-none"/>
        <div>
        <Row>
          <Col className="user-select-none"></Col>
          <Col className="col-12"><h6  className="text-center text-break  "><NavLink to="/user" className=" link-dark text-danger decorate "><ArrowBackIosIcon sx={{ fontSize: 20 }}/>Go back</NavLink></h6></Col>
          <Col className="user-select-none"></Col>
        </Row>
        </div>
        <hr></hr>
        <div>
        <Row>
          <Col className="user-select-none"></Col>
          <Col className='col-12 col-md-12 mt-3'><Col><h6 className='text-secondary  text-center text-break fw-bold' >Don’t have an account?<NavLink to="/SignUp"  className=" link-dark text-danger decorate ">  Sign up</NavLink></h6></Col></Col>
          <Col className="user-select-none"></Col>
        </Row>
        </div>
    </Container>
    
    
    </>)
}
export default LoginQR