import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  background-color: olive;
  color: white;
  border: 0;
  border-radius: 15px;
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: white;
`;

function App() {
  return (
    <>
      <Father as="header">
        <Box bgColor="teal" />
        <Box bgColor="tomato" />
        <Circle bgColor="blue" />
      </Father>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input />
      <Input />
      <Input />
    </>
  );
}

export default App;
