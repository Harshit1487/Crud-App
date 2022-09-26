const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

const cors = require('cors')
const path = require('path');
const app = express();

const connectDB = require('./server/database/connection')

dotenv.config({path:'config.env'})

app.use(express.json())
app.use(cors())

const userModel = require('./server/model/model');

//log request
// app.use(morgan('tiny'));

//mongodb connection
connectDB();

//load assets
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

// load routers
// app.use('/app', require('./server/routes/router'))


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//=================================================



app.post('/newstd', async(request, response)=>{

    const addUser = new userModel({
        name:request.body.name,
        branch:request.body.branch,
        year:request.body.year,
        gender:request.body.gender,
        phone:request.body.phone,
        email:request.body.email
    })

    await addUser.save()
    .then(data =>{
        response.status(200).json({"message": "User Add Success"})
    })
    .catch(error =>{
        response.status(404).json({"message": "Invalid Credentials"})
    })
})


//================================================

//delete data
app.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;

    await userModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

//view data
app.get('/read', async(req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        userModel.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message:"Not found user with id" + id})
                }else{
                    res.send(data);
                    console.log(data);
                }
            })
            .catch(err =>{
                res.status(500).send({message:"Erro retrieving user with id"})
            })

    }else{
        userModel.find()
            .then(user=>{
            res.send(user)
        })
        .catch(err=>{
        res.status(500).send({message:err.message || "error occurred while retriving user information" + id})
        })
    }
})



const PORT = process.env.PORT
app.listen(PORT || 5000, ()=> (console.log('server is running')));