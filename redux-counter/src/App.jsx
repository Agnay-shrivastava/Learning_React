import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment , reset } from './app/counterSlice';
import { useDispatch , useSelector } from 'react-redux';
import { addTodo , removeTodo } from './app/todosSlice';
import { fetchTodos } from './app/todosSlice';


function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  const todos = useSelector((state)=> state.todos.list);
  const [todo , setTodo] = useState('');
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Todos</h1>
      <input type="text" placeholder='Add a todo ' value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={() => {dispatch(addTodo(todo));
      setTodo(''); console.log(todo);
      }}>
        Add
      </button>
      <button onClick={() => dispatch(removeTodo(todo))}>
        Remove
      </button>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {todos.map((todo , index) => (
          <li key={todo.id}>{todo.title || todo}</li>
        ))}
      </ul>
    </>
  )
}

export default App
