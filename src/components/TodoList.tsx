import { useRecoilState, useRecoilValue } from "recoil";
import { Category, categoryState, toDoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Category);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <select value={category} onInput={onInput}>
        <option value={Category.TODO}>To Do</option>
        <option value={Category.DOING}>Doing</option>
        <option value={Category.DONE}>Done</option>
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
