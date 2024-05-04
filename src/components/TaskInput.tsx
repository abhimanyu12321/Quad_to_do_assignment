import React, { useState } from "react";
import { useAppDispatch } from "../store";
import { addTask } from "../store/slices/taskSlice";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export default function TaskInput() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim().length === 0) {
      toast.error("Please enter a task title");
      return;
    }

    dispatch(
      addTask({
        id: nanoid(),
        title,
        completed: false,
        priority,
      })
    );

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col py-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-1/2 mx-auto">
          <label className="py-2 text-lg font-medium text-white ">
            Task title :
          </label>
          <input
            placeholder="Enter a todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border outline-none flex-1 p-2 rounded border-gray-300 "
          />
        </div>

        <div className="flex gap-4 w-1/2 mx-auto">
          <label className="py-2 text-lg font-medium text-white ">
            Priority :
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            id="priority"
            name="priority"
            className="cursor-pointer border outline-none flex-1 p-2 rounded border-gray-300"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <button className="border  rounded p-2 bg-[rgb(15,16,16)] text-white w-1/2 mx-auto">
          Save
        </button>
      </div>
    </form>
  );
}
