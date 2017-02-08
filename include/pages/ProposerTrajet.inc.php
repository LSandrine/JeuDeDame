<h1>Proposer un trajet</h1>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
	  $( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
  } );
  </script>
<?php 

if(!isset($_SESSION['connected']))header('Location: ./index.php?page=0');

else{
	
	
	if(!isset($_POST['vilDep']) && !isset($_SESSION['form1'])){
		$pdo=new Mypdo();
	$proposeM= new ProposeManager($pdo);
	$propose=$proposeM ->getAllVillePropose();
		?>
		<form id="proposeParcours" name="proposeParcours" action="#" method="POST">
			<b>Ville de départ:</b> <SELECT name="vilDep" class="champ" onchange='javascript:document.getElementById("proposeParcours").submit()'>
	 <?php
	 echo '<option name="menu" value="">Ville:</option>';
	 foreach ($propose as $num=>$nom){
	  echo '<option name="vilDep1" value="'.$num.'">'.$nom.'</option>';
	 }
	 
	 ?>
			</SELECT>		

		</form>
		
	<?php
	$_SESSION['form1']=1;
	}else if(!isset($_POST['valider']) && !isset($_SESSION['form2'])){ 
		//Afficher la ville de départ
		$db=new Mypdo();
		$villeM=new VilleManager($db);
		$ville=$villeM->getNomVille($_POST['vilDep']);
		
		//liste des ville d'arrivé
		$dbp=new Mypdo();
		$villeM=new VilleManager($dbp);
		$tabVilleArr=$villeM->getAllParcoursArr($_POST['vilDep']);
		
		$_SESSION['vilDep']=$_POST['vilDep'];
		
		
		


	?>
		<form name="ajoutpropose"  action="#" method="POST">
		<table class="centrerBlock2">
			<tr>
				<td>
<?php	echo "<b>Ville de départ:".$ville->getnomVille()."</b>" ?></td>
<td> <b>Ville d'arrivé: </b><SELECT name="vilArr" class="champ">
 <?php 
			 foreach ($tabVilleArr as $par){
		echo" <option  value=\"". $par->getnumVille() ."\">". $par->getnomVille()."</option>";
			 }
 ?>
		</SELECT><br></td>
		</tr><tr>
<?php	echo "<td> <b>Date de départ:</b><input class=\"champ\" id=\"datepicker\" type=\"date\" name=\"pro_date\" required=\"required\" value=\"".date("Y-m-j")."\"> </td>"?>
<?php	echo "<td> <b>Heure de départ</b><input class=\"champ\" type=\"datetime\"  name=\"pro_time\" required=\"required\" value=\"".date("H:i:s")."\"><br> </td>" ?>
		<td><b>Nombre de place</b><input class="champ" type="text" pattern="[0-9]{1,3}" name="pro_place" required="required"><br></td>
		</tr>
		</table>
		<input type="submit" name="valider" class="bouton" value="valider">
		
		</form>
		<?php
		
		$_SESSION['form2']=1;
		}else {
			$_SESSION['vilArr']=$_POST['vilArr'];
			$dbpa=new Mypdo();
			$parcoursM1=new ParcoursManager($dbpa);
			$_SESSION['sens']=$parcoursM1->testSens($_SESSION['vilDep'],$_SESSION['vilArr']);
			$parcoursM2=new ParcoursManager($dbpa);
			$_SESSION['par_num']=$parcoursM2->getParNumPro($_SESSION['vilDep'],$_SESSION['vilArr']);
			

			$db=new Mypdo();
			$proposeM=new ProposeManager($db);
			$propose= new Propose($_POST);
			$proposeM->ajoutPropose($propose,(int)$_SESSION['sens'],(int)$_SESSION['par_num'],(int)$_SESSION['per_num']);

			echo "<img src=\"image/valid.png\"/>La proposition de trajet a était ajouté";
			unset($_SESSION['vilArr']);
			unset($_SESSION['par_num']);
			unset($_SESSION['sens']);
			unset($_SESSION['form2']);
			unset($_SESSION['form1']);
			unset($_SESSION['vilDep']);
			

	}
}

