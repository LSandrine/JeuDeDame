function plateau() {
  var TabPions = [[0,'b',0,'b',0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [0,'b',0,'b',0,'b',0,'b',0,'b'],
                  ['b',0,'b',0,'b',0,'b',0,'b',0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0],
                  [0,'n',0,'n',0,'n',0,'n',0,'n'],
                  ['n',0,'n',0,'n',0,'n',0,'n',0]];

  var plateau='<table class="plateau" id="plateau">';
  for (i = 0; i < 10; i++){
    plateau+='<tr>';
    for (j = 0;j< 10 ; j++){
      ctn=TabPions[i][j];
      if( (i+j) % 2 == 0){
        plateau +='<td class="clair case" id="'+i+'.'+j+'">';
      }else{
        plateau +='<td class="fonce case" id="'+i+'.'+j+'" >';
      }
      if(ctn == 'n'){
          plateau+='<img src="../images/pionsBlanc.jpg" class="pionsNoir pion">';
      }
      else if(ctn== "b"){
        plateau+='<img src="../images/pionsBlanc.jpg" class="pionsBlanc pion">'
      }
      plateau+='</td>';
    }
    plateau+='</tr>';
  }
  plateau+= '</table>';
  return plateau;
}
