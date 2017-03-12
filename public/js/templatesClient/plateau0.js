function plateau() {
  var plateau='<table class="plateau" id="plateau">';
  for (i = 0; i < 9; i++){
    plateau+='<tr>';
    for (j = 0;j< 9 ; j++){
      if( (i+j) % 2 == 0){
        plateau +='<td><img src="../images/caseClair.jpg" id="'+[i,j]+'" class="case"></td>';
      }else{
        plateau +='<td><img src="../images/caseSombre.jpg" id="'+[i,j]+'" class="case"></td>';
      }
    }
    plateau+='</tr>';
  }
  plateau+= '</table>';
  return plateau;
}
function placement(){
  alert(demarre);

  var TabPions = [[0,1,0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0,1,0],
                  [0,1,0,1,0,1,0,1,0,1],
                  [1,0,1,0,1,0,1,0,1,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,-1,0,-1,0,-1,0,-1,0,-1],
                  [-1,0,-1,0,-1,0,-1,0,-1,0],
                  [0,-1,0,-1,0,-1,0,-1,0,-1],
                  [-1,0,-1,0,-1,0,-1,0,-1,0]];

var pions = '<div id="pions">';
console.log('je passe pars ici');
  for (i = 0; i < 9; i++){
    for (j = 0;j< 9 ; j++){
      if(TabPions[i][j] == 1){
        console.log('je passe par là');
        $("#["+i+","+j+"]").append('<img src="../images/pionsNoir.png" id="'+[i,j]+'" class="pionsNoir">');
        //pions +='<img src="../images/pionsNoir.png" id="'+[i,j]+'" class="pionsNoir">';
      }
      else {
        if (TabPions[i][j] < 0){
          pions +='coucou'//'<img src="../images/pionsBlanc.png" id="'+[i,j]+'" class="pionsBlanc">';
        }
        else{
          pions += '<h1> ERREUR </h1>';
        }
      }
    }
  }
  pions += '</div>';
  return pions;

}
