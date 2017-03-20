/*-------------------------------session--------------------------------------*/
function postConnection() {
  $.ajax({
          url:'/controller/postConnection',
          data:$('#formConnection').serialize(),
          success:function(data){
            if(data=='accept'){

              lobby();
              //envoiPlayer();
              updateSession();
              //ListPlayers();
            };
          },
          type:"post",
          error:function(data){alert("error");}
        });
};
function getSession() {
  var session;
    $.ajax({
            url:"/controller/getSession",
            success:function(data){
              session=data;
            },
            type:"get",
            error:function(data){alert("error");},
            async:false
          });
          return session;
};
/*-------------------------------message--------------------------------------*/
function envoiDeMessage() {
  $.ajax({
          url:'/controller/envoiDeMessage',
          data:$('#messGlobal').serialize(),
          success:function(data){$('#message').val('');getMessages();},
          type:"post",
          error:function(data){alert("error");}
        });
};
function getMessagesList() {
    $.ajax({
            url:"/controller/getMessages",
            success:function(data){
              if(data.length>0){
                //if(data.length!=$("#tchat > div").length && $('#tchat div:last-child').text()!=data[data.length-1]){
                  messagesListVue(data);
                  getMessages();
                  console.log('up message');
                //}
              }
            },
            type:"get",
            error:function(data){alert("error");},
            async:false
          });
};
/*-------------------------------player---------------------------------------*/
function getPlayers() {
  if(session.userId){
    $.ajax({
            url:"/controller/getPlayers",
            success:function(data){
              listDePlayers(data);getPropose();
            },
            type:"get",
            error:function(data){alert("error");},
            async:false
          });
  }
};
function getPropose() {
  if(session.userId){
    $.ajax({
            url:"/controller/getPropose",
            success:function(data){decision(data);},
            type:"get",
            error:function(data){alert("error");},
            async:false
          });
  }
};
function getGames() {
  if(session.userId){
    $.ajax({
            url:"/controller/getGames",
            success:function(data){
              playGame(data);
            },
            type:"get",
            error:function(data){alert("error");},
            async:false
          });
  }
};

function proposerUnGame(idplayers){
  var dataDonnees='players='+session.userName+'&playersId='+session.userId+'&adversaire='+idplayers;
  $.ajax({
          url:"/controller/proposerUnGame",
          data:dataDonnees,
          success:function(data){
            console.log(data);
          },
          type:"post",
          error:function(data){alert("error");}
        });
};
function supprimerUnGame(game){
  var dataDonnees='players='+game.players+'&playersId='+game.playersId+'&adversaire='+game.adversaire;
  $.ajax({
          url:"/controller/supprimerUnGame",
          data:dataDonnees,
          success:function(data){
            console.log(data);
          },
          type:"post",
          error:function(data){alert("error");}
        });
};
function decision(propose){
  if(propose.length>0)for(var i=0; i<propose.length;i++){
      if(propose[i].adversaire==session.userId){
        var jeu=propose[i];
        supprimerUnGame(propose[i]);
        if(confirm('Acceptez vous de jouez avec '+propose[i].players+" ! ")){
          startPartie(propose[i]);
        }
        else console.log('refuse');
      }
    }
};
function startPartie(game){
  var dataDonnees='player1='+game.playersId+'&player2='+game.adversaire;
  $.ajax({
          url:"/controller/acceptGame",
          data:dataDonnees,
          success:function(data){
            console.log(data);
            getGames();
          },
          type:"post",
          error:function(data){alert("error");}
        });
};
function playGame(data){
  if(data.length>0)for(var i=0; i<data.length;i++){
      if(data[0].player1==session.userId || data[0].player2==session.userId ){
        partieEnCours=data[i];
        setPlay();
        session.play=1;
        plateau();
      }
    }
}
function setPlay(){
  var dataDonnees='play=1';
  $.ajax({
          url:"/controller/setPlay",
          data:dataDonnees,
          success:function(data){
            console.log(data);
          },
          type:"post",
          error:function(data){alert("error");}
        });
};
