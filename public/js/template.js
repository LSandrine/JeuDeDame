function connexion() {
  var form='<div class="login-form" id="connectForm"><form id="formConnection">'+
  '<div id=tittleConnexion"><p>Bienvenue sur notre Jeu de Dame !</p><br/>'+
  '<h2>Merci de bien vouloir vous connecter ou inscrire :</h2><br/></div>'+
  '<table><tr><td>Nom d\'utilisateur : </td><td><input type="text" name="username" id="username" class="champs" /></td></tr>'+
  '<tr><td>Mot de passe : </td><td><input type="password" name="password" id="password" class="champs"/></td></tr>'+
  '<tr><td><input type="button" id="submit" value=" Jouer !" /></td>'+
  '<td><input type="button" id="submit" value=" S\'inscrire" /></td></tr></table>'+
  '</form></div>';
    $('#content').html(form);
};

function lobby(){
  updateSession();
  $('title').text('lobby jeu de dame');
  var panel='<h1>Lobby</h1>'+
  '<button id="startPartie">commencer partie</button>'+
  '<h3>Partie</h3>'+
  '<h4>Adversaire</h4>'+
    '<div id="adversaire"><table id="player">'+
    '<tr><th>id</th><th>nom</th><th>statut</th></tr>'+
    '</table></div>';
  $('#content').html(panel);
};

function plateau() {
  $('title').text('Plateau du jeu');
  var TabPions = [[0,'b',0,'b',0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [0,'b',0,'b',0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0]];

  var plateau='<table class="plateau" id="plateau">';
  for (i = 0; i < 10; i++){
    plateau+='<tr>';
    for (j = 0;j< 10 ; j++){
      ctn=TabPions[i][j];
      if( (i+j) % 2 == 0)plateau +='<td class="clair case" id="'+i+'.'+j+'">';
      else plateau +='<td class="fonce case" id="'+i+'.'+j+'" >';
      if(ctn == 'n')plateau+='<img src="../images/pionRouge.png" class="pionsNoir pion">';
      else if(ctn== "b")plateau+='<img src="../images/pionBlanc.png" class="pionsBlanc pion">';
      plateau+='</td>';
    }plateau+='</tr>';
  }plateau+= '</table>';
  $('#content').html(plateau);
}
