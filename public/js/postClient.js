function postConnection() {
  $.ajax({
          url:'/controller/postConnection',
          data:$('#formConnection').serialize(),
          success:function(data){
            if(data=='ok'){
              controllerLobby();
            };

          },
          type:"post",
          error:function(data){alert("error");}
        });
}
