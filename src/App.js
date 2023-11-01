import { useRef, useState } from 'react';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);

  const inputRev = useRef();

  const handleAddToDo = () => {

    const text = inputRev.current.value;
    const newItem = { complated: false, text };
    setTodos([...todos, newItem]);
    inputRev.current.value = "";

  }

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].complated = !newTodos[index].complated;
    setTodos(newTodos);
  }
  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul>
        {todos.map(({ text, complated }, index) => {
          return (
            <div className='item'>
              <li className={complated ? "done" : ""} key={index}
                onClick={() => handleItemDone(index)}>{text}
              </li>
              <span onClick={() => handleDeleteItem(index)}>💣</span>
            </div>
          );
        })}
      </ul >
      <input ref={inputRev} placeholder='Enter The List' />
      <button onClick={handleAddToDo}>Add</button>
    </div >
  );
}

export default App;