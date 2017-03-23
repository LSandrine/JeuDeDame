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
  if( partieEnCours.player1==session.userId){
    for (i = 0; i < 10; i++){
      plateau+='<tr>';
      for (j = 0;j< 10 ; j++){
        ctn=TabPions[i][j];
        if( (i+j) % 2 == 0)plateau +='<td class="drop2" id="'+i+'.'+j+'">';// id.old = ""
        else plateau +='<td class="drop1" id="'+i+'.'+j+'" >';//"'+i+'.'+j+'"
        if(ctn == 'n'){
          plateau+='<img src="../images/pionRouge.png" ';
          if(partieEnCours.tour==1)plateau +='class="drag">';//class.old =pionsNoir
          else plateau+='class="rouge">';
        }
        else if(ctn== "b")plateau +='<img src="../images/pionBlanc.png" class="blanc">';//class.old =pionsBlanc
        plateau+='</td>';
      }plateau+='</tr>';
    }
  }else{
    for (i = 0; i < 10; i++){
      plateau+='<tr>';
      for (j = 0;j< 10 ; j++){
        ctn=TabPions[9-i][9-j];
        if( (i+j) % 2 == 0)plateau +='<td class="drop2" id="'+i+'.'+j+'">';// id.old = ""
        else plateau +='<td class="drop1" id="'+i+'.'+j+'" >';//"'+i+'.'+j+'"
        if(ctn == 'b'){
          plateau+='<img src="../images/pionBlanc.png" ';//class.old =pionsNoir
          if(partieEnCours.tour==2)plateau +='class="drag">';//class.old =pionsNoir
          else plateau +='class="blanc">';
        }
        else if(ctn== "n")plateau+='<img src="../images/pionRouge.png" class="blanc">';//class.old =pionsBlanc
        plateau+='</td>';
      }plateau+='</tr>';
    }

  }plateau+= '</table>';
  $('#content').html(plateau);
  console.log(session.mange);
  if(session.mange==0)Deplacement();
  else {
    coord=session.mange.split('.');
    var deplacer = 0;
    var cg=(coord[0]-1)+'.'+(coord[1]-1);
    var cgg=(coord[0]-2)+'.'+(coord[1]-2);
    var cd=(coord[0]-1)+'.'+(coord[1]-(-1));
    var cdd=(coord[0]-2)+'.'+(coord[1]-(-2));
    var ag=(coord[0]-(-1))+'.'+(coord[1]-1);
    var agg=(coord[0]-(-2))+'.'+(coord[1]-2);
    var ad=(coord[0]-(-1))+'.'+(coord[1]-(-1));
    var add=(coord[0]-(-2))+'.'+(coord[1]-2);
    if(document.getElementById(cg)){if(document.getElementById(cg).innerHTML!=''){if(document.getElementById(cg).firstChild.className!="drag"){
        console.log('case gauche');
        if(document.getElementById(cgg)){if(document.getElementById(cgg).innerHTML!=''){
            console.log('gauche impossible');
          }else{
            deplacer=1;
            console.log('gauche possible');
          }}
      }}}
    if(document.getElementById(cd)){if(document.getElementById(cd).innerHTML!=''){if(document.getElementById(cd).firstChild.className!="drag"){
      console.log('case droite');
      if(document.getElementById(cdd)){if(document.getElementById(cdd).innerHTML!=''){
          console.log('droite impossible');
        }else{
          console.log('droite possible');
          deplacer=1;
        }}
    }}}
      if(document.getElementById(ag)){if(document.getElementById(ag).innerHTML!=''){if(document.getElementById(ag).firstChild.className!="drag"){
          console.log('case arrire gauche');
          if(document.getElementById(agg)){if(document.getElementById(agg).innerHTML!=''){
              console.log('arriere gauche impossible');
            }else{
              deplacer=1;
              console.log('arriere gauche possible');
            }}
        }}}
      if(document.getElementById(ad)){if(document.getElementById(ad).innerHTML!=''){if(document.getElementById(ad).firstChild.className!="drag"){
          console.log('case arriere droite');
          if(document.getElementById(add)){if(document.getElementById(add).innerHTML!=''){
              console.log('arriere droite impossible');
            }else{
              console.log('arriere droite possible');
              deplacer=1;
            }}
        }}}
    if (deplacer==1)Deplacement2();
    else{
      passerTour();
      session.mange=0;
    }
  }
};

