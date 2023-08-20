import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  // 인덱스 시그니처(index signature)
  [board: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
