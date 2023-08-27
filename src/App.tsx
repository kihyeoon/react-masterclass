import styled from "styled-components";
import { Variants, motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const ContainerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const boxVariants: Variants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
  drag: {
    backgroundColor: "rgb(98, 229, 153)",
  },
};

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <ContainerBox ref={containerRef}>
        <Box
          drag
          dragSnapToOrigin
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        ></Box>
        <Box
          drag
          dragElastic={0}
          dragConstraints={containerRef}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        ></Box>
      </ContainerBox>
    </Wrapper>
  );
}

export default App;
