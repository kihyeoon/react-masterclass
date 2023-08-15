import { useRecoilState, useRecoilValue } from "recoil";
import { IToDo, categoryState, toDoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as IToDo["category"]);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <select value={category} onInput={onInput}>
        <option value="TODO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateTodo />
      <hr />
      <ol>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
