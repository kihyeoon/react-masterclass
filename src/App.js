import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  return (
    <Wrapper>
      <Title>Hello!</Title>
    </Wrapper>
  );
}

export default App;
