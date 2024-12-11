import React from "react";
import { FaPen, FaTrashCan, FaCheck, FaArrowRotateRight} from "react-icons/fa6";

const TodoList = ({ todolist, setTodoList, setInputVal, setTempId }) => {
  const handleEdit = (item) => {
    setInputVal({ text: item.text });
    setTempId({ id: item.id });
  };

  const handleDelete = (currItem) => {
    setTodoList(
      todolist.filter((item) => {
        return item.id !== currItem;
      })
    );
  };

  const handleCompleted = (currItem) => {
    setTodoList(
      todolist.map((item) => {
        return item.id === currItem.id
          ? { ...item, completed: !currItem.completed }
          : item;
      })
    );
  };
  return (
    <>
      <ul className="text-white px-3 my-3">
        {todolist.map((item) => {
          return (
            <li key={item.id} className="py-2 border-b border-zinc-400 transition-all ease-linear">
                {!item.completed ?
                 <span className="capitalize">{item.text}</span>
              : <span className="capitalize line-through text-zinc-200 text-opacity-50 transition-all ease-linear">{item.text}</span>
              
                }
                <div className="float-right">
              {!item.completed ?
              <button  className="text-xs p-1 mx-1 rounded bg-orange-100 text-orange-700" onClick={() => handleCompleted(item)}><FaCheck /></button>
              : <button className="text-xs p-1 mx-1 rounded bg-amber-50 text-amber-700" onClick={() => handleCompleted(item)}><FaArrowRotateRight /></button>
              }
              
              <button className="p-1 mx-1 rounded bg-green-100 text-green-700 text-xs" onClick={() => handleEdit(item)}>
                <FaPen />
              </button>
              <button className="text-xs rounded bg-red-100 text-red-700 p-1 mx-1" onClick={() => handleDelete(item.id)}>
                <FaTrashCan />
              </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
