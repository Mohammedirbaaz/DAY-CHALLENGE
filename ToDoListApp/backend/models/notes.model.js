const mongoose=require("mongoose");

const notesmodel=new mongoose.Schema({
    notes:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    fav:{
        type:Boolean,
        required:true
    }
})
const mods=mongoose.model('notes',notesmodel);
module.exports=mods;