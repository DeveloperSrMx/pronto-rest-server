// =====================================
// Puerto
// =====================================

process.env.PORT = process.env.PORT || 3000;


// =====================================
// Entorno
// =====================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =====================================
// Base de datos
// =====================================

let urlDB;

urlDB = 'mongodb://localhost:27018/usuarios';

process.env.URLDB = urlDB;