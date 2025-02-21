import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

export function TaskCategory({ title, category, tasks, refetch }) {
  return (
    <Droppable droppableId={category}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="bg-gray-900 p-5 rounded-lg min-h-[300px] w-full max-w-sm">
          <h2 className="text-lg font-bold text-white text-center mb-3">{title}</h2>
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <TaskCard task={task} refetch={refetch} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
