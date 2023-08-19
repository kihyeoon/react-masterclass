import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 480px;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  min-height: 200px;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.boardColor};
`;

const Card = styled.div`
  border-radius: 4px;
  margin-bottom: 4px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    if (destination.index === source.index) return;
    const newToDos = [...toDos];
    newToDos.splice(source.index, 1);
    newToDos.splice(destination.index, 0, draggableId);
    setToDos(newToDos);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(provided) => (
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                  {toDos.map((toDo, index) => (
                    <Draggable key={toDo} draggableId={toDo} index={index}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {toDo}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
