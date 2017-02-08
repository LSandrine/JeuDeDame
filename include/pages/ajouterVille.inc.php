<h1>Ajouter une ville</h1>
<?php
if(!isset($_POST['valider'])){
	?>
	<form name="ajoutVille" action="#" method="POST">
		<b>Nom:</b> <input type="text" id="ville" class="champ" name="ville">
		<input type="submit" name="valider" class="bouton" value="valider">
	</form>
<?php
}else{
	$db=new Mypdo();
	$villeM=new VilleManager($db);
	$villeM->ajoutVille($_POST['ville']);
	echo "<img src=\"image/valid.png\"/> La ville\" <b>".$_POST['ville']."</b>\" a été ajoutée";
}