const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name :{
        type: String,
        required :[true, 'must provide Name'],
        trim : true,
        maxlength :[20, 'name can not be more thn 20 char']
    },
    completed :{
        type : Boolean,
        default : false,
    },
});

module.exports = mongoose.model('Task' , TaskSchema)