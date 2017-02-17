function connexion() {
  var form='<div class="login-form"><form id="formConnection"><p>'+
    'Nom d\'utilisateur : <input type="text" id="username" />'+
  'Mot de passe : <input type="password" id="password" />'+
  '<span><input type="radio" name="typePartie" value="Solo" checked>Solo</span>'+
  '<span><input type="radio" name="typePartie" value="Multi">Multi</span>'+
  '<br><input type="button" id="submit" value=" Jouer !" />'+
  '</p>'+
  '</form></div>';
    $('#contenu').html(form);

  $('body').on('click',"#submit",postConnection);
}

function lobby(){
  var panel='<h1>Lobby</h1>'+
  '<button id="startPartie">commencer partie</button>'+
  '<table>'+'<tr>'+
    '<td><h3>Partie</h3></td>'+
    '<td><h3>Adversaire</h3></td>'+
  '</tr>'+''+'</table>';
  return panel;
}
