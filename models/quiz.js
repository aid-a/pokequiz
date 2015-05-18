// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PokéQuiz',{ 
		pregunta: {type: DataTypes.STRING,validate: { notEmpty: {msg: "-> Falta Pregunta"}}},
      		respuesta: {type: DataTypes.STRING,validate: { notEmpty: {msg: "-> Falta Respuesta"}}}});
} 
