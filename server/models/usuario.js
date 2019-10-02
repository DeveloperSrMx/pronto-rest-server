const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;


let usuarioSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    name: {
        type: String
    },
    age: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'El password es necesario']
    }
});

// Este mecanismo permite eliminar la propiedad password en la devolucion del servicio, para que el usuario no la vea en el front end.
usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}



usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);