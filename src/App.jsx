import React, { useState } from 'react'
import Todo from './components/Todo';

// const todo = [
//   {
//     title: "This is a todo item",
//     completed: false
//   },
//   {
//     title: "This is the second todo item",
//     completed: true
//   },
//   {
//     title: "This is another todo item",
//     completed: false,
//   }
// ]


const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const checkCompletedLength = () => {
    return (todos.filter(todo => todo.completed).length)
  }

  const addTodoItem = (event) => {
    event.preventDefault();
    const newTodo = {
      title: input,
      completed: false,
      id: todos.length + 1
    }

    setTodos([...todos, newTodo]);
    setInput("");
  }

  const completeTodoItem = (index) => {
    // const ourTodo = [...todos];
    // ourTodo[index].completed == true ? ourTodo[index].completed = false : ourTodo[index].completed = true;

    // setTodos(ourTodo);

    const newTodos = todos.map((todo, i)=>{
      if(i === index){
        return {
          ...todo,
          completed: !todo.completed
        }
      }

    })

    setTodos(newTodos)

  }

  const deleteTodoItem = (index) => {
    const newTodos = todos.filter((todo, i) => {
      return i !== index
    })

    setTodos(newTodos);
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }
  
  return (
    <div className='h-screen w-full px-44 bg-lightBg flex flex-col justify-center items-center'>
      <div className='w-full h-[150px] absolute top-0 left-0 bg-darkBg'></div>
      <div className='md:w-[500px] z-30 w-full flex flex-col justify-center items-center gap-10'>
        <p className='text-primary font-bold text-2xl'>to<span className='text-secondary'>do</span></p>
        <form onSubmit={addTodoItem} className='w-full flex justify-center gap-2 items-center'>
          <input
            type="text"
            placeholder='Add a new todo item...'
            className='w-full outline-none px-3 text-primaryText rounded-lg bg-primaryBg h-12 '
            value={input}
            onChange={handleChange}
          />
          <button type="submit" className='px-8 bg-primary h-12 text-primaryText font-bold rounded-lg'>Add</button>
        </form>
        <div className='justify-between flex w-full'>
          <p className='text-primary flex gap-3 font-semibold'>Todo items <span className='rounded-full text-white bg-primaryBg h-6 w-6 justify-center items-center flex'>{todos.length}</span></p>
          <p className='text-secondary flex gap-3 font-semibold'>Completed items <span className='rounded-full text-white bg-primaryBg h-6 w-6 justify-center items-center flex'>{checkCompletedLength()}</span></p>
        </div>
        {
          todos.length > 0 ? <div className='w-full max-h-[200px] overflow-auto flex flex-col gap-2'>
            {todos.map((item, index) => (
              <div
              key={index}
              onClick={() => completeTodoItem(index)}
              >
                <Todo item={item} index={index} dltFtn={()=>deleteTodoItem(index)} />
              </div>
            ))}
          </div> : <hr className='w-full h-[2px] bg-primaryBg' />
        }
      </div>
    </div>
  )
}

export default App