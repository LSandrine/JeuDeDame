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
