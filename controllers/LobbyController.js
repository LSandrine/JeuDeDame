
var model = require("../models/dame.js");

module.exports.lobbytab = 	function(request, response){
   response.title = 'lobby';


   model.lobbytab(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
         response.repLobby = result;
        console.log(result);

      response.render('lobby', response);
  });
}
