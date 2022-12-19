const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose');
const TODO = mongoose.model('TODO', { title: {type: String, required: true}  });

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send("connected")
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

async function main(){ 
    await mongoose.connect('mongodb://localhost:27017/test'); // connect it in async function call

    app.listen(80,()=>{
        console.log('server is listening on port 80 ');
        })
}

main();