function Deplacement2(){
  console.log('dep2');
  $('.drag').draggable({
    containment: '.drop',
    stack: '.drop',
    cursor: 'move',
    revert: "invalid"
  } );
  $(".drop1").droppable({
    drop : function (event, ui){
      var depart = ui.draggable["0"].parentNode.id;
      if (depart== session.mange){
        var arrive = $(this).attr('id');
        var Iarrive= arrive.split('.');
        console.log(Iarrive[1]+","+Iarrive[0]);
        var Idepart= depart.split('.');
        console.log(Idepart[1]+","+Idepart[0]);
        var idAll = [];
        idAll.push(Iarrive[1]);
        idAll.push(Iarrive[0]);
        idAll.push(Idepart[1]);
        idAll.push(Idepart[0]);
        console.log(idAll);
        if(caseLibre(arrive)){
          var x=Idepart[0]-Iarrive[0];
          var y=Idepart[1]-Iarrive[1];
          if(y<0)y=-y;
          if(y==2 && x==2){
            mangePion(arrive,depart,idAll);
          }else if(y==2 && x==-2){
            mangePion(arrive,depart,idAll);
          }else Revert(depart,arrive);
        }else Revert(depart,arrive);
      }
    },
  });
};
/* droppable*/
function Deplacement(){
  $('.drag').draggable({
    containment: '.drop',
    stack: '.drop',
    cursor: 'move',
    revert: "invalid"
  } );


  $(".drop1").droppable({


    drop : function (event, ui){
      var depart = ui.draggable["0"].parentNode.id;
      console.log(ui);
      var arrive = $(this).attr('id');
      var Iarrive= arrive.split('.');
      console.log(Iarrive[1]+","+Iarrive[0]);
      var Idepart= depart.split('.');
      console.log(Idepart[1]+","+Idepart[0]);
      var idAll = [];
      idAll.push(Iarrive[1]);
      idAll.push(Iarrive[0]);
      idAll.push(Idepart[1]);
      idAll.push(Idepart[0]);
      console.log(idAll);
      if(caseLibre(arrive)){
        var x=Idepart[0]-Iarrive[0];
        var y=Idepart[1]-Iarrive[1];
        if(y<0)y=-y;
        if(y==1 && x==1) {
          deplacePion(arrive,depart);
        }else if(y==2 && x==2){
          mangePion(arrive,depart,idAll);
        }else Revert(depart,arrive);
      }else Revert(depart,arrive);
    },
  });
};



function deplacePion(arrive,depart, idAll){
  tableDeplacement = [];
  document.getElementById(depart).innerHTML='';
  if(partieEnCours.player1=session.userId)document.getElementById(arrive).innerHTML="<img src=\"../images/pionRouge.png\" class=\"drag\">";
  else document.getElementById(arrive).innerHTML="<img src=\"../images/pionBlanc.png\" class=\"drag\">";
  AppliquerDeplacement([depart, arrive, '']);
  passerTour();
}
function Revert(depart,arrive){
  if(partieEnCours.player1=session.userId)document.getElementById(depart).innerHTML="<img src=\"../images/pionRouge.png\" class=\"drag\">";
  else document.getElementById(depart).innerHTML="<img src=\"../images/pionBlanc.png\" class=\"drag\">";
  getGames();
}


function caseLibre(arrive){
  if(document.getElementById(arrive).innerHTML==""){
    console.log('libre au max');
    return true;
  }else return false;
}

function mangePion(arrive,depart,idAll){
  var x;

  if(idAll[1]<idAll[3]){
    x= idAll[1]-(-1);
  }else{
    x= idAll[1]-1;
  }
  console.log(x);
  var y;

  if(idAll[2]-idAll[0]<0){
    y = idAll[2]-(-1);
  }else{
    y = idAll[2]-1;
  }
  var victime = x+"."+y;
  console.log(victime);
  if (document.getElementById(victime).innerHTML== ""){
    console.log("pas de victime");
    Revert(depart,arrive);
  }else{
    if(document.getElementById(victime).firstChild.className=="blanc"){
      console.log("victime");
      document.getElementById(victime).innerHTML='';
      document.getElementById(depart).innerHTML='';
      document.getElementById(arrive).innerHTML="<img src=\"../images/pionRouge.png\" class=\"drag\">";
      AppliquerDeplacement([depart,arrive,victime]);
      session.mange=arrive;
    }else{
      Revert(depart,arrive);
    }
  }

}
