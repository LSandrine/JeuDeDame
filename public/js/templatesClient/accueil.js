function connexion() {
  var form='<div class="login-form" id="connectForm"><form id="formConnection">'+
  '<div id=tittleConnexion"><p id=tForm>Bienvenue sur notre Jeu de Dame !</p><br/>'+
  '<h2>Merci de bien vouloir vous connecter ou inscrire :</h2><br/></div>'+
  '<table><tr><td>Nom d\'utilisateur : </td><td><input type="text" name="username" id="username" class="champs" /></td></tr>'+
  '<tr><td>Mot de passe : </td><td><input type="password" name="password" id="password" class="champs"/></td></tr>'+
  '<tr><td><input type="button" id="submit" value=" Jouer !" /></td>'+
  '<td><input type="button" id="submit" value=" S\'inscrire" /></td></tr></table>'+
  '</form></div>';
    $('#content').html(form);

  $('body').on('click',"#submit",postConnection);
};

function lobby(){
  var panel='<h1>Lobby</h1>'+
  '<button id="startPartie">commencer partie</button>'+
  '<table>'+'<tr>'+
    '<td><h3>Partie</h3></td>'+
    '<td><h3>Adversaire</h3></td>'+
    '<div id="adversaire">'+
    '<table id="player">'+
    '<tr><th>id</th><th>nom</th><th>statut</th></tr>'+
    '</table>'+
    '</div>'+
  '</tr>'+''+'</table>';
  return panel;
};
