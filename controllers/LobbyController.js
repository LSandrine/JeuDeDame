
var model = require("../models/dame.js");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

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
