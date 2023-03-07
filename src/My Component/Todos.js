import React from 'react'
import {TodoItem}  from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-4'>Todo List</h3>
      {props.todolist.length===0? "No Todo Available":
      props.todolist.map((todo)=>{
        return (
          <>
          <TodoItem todo={todo} key={todo.sln} onDelete={props.onDelete}/> <hr />
          </>
        )
        
      })
      }
      
      
    </div>
  )
}
