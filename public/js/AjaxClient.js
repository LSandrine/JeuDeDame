function postConnection() {
  $.ajax({
          url:'/controller/postConnection',
          data:$('#formConnection').serialize(),
          success:function(data){
            if(data=='accept'){
              controllerLobby();
            };

          },
          type:"post",
          error:function(data){alert("error");}
        });
}
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
}
