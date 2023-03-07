import React, { useState } from 'react'


export const Addtodo = ({addTodo}) => {

  const[title,setTitle] = useState("");
  const[des,setDec] = useState("");

  const submit = (e) =>{
    e.preventDefault();
    if(!title || !des){
      alert("Title and Description can't be blank.");
    }
    addTodo(title,des);
  }
  return (
    <div className='container'>
        <h3 className='my-3'>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" /> 
  </div>
  <div className="mb-3">
    <label htmlFor="des" className="form-label">Todo Description</label>
    <input type="text" value={des} onChange={(e)=>{setDec(e.target.value)}} className="form-control" id="des"/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Submit</button>
</form>
    </div>
  )
}
