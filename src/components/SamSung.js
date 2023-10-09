import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import './body.scss';

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