function postConnection() {
  $.ajax({
          url:'/controller/postConnection',
          data:$('#formConnection').serialize(),
          success:function(data){
            if(data=='ok'){
              $('#contenu').html(lobby());
            };

          },
          type:"post",
          error:function(data){alert("error");}
        });
}
