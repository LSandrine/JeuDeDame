function connexion() {
  var form='<form id="formConnection"><p>'+
    'Nom d\'utilisateur : <input type="text" id="username" />'+
  ' Mot de passe : <input type="password" id="password" />'+
  '<input type="button" id="submit" value="Se connecter !" />'+
  '</p></form>';
    $('#contenu').html(form);

  $('body').on('click',"#submit",postConnection)
}
$(document).ready(function(){
  connexion();
});


function postConnection() {
  $.ajax({
          url:'controller/postConnection',
          data:$('#formConnection').serialize(),
          success:function(data){alert(data);},
          type:"post",
          error:function(data){alert("error");}
        });
}
