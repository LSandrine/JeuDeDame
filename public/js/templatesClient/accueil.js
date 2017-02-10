function connexion() {
  var form='<form id="formConnection"><p>'
    'Nom d\'utilisateur : <input type="text" id="username" />'+
  ' Mot de passe : <input type="password" id="password" />'+
  '</p>' + '<input type="radio" name="type" value="Solo" checked>'+
  '<input type="radio" name="type" value="Multi">' +
  '<input type="button" id="submit" value=" Jouer ! "/>'+
  +'</form>';
    $('#contenu').html(form);

  $('body').on('click',"#submit",postConnection)
}

function lobby(){
  var panel='<h1>Lobby</h1>'+'
<table>'+'
	<tr>'+'
		<td><h3>Partie</h3></td>'+'
		<td><h3>Adversaire</h3></td>'+'
	</tr>'+'

	'+'
</table>';

}
