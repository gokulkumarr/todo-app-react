import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus, FaClipboardCheck, FaXmark } from "react-icons/fa6";
import TodoList from "./components/Todolist";

function App() {
  const [inputVal, setInputVal] = useState({
    text: "",
    id: null,
    completed: false,
  });
  const [todolist, setTodoList] = useState([]);
  const [tempid, setTempId] = useState({ id: null });

  const handleText = (e) => {
    setInputVal({ text: e.target.value, id: uuidv4(), completed: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tempid.id !== null) {
      setTodoList(
        todolist.map((todo) => {
          return todo.id === tempid.id
            ? { ...todolist, text: inputVal.text }
            : todo;
        })
      );
      setTempId({ id: null });
    } else {
      inputVal.text.length > 0 && setTodoList([...todolist, inputVal]);
    }

    setInputVal({
      text: "",
      id: null,
    });
  };

  const handleCancel = () => {
    setInputVal({
      text: "",
      id: null,
    });
    setTempId({ id: null });
  };

  return (
    <div className="bg-[#333A49] h-screen flex justify-center items-center ">
      <div className="max-w-sm pt-3 bg-[#151D27] border border-gray-200 rounded-lg shadow w-8/12">
        <div className="mb-5 mt-1 px-3">
          <h1 className="text-xl font-bold text-white">Hi, User!</h1>
          <h6 className="font-normal text-xs text-gray-400">
            All your Notes are here
          </h6>
        </div>

        <TodoList
          todolist={todolist}
          setTodoList={setTodoList}
          setInputVal={setInputVal}
          setTempId={setTempId}
        />

        <form onSubmit={handleSubmit} className="bg-neutral-300 p-1 rounded-b-md">
          <input
            className="bg-transparent md:w-72 w-8/12 p-1 focus:outline-none text-sm"
            type="text"
            placeholder="Enter Your Task"
            value={inputVal.text}
            onChange={handleText}
          />
          <div className="float-right">
            {tempid.id !== null ? 
              <button className="bg-purple-600 text-white p-1 rounded mx-1">
                <FaClipboardCheck />
              </button>
             : 
              <button className="bg-purple-600 text-white p-1 rounded">
                <FaPlus />
              </button>
            }
            {tempid.id !== null && 
              <button
                className="bg-white text-purple-600 p-1 rounded mx-1"
                onClick={handleCancel}
              >
                <FaXmark />
              </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
