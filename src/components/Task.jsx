import { useState } from "react";

const Task = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <div className="flex gap-5 " style={{ justifyContent: "space-around" }}>
        <td>
          <input
            value={task.text}
            onChange={(a) => {
              onChange({ ...task, text: a.target.value });
            }}
          />
        </td>
        <td>
          <button
            className="text-base rounded-md py-1 px-2 text-sm text-white bg-green-500"
            onClick={() => setIsEditing(false)}
          >
            Save
          </button>
        </td>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex gap-5 " style={{ justifyContent: "space-around" }}>
        <td>{task.text}</td>
        <td>
          <button
            className="text-base rounded-md text-white bg-green-700 py-1 px-3 text-sm"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>{" "}
        </td>
      </div>
    );
  }

  return (
    <>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({ ...task, done: e.target.checked });
          }}
        />
      </td>
      <td>{taskContent}</td>

      <td>
        <button
          className="text-base rounded-md text-white bg-red-700 text-sm py-1 px-2"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default Task;
