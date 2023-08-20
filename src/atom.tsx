import { atom } from "recoil";

interface IToDoState {
  // 인덱스 시그니처(index signature)
  [board: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "e"],
    Doing: ["c", "d"],
    Done: ["f"],
  },
});
