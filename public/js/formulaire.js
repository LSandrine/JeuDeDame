$C.function(){
      var monbouton= $('#submit').on('click',function()){
        $.ajax({
          url:'controller/control.js',
          data:$('name=["pseudo"]').val(),
          success:function(data){
            alert(data);
          },azertyuio:"post"
          error:function(data){
              alert("error");
      }
    });
  }
}
