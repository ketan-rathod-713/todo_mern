import React, {useState} from "react";
import axios from "axios";
import Badge from "./Badge"

function ToDo(props) {

    const [text, setText] = useState(props.item.title)
    let updatedValue = props.item.title

    async function updateValue(){
    const res = await axios.post(`http://localhost/todoitem/${props.item._id}`, {title: text}, { headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }});
    }
    
    return <div>
        <input className="px-5 py-2 border rounded-md focus:border focus:border-red-600 border-blue-700 bg-blue-300 text-xl" type="text" value={text} onChange={(e)=>{setText(e.target.value);}} />
    </div>;
    }

export default ToDo;
