// ////////////////////////////////////////////// A C C U E I L
var model = require("../models/dame.js");
module.exports.Index = function(request, response){
   response.title ="Jeu de dames"
 response.render('home', response);
};
module.exports.Connexion = function(request, response){
    response.title ="Jeu de dames connexion";
    var data={pwd :request.body.password ,user : request.body.username };
    model.connexion(data,function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
       rep="deny";
       if(result[0]){
         request.session.userId=result[0].id_user;
         console.log(request.session.userId);
         rep="accept";
       }
       console.log(rep);
       response.send(rep);
     });

};
module.exports.GetSession = function(request, response){
  console.log(request.session);
  response.send(request.session);
};
