import './App.css';
import Header from "./My Component/Header";
import {Todos} from "./My Component/Todos";
import Footer from "./My Component/Footer";
import React, { useState, useEffect } from 'react';
import { Addtodo } from './My Component/Addtodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todolist") === null){
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todolist"))
  }
  const onDelete = (todo) =>{
    console.log("Todo delete",todo)

    settodolist(todolist.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todolist",JSON.stringify(todolist))
  }

  let sln;
  const addTodo = (title,des)=>{
    if (todolist.length===0){
      sln = 0;
    } else {
      sln = todolist[todolist.length-1].sln + 1;
    }
    
    const myTodo = {
      sln : sln,
      title : title,
      des : des
    }
    settodolist([...todolist,myTodo]);
    console.log(myTodo);  
  }


  const [todolist, settodolist] = useState([initTodo])
  useEffect(() => {
    localStorage.setItem('todolist',JSON.stringify(todolist));
  }, [todolist])
  return (
    <>
    <Header title = "My TodoList" searchBar = {false} />
    <Addtodo addTodo={addTodo}/>
    <Todos todolist = {todolist} onDelete = {onDelete} />
    <Footer/>

    </>
  );
}

export default App;
