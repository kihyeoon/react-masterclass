import styled, { keyframes } from "styled-components";

const Wrapper = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
  font-size: 30px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: blanchedalmond;
  animation: ${rotateAnimation} 3s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0%;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>💅🏾</Emoji>
      </Box>
      <Emoji>💅🏾</Emoji>
    </Wrapper>
  );
}

export default App;
