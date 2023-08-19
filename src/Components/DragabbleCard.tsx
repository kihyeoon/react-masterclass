import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 4px;
  margin-bottom: 4px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IProps) {
  console.log(toDo, "render");
  return (
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
  );
}

export default memo(DragabbleCard);
