<h1>Ajouter un parcours</h1>
<?php


if(!isset($_POST['valider'])){
	$pdo=new Mypdo();
$villeM= new VilleManager($pdo);
$villes=$villeM ->getAllVille();
	?>
	<form name="ajoutParcours" action="#" method="POST">
		<b>Ville 1: </b><SELECT name="vil_num1" class="champ">
 <?php
 foreach ($villes as $par){
  echo '<option name="vil_num1" value="'.$par->getnumVille().'">'.$par->getnomVille().'</option>';
 }
 ?>
				</SELECT>
		<b>Ville 2:</b> <SELECT name="vil_num2" class="champ">
 <?php
 foreach ($villes as $par){
  echo '<option name="vil_num2"  value="'.$par->getnumVille().'">'.$par->getnomVille().'</option>';
 }
 ?>
				</SELECT>
		<b>Nombre de kilomètre(s):</b><input type="text" id="parcours" class="champ" name="par_km">
		<input type="submit" name="valider" class="bouton" value="valider">
	</form>
<?php
}else{
	$db=new Mypdo();
	if($_POST['vil_num2']==$_POST['vil_num1'])echo"<img src=\"image/erreur.png\"/>On ne peut pas avoir un parcours sur la même ville";
	else{
		$parcoursM=new ParcoursManager($db);
		$parcours= new Parcours($_POST);
		$parcoursM->ajoutParcours($parcours);
		echo "Le parcours été ajoutée";
	}
}

