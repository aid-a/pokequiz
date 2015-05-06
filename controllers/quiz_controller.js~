//GET /quizes/question
exports.question = function(req, res){
	res.render('quizes/question', {pregunta: 'Apellido de Ash'});
};

//GET /quizes/answer
exports.answer = function(req, res){
	if (req.query.respuesta === 'Ketchum'){
		res.render('quizes/answer', {respuesta: "Correcto"});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};