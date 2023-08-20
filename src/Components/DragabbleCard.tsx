import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 4px;
  margin-bottom: 4px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
`;

interface IProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DragabbleCard({ toDoId, toDoText, index }: IProps) {
  console.log(toDoText, "render");
  return (
    <Draggable key={toDoId} draggableId={toDoId.toString()} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default memo(DragabbleCard);
