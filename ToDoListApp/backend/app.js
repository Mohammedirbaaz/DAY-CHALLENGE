const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config();
const Notesmod=require('./models/notes.model')
app.use(express.json({extended: false}));

const uri=process.env.ATLAS_URI;
const port=process.env.port || 5000;

const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology: true
};
mongoose.connect(uri,connectionparams).then(()=>{
    console.log("Database connection Established!");
}).catch((e)=>{
    console.log("err "+e)
});

app.get('/add_notes',(req,res)=>{
    var notes=req.body.notes;
    var date=req.body.date;
    var fav=req.body.fav;
    var notess=new Notesmod({notes,date,fav});
    notess.save().then((data)=>{
        res.status(200).send(data);
    }).catch((er)=>{
        res.status(500).send("error "+er);
    })
});

app.get('/delete_notes',async(req,res)=>{
    var c=await Notesmod.remove({notes:req.body.notes});
    res.send(c);

})

app.listen(port,()=>{
    console.log("server created and listening "+port);
});