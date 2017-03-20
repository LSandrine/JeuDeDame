function connexion() {
  var form='<div class="login-form" id="connectForm"><form id="formConnection">'+
  '<div id=tittleConnexion"><p>Bienvenue sur notre Jeu de Dame !</p><br/>'+
  '<h2>Merci de bien vouloir vous connecter ou inscrire :</h2><br/></div>'+
  '<table><tr><td>Nom d\'utilisateur : </td><td><input type="text" name="username" id="username" class="champs" /></td></tr>'+
  '<tr><td>Mot de passe : </td><td><input type="password" name="password" id="password" class="champs"/></td></tr>'+
  '<tr><td></td><td><input type="button" id="submit" value=" Jouer !" /><span>         </span><input type="button" id="submit" value=" S\'inscrire" /></td></tr></table>'+
  '</form></div>';
    $('#content').html(form);
};

function lobby(){
  updateSession();
  $('title').text('lobby jeu de dame');
  var panel='<button>Déconnexion</button><h1>Lobby</h1>'+
  '<button id="startPartie">commencer partie</button>'+
  '<h3>Partie</h3>'+
  '<h4>Adversaire</h4>'+
    '<div id="adversaire"><table id="player">'+
    '<tr><th>id</th><th>nom</th><th>statut</th></tr>'+
    '</table></div>';
  $('#content').html(panel);
};


function getMessages() {
  messages = document.getElementById('tchat');
  messages.scrollTop = messages.scrollHeight;
}
function messagesListVue(messages){
  var html = '';
  for (var i = 0; i < messages.length; i++)
    html += '<div class="line">'+messages[i]+'</div>';
    $('#tchat').html(html);
}
function listDePlayers(players){
  var html = '<tr><th>id</th><th>nom</th><th>statut</th></tr>';
  for (var i = 0; i < players.length; i++){
    var statut='<button class="playWitch" id="'+players[i].id+'">Proposer jouer</button>';
    if(players[i].play==1)statut="partie en cours";
    if(players[i].id==session.userId)statut="vous";
    html += '<tr><th>'+players[i].id+'</th><th>'+players[i].login+'</th><th>'+statut+'</th></tr>';
  }$('#player').html(html);
}

function plateau() {
  $('title').text('Plateau du jeu');
  console.log(partieEnCours);
  var TabPions = partieEnCours.plateau;
  var plateau='<table class="plateau" id="plateau">';
  for (i = 0; i < 10; i++){
    plateau+='<tr>';
    for (j = 0;j< 10 ; j++){
      ctn=TabPions[i][j];
      if( (i+j) % 2 == 0)plateau +='<td class="drop2" id="'+i+'.'+j+'">';// id.old = ""
      else plateau +='<td class="drop1" id="'+i+'.'+j+'" >';//"'+i+'.'+j+'"
      if(ctn == 'n')plateau+='<img src="../images/pionRouge.png" class="drag">';//class.old =pionsNoir
      else if(ctn== "b")plateau+='<img src="../images/pionBlanc.png" class="drag">';//class.old =pionsBlanc
      plateau+='</td>';
    }plateau+='</tr>';
  }plateau+= '</table>';
  $('#content').html(plateau);
  Deplacement();
};



/* droppable*/
function Deplacement(){
  alert('je passe dans deplacement');
  $('.drag').draggable({
      containment: '.drop',
      stack: '.drop',
      cursor: 'move',
      revert: true
    } );

          alert('je passe dans draggable');

  $(".drop1").droppable({

      over:function (event, ui){
        var depart = ui.draggable.attr('id');
        var arrive = $(this).attr('id');
        var Iarrive= arrive.split('.');
        console.log(Iarrive[1]+","+Iarrive[0]);
        var Idepart= depart.split('.');
        console.log(Idepart[1]+","+Idepart[0]); ////////////////////////////////////////A CONTINUER
        //return bool
      },
      drop : finDeplacement()
  });

      alert('je passe dans droppable');

};





function finDeplacement(){
  console.log("arrivé");

  alert('je passe dans findeplacement');

  var idPapa = $(this).attr('id');

  //$(this).append("<img src=\"../images/pionRouge.png\" class=\"drag\" id= \"+"idPapa"+\">")
  alert('Action terminée !');
  var caseDeb = sessionStorage.getItem("casedepart");

};


/**/
