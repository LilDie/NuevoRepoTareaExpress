const mongoose = require('mongoose');
const {Schema} = mongoose;
const userModelSchema = new mongoose.Schema({

nombre: {
    type:String
},

edad: {
    type:String
},

contraseña: {
    type:String
}  
},

{
    timestamps: true,
    versionKey: false,
});

const userModel = mongoose.model("userModel", userModelSchema);
module.exports = userModel;