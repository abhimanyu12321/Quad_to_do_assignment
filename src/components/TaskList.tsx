import { useAppDispatch, useAppSelector } from "../store";

import { MdDelete } from "react-icons/md";
import { removeTask, toggleTask } from "../store/slices/taskSlice";
import { useState } from "react";

export default function TaskList() {
  const { tasks } = useAppSelector((state) => state.task);

  const [status, setStatus] = useState("All");

  const dispatch = useAppDispatch();

  const filteredTaskFn = () => {
    if (status === "All") {
      return tasks;
    } else if (status === "Completed") {
      return tasks.filter((task) => task.completed);
    } else if (status === "Pending") {
      return tasks.filter((task) => !task.completed);
    }
  };

  const filteredTasks = filteredTaskFn();

  return (
    <div>
      <div className="flex gap-4 pb-4 w-1/2 mx-auto">
        <button
          onClick={() => setStatus("All")}
          className={`border p-2 rounded font-semibold   ${
            status === "All"
              ? "bg-gray-300 text-black"
              : "bg-[rgb(15,16,16)] text-white"
          }`}
        >
          All Tasks
        </button>
        <button
          onClick={() => setStatus("Completed")}
          className={`border p-2 rounded font-semibold   ${
            status === "Completed"
              ? "bg-gray-300 text-black"
              : "bg-[rgb(15,16,16)] text-white"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setStatus("Pending")}
          className={`border p-2 rounded font-semibold   ${
            status === "Pending"
              ? "bg-gray-300 text-black"
              : "bg-[rgb(15,16,16)] text-white"
          }`}
        >
          Pending
        </button>
      </div>

      <div className="flex flex-col gap-2 w-1/2 mx-auto">
        {filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="relative flex items-center gap-2 bg-gray-300 px-2 py-6 text-black rounded cursor-pointer"
          >
            <input
              className="w-4 h-4 cursor-pointer"
              onChange={() => {
                dispatch(toggleTask(task));
              }}
              checked={task.completed}
              type="checkbox"
            />
            <h2 className={`text-lg ${task.completed ? "line-through" : ""}`}>
              {task.title}
            </h2>

            <span className="absolute right-12 text-sm border p-1 rounded  border-[#afdde5] text-[#afdde5]">
              {task.priority}
            </span>

            <button
              onClick={() => dispatch(removeTask(task))}
              className="absolute right-4 text-xl text-[#DC143C]"
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
