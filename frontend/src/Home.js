import React, {useState} from "react";


function Home() {

 async function getTodos(){

  }

  const jsonData = {
    "todoItems" : [
      {"1": {title: "something"}},
      {"2": {title: "something"}}
  ]
  }


  function handleClick() {
    // Send data to the backend via POST
    fetch('http://localhost/postdata', {  // Enter your IP address here
      method: 'POST', 
      mode: 'no-cors', 
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    })


  }

  function addItems() {
    const uid = crypto.randomUUID('hex');
    jsonData["todoItems"][uid] = {
      "title" : "",
    }
  
  }

  return <div className="h-[300px] border  flex flex-col justify-center items-center">
  {
    jsonData["todoItems"].map((data)=>(
    <input key={crypto.getRandomValues} className="px-5 py-2 border rounded-md focus:border focus:border-red-600 border-blue-700 bg-blue-300 text-xl" type="text" />
           
          ))

  }
    <button className="px-5 my-5 py-2 border rounded-sm border-blue-700 bg-blue-400 text-xl hover:font-bold" onClick={handleClick}>Submit</button>

   <button className="px-5 my-5 py-2 border rounded-sm border-blue-700 bg-blue-400 text-xl hover:font-bold" onClick={addItems}>Add More Items</button>

  </div>;
}

export default Home;
