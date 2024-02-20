const express = require('express');
const dbconnect = require('./config');
const app = express();
const userModel = require('./userModel');



const router = express.Router();

//ACA CREO UN USUARIO

router.post('/', async(req, res) => {

    const body = req.body;
    const respuesta = await userModel.create(body); 
    res.send(respuesta);
    
});

//ACA Listo A TODOS LOS USUARIOS

router.get('/', async(req, res) => {
    const respuesta = await userModel.find({})
    res.send(respuesta);

});


 // BUSQUEDA POR ID 

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const respuesta = await userModel.findById(id)
    res.send(respuesta);
});

//acá borro por Id
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const respuesta = await userModel.deleteOne({_id : id});

        if (respuesta) {
            res.send({ message: 'Usuario eliminado correctamente', deletedUser: respuesta });
        } else {
            res.status(404).send({ error: 'No se encontró un usuario con ese ID' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Error al intentar eliminar el usuario', details: error.message });
    }
});

//actualizar un usuario

router.put('/:id', async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await userModel.findByIdAndUpdate(id, body, { new: true });
    res.send(respuesta);
});






//  // METODO BORRAR TODA LA LISTA DE USUARIOS
// router.delete('/', async (req, res) => {
//     try {
        
//         const respuesta = await userModel.deleteMany({});
//         res.send({ message: 'Todos los usuarios han sido eliminados', deletedCount: respuesta.deletedCount });
//     } catch (error) {
//         res.status(500).send({ error: 'Error al intentar eliminar usuarios', details: error.message });
//     }
// });





app.use(express.json());

app.use(router);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

dbconnect();