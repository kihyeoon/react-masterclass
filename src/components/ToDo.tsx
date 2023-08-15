import { MouseEvent } from "react";
import { useSetRecoilState } from "recoil";
import { toDoState, IToDo, Category } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name: newCategory },
    } = event;
    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: newCategory as Category };
      return [
        ...prevToDos.slice(0, targetIndex),
        newToDo,
        ...prevToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Category.DOING && (
        <button name={Category.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Category.TODO && (
        <button name={Category.TODO} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Category.DONE && (
        <button name={Category.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
