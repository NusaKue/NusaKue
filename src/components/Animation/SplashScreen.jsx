import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "./SplitText";

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [clipStage, setClipStage] = useState("enter"); // “enter” or “exit”

  const clipVariants = {
    enter: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
    exit:  { clipPath: "polygon(0 0, 100% 0, 100% 0,    0 0)" },
  };

  // dipanggil oleh SplitText begitu animasi huruf selesai
  const handleTextDone = () => {
    setClipStage("exit");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash-screen bg-primary-100 fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50"
          variants={clipVariants}
          initial="enter"
          animate={clipStage}            
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (clipStage === "exit") {
              setVisible(false);
              onFinish?.();
            }
          }}
          style={{
            WebkitClipPath: clipVariants[clipStage].clipPath,
            clipPath:         clipVariants[clipStage].clipPath,
          }}
        >
          <SplitText
            text="NUSA KUE"
            className="text-heading-1 md:text-[15rem] font-semibold text-center text-white font-baloo"
            delay={100}
            duration={0.9}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleTextDone}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
