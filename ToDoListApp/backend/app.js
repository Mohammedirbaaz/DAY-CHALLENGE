const express=require('express');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const app=express();
const Notesmod=require('./models/notes.model')

require('dotenv').config();
app.use(cors({origin:"http://localhost:3000",credentials:true}));
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

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

app.get('/',async(req,res)=>{
    await Notesmod.find({}).then(data=>{
        res.send(JSON.stringify(data));
    }).catch(e=>{
        res.send(e);
    });
})

app.post('/add_notes',(req,res)=>{
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

app.post('/delete_notes',async(req,res)=>{
    var c=await Notesmod.findOneAndDelete({"_id":req.body._id});
    res.send(c);
})

app.post('/edit_notes',async(req,res)=>{
   var c=await Notesmod.findOneAndUpdate({"_id":req.body._id},{"notes":req.body.notes});
    res.send(c);
});

app.post('/search_notes',async(req,res)=>{
    var c=await Notesmod.find({ "notes": { "$regex": req.body.notes, "$options": "i" } });
    res.send(c);
})

app.listen(port,()=>{
    console.log("server created and listening "+port);
});