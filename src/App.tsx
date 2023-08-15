import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={onMinutesChange}
      />
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={onHoursChange}
      />
    </>
  );
}

export default App;
