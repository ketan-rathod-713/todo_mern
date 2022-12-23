const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose');
const path = require('path')
require("dotenv").config();
const TODO = mongoose.model('TODO', { title: {type: String, required: true}  });

const PORT = process.env.PORT || 80;
const MONGO_URL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test";

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'frontend', 'build')))

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname ,'frontend','build', 'index.html'));
})

app.get("/todoitem",async (req, res)=>{
    try{
        todoItems =  await TODO.find({});
        res.send(todoItems)
    } catch(e){
        console.log(`An Error Occurred ${e}`)
    }
})

app.post('/todoitem', (req, res)=>{
    try{
        const {title} = req.body
        const todo = new TODO({ title: title });
        todo.save().then(() => console.log('todo item saved successfully'))
        .catch((e)=>{
            console.log(`An Error Occurred ${e}`)
        })
        res.status(200).send(todo)
    } catch (e){
        console.log(`An Error Occurred ${e}`)
        res.sendStatus(500)
    }
})

app.post("/todoitem/:todoId", (req, res)=>{
    try{
        const {title} = req.body
        console.log(title)
        res.status(200).send(req.params.todoId)
    } catch (e){
        console.log(`An Error Occurred ${e}`)
        res.sendStatus(500)
    }
})

async function main(){ 
    await mongoose.connect(MONGO_URL); // connect it in async function call

    app.listen(PORT,()=>{
        console.log(`server is listening on port ${PORT} `);
        })
}

main();

