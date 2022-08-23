import { useParams } from "react-router";

// interface RouteParams {
//   coinId: string;
// }

function Coin() {
  const { coinId } = useParams(); // react-router-dom v6부턴 타입 자동 지정
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
