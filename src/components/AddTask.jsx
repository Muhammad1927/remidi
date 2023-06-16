import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-4 justify-center">
      <input
        className="p-2 px-8 w-80"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambahkan Kegiatan Anda"
      ></input>
      <button
        className="py-2 px-4 rounded-md text-white bg-blue-600 text-sm py-1 px-2"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Tambah Kegiatan
      </button>
    </div>
  );
};

export default AddTask;
