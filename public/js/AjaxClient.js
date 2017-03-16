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
                if(data.length!=$("#tchat > div").length && $('#tchat div:last-child').text()!=data[data.length-1]){
                  messagesListVue(data);
                  getMessages();
                  console.log('up message');
                }
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
            success:function(data){listDePlayers(data);},
            type:"get",
            error:function(data){alert("error");},
            async:false
          });
  }
};
