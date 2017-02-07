var model = require("../models/vip.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = 	function(request, response){
   response.title = 'Répertoire des stars';

      response.render('repertoireVips', response);

}

module.exports.Repertoire = function(request,response){
    model.firstletter(function(err,result){
      if (err) {
          console.log(err);
          return;
      }
      response.letter = result;
      response.render('repertoireVips',response);
    });
}

module.exports.letter = function(request,response){
  var data = request.params.letter;
  res = data;
  return res;
}
