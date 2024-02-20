const mongoose = require('mongoose')
const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Api-Users');
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
};

module.exports = dbconnect;