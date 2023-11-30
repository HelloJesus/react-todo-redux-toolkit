import React, { useState } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './reduxToolkit/hooks';
import { createTodo, completeTodo, deleteTodo, clearTodo } from './reduxToolkit/reducer';

function App() {
  const [value, setValue] = useState('')
  const posts = useAppSelector(state => state.todos.list)
  const dispatch = useAppDispatch()

  const handleCreate = () => {
    if (value === '') return

    dispatch(createTodo({ title: value }))
  }

  const handleDelete = (id: number) => {
    dispatch(deleteTodo({ id }))
  }

  const handleComplete = (id: number) => {
    dispatch(completeTodo({ id }))
  }

  const handleClear = () => {
    dispatch(clearTodo())
  }

  return (
    <div className='w-full flex flex-col items-center bg-slate-500 h-screen'>
      <header className="text-center py-4">
        <h1 className='text-4xl text-white m-0 font-semibold'>Todo List Redux Toolkit</h1>
      </header>
      <main className='flex flex-col gap-5 items-center h-full w-80'>
          <div className='flex flex-col gap-2 items-center p-3 border border-gray-300 rounded-md w-full bg-white'>
            <h3 className='text-2xl font-medium'>Create Task</h3>
            <input onChange={(e) => setValue(e.target.value)} type="text"
              className='px-3 py-2 select-none border rounded-md outline-none w-full' placeholder='Task...' />
            <button onClick={handleCreate}
              className='mt-4 rounded-md bg-blue-500 flex items-center justify-center font-lg px-3 py-2 text-white w-full'>
              Create task
            </button>
          </div>
          <div className='w-full flex flex-col gap-2 p-3 border border-gray-300 rounded-md bg-white'>
            {
              posts.map(post => {
                return (
                  <div className='flex flex-col justify-between gap-2 border-b border-gray-300 p-2 last:border-none' key={post.id}>
                    <div className='flex items-center gap-4'>
                      <span>{post.id}</span>
                      <span className={`text-lg truncate ${post.complete ? 'line-through' : ''}`}>{post.title}</span>
                    </div>
                    <div className='mb-2 flex gap-2'>
                      <button onClick={() => handleComplete(post.id)} className={`px-3 py-1 rounded-md text-white ${post.complete ? 'bg-gray-500' : 'bg-green-500'}`}>
                        {post.complete ? 'Uncomplete' : 'Complete'}
                      </button>
                      <button onClick={() => handleDelete(post.id)} className='px-3 py-1 rounded-md text-white bg-red-500 '>
                        Delete
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button onClick={handleClear} className='px-3 py-2 rounded-md text-white bg-red-500 w-full'>
            Delete All
          </button>
      </main>
    </div>
  );
}

export default App;
