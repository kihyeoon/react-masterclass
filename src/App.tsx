import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={onMinutesChange}
      />
      <input type="number" placeholder="Hours" value={hours} />
    </>
  );
}

export default App;
