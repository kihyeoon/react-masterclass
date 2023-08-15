import { atom, selector } from "recoil";

export enum Category {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Category;
}

export const categoryState = atom<Category>({
  key: "category",
  default: Category.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const TODO_KEY = "Todo";
      const savedValue = localStorage.getItem(TODO_KEY);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(TODO_KEY)
          : localStorage.setItem(TODO_KEY, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
