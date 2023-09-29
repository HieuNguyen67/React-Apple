import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import './body.scss';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const HomeXiaomi = () => {

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
      className="boxx col-12 mb-4"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
    {/* <Container className="col-12">
      <Form>
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
    </Form>
    </Container> */}
    </motion.div>
  );
};
export default HomeXiaomi;
// export default function App() {
//   return (
//     <div className="App">
//       <Box num={1} />
//       <Box num={2} />
//       <Box num={3} />
//     </div>
//   );
// }