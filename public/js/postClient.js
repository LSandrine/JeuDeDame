function postConnection() {
  alert("coucou");
  $.ajax({
          url:'/controller/postConnection',
          data:$("#formConnection").serialize(),
          success:function(data){alert(data);},
          type:"post",
          error:function(data){alert("error");}
        });
}
