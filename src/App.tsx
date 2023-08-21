import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import { Board } from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, source } = info;
    if (!destination) return;

    // 같은 보드에서 이동
    if (destination.droppableId === source.droppableId) {
      const boardCopy = [...toDos[source.droppableId]];
      const toDoObj = boardCopy[source.index];
      boardCopy.splice(source.index, 1);
      boardCopy.splice(destination.index, 0, toDoObj);
      setToDos({
        ...toDos,
        [source.droppableId]: boardCopy,
      });
    }

    // 다른 보드로 이동
    if (destination.droppableId !== source.droppableId) {
      const sourceBoardCopy = [...toDos[source.droppableId]];
      const toDoObj = sourceBoardCopy[source.index];
      const destinationBoardCopy = [...toDos[destination.droppableId]];
      sourceBoardCopy.splice(source.index, 1);
      destinationBoardCopy.splice(destination.index, 0, toDoObj);
      setToDos({
        ...toDos,
        [source.droppableId]: sourceBoardCopy,
        [destination.droppableId]: destinationBoardCopy,
      });
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
