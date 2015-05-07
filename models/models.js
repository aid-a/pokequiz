var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(null, null, null, 
  {dialect: "sqlite", storage: "quiz.sqlite"}      
);

// Importar la definicion de la tabla en quiz.js
var Quiz = sequelize.import(quiz.join(__dirname, 'quiz'));

exports.Quiz = Quiz; // Exportar definicion de tabla Quiz

// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().success(function() {
  // success(..) ejecuta el manejador una vez creada la tabla
  Quiz.count().then(function (count){
    if(count === 0) {   // la tabla se inicializa solo si está vacía
      Quiz.create({pregunta: 'Apellido de Ash',
                  respuesta: 'Ketchum'})
      .success(function(){console.log('Base de datos inicializada')});
    };
  });
});