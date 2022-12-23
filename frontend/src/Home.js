import React, {useState, useEffect} from "react";
import axios from "axios"
import ToDo from "./components/ToDo";
import Badge from "./components/Badge";

function Home() {
const [todo, setTodo] = useState("")
const [ToDos, setTodos] = useState([])

useEffect( ()=>{
  getTodos()
}, [])

function getTodos(){
    // const data =  await axios.get("http://localhost/todoitem")
    // const todos = data.data
    // // console.log(todos)
    // return todos;
    axios.get("http://localhost/todoitem")
    .then( res => {
      console.log(res.data)
      setTodos(res.data)
      return res.data
    }).catch(err => {
      console.log(err)
    })
  }

async function postToDo() {
    // Send data to the backend via POST
    if(!todo.trim().length) return;
    const res = await axios.post('http://localhost/todoitem', {title: todo}, { headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }});
    console.log(res)

  setTodos(getTodos())
  }

  async function updateToDos(){
    
  }

  return <div className="h-[] p-10 border  flex flex-col justify-center items-center">
  <div className="space-x-4">
  <input key={crypto.getRandomValues} className="px-5 py-2 border rounded-md focus:border focus:border-red-600 border-blue-700 bg-blue-300 text-xl" type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
  <button className="px-5 my-5 py-2 border rounded-sm border-blue-700 bg-blue-400 text-xl hover:bg-blue-500 hover:text-white" onClick={postToDo}>Save To Do</button>

  </div>
  <Badge onClick={updateToDos}> UPDATE ALL NOTES</Badge>
 <div className=" flex flex-wrap justify-between space-y-2">
 {
 ToDos && ToDos.map((item)=>{ return <ToDo key={item._id} item={item}></ToDo>})
}
 </div>
  </div>;
}

export default Home;
