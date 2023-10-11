import Col from "react-bootstrap/Col";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "./body.scss";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  hidden: { opacity: 0, scale: 0 },
};
const Apple12 = () => {
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
    <>
      <motion.div
        className=" col-12 mt-5 pt-md-5 "
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        
      >
        <div className="pt-md-5  ">
          <Col className="col-8 pt-md-5">
            <h1 className="text-start fonttt">
              USB-C<span className="text-secondary">ompatible.</span>
            </h1>
          </Col>
        </div>
        <div>
          <Col className="col-md-7 mt-md-5 mt-3 col-10">
            <h4 className="text-start fontttt text-secondary">
              The new USB-C connector lets you{" "}
              <span className="black">
                {" "}
                charge your Mac or iPad with the same cable
              </span>{" "}
              you use to charge iPhone 15. You can even use iPhone 15 to charge
              Apple Watch or AirPods.6 Bye-bye, cable clutter.
            </h4>
          </Col>
        </div>
      </motion.div>
    </>
  );
};
export default Apple12;
