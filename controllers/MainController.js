// ////////////////////////////////////////////// A C C U E I L
var model = require("../models/bd.js");
var messages = [];
var players = [];
var demandesParties = [];
var game=[];
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
         request.session.userName=result[0].name_user;
          request.session.play=0;
          request.session.mange=0;
         console.log(request.session.userId);
         players.push({ 'id' : request.session.userId, 'login' : request.session.userName ,'play' : 0 });
         console.log(players);
         rep="accept";
       }
       response.send(rep);
     });

};
module.exports.GetSession = function(request, response){
  response.send(request.session);
};
module.exports.GetPlayers = function(request, response){
  response.send(players);
};
module.exports.GetMessages = function(request, response){
  response.send(messages);
};
module.exports.GetGames = function(request, response){
  response.send(game);
};
module.exports.GetPropose = function(request, response){
  response.send(demandesParties);
};
module.exports.EnvoiDeMessage = function(request, response){
    var login='anonyme';
    if(request.session.userName)login=request.session.userName;
    var message=login+': '+request.body.message;
    if(messages.length>30)messages.shift();
    messages.push(message);
    response.send('send');
};
module.exports.ProposerUnGame = function(request, response){
  demandesParties.push(request.body);
  response.send('propose');
};
module.exports.AcceptGame = function(request, response){
 var   plateauInit =[[0,'b',0,'b',0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [0,'b',0,0,0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  [ 0, 0, 'b', 0, 0, 0, 0, 0, 0, 0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0]];
  var gameNew={ 'player1' :  parseInt(request.body.player1), 'player2' :  parseInt(request.body.player2), 'plateau' : plateauInit, 'tour' : 1}
  game.push(gameNew);
  console.log(game);
  request.session.play=1;
  response.send('playStart');
};
module.exports.SetPlay = function(request, response){
  request.session.play=request.body.play;
  response.send('playSet');
  for(i=0;i<players.length;i++)if(players[i].id==request.session.userId)players[i].play=1;
};
module.exports.SupprimerUnGame = function(request, response){
  var z=-1;
  for(i=0;i<demandesParties.length;i++){
    if(demandesParties[i].toString()==request.body.toString())z=i;
  }
  if(z!=-1)demandesParties.splice(z,1);
  console.log(demandesParties);
  response.send('delete');
};
module.exports.AppliquerDeplacement = function(request, response){
  var temp;
    console.log('modif plateau: ----------------------------------------------')
    for(i=0;i<game.length;i++){
      dep=request.body.depart.split('.');
      arr=request.body.arrive.split('.');
      var xd=dep[0];
      var yd=dep[1];
      var xa=arr[0];
      var ya=arr[1];
      if(game[i].player1==request.session.userId){
        console.log('p1:');
        temp=game[i].plateau[xd][yd];
        console.log(temp);
        game[i].plateau[xd][yd]=0;
        game[i].plateau[xa][ya]=temp;
        if(request.body.victime!=''){
          var v=request.body.victime.split('.');
          game[i].plateau[v[0]][v[1]]=0;
        }
      };
      if(game[i].player2==request.session.userId){
        console.log('p2:');
        temp=game[i].plateau[9-xd][9-yd];
        console.log(temp);
        game[i].plateau[9-xd][9-yd]=0;
        game[i].plateau[9-xa][9-ya]=temp;
        if(request.body.victime!=''){
          var v=request.body.victime.split('.');
          game[i].plateau[9-v[0]][9-v[1]]=0;
        }
      };
    }
    response.send(request.body);
};
module.exports.PasserTour = function(request, response){
  for(i=0;i<game.length;i++){
    if(game[i].player1==request.session.userId){
      if(game[i].tour==1)game[i].tour=2;
      else game[i].tour=1;
    };
    if(game[i].player2==request.session.userId){
      if(game[i].tour==1)game[i].tour=2;
      else game[i].tour=1;
    };
  }
  response.send("passage effectué");
};
