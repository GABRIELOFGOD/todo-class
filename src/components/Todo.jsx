import React from 'react'

const Todo = ({item, index, dltFtn}) => {
  return (
    <div className='flex gap-3 w-full bg-primaryBg rounded-md items-center py-2 px-3 justify-between'>
      <div className={`rounded-full max-h-4 border border-primary max-w-4 w-4 h-4 ${item.completed == true ? "bg-primary" : "bg-none"}`}></div>
      <p className={`${item.completed ? "text-neutral-700 line-through" : "text-primaryText"} text-sm flex justify-start items-start w-full`}>{item.title}</p>
      <button onClick={dltFtn}><p className='text-xs text-red-500 font-semibold'>delete</p></button>
    </div>
  )
}

export default Todo