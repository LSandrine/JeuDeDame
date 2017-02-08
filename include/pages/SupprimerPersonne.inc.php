<?php

$personneM= new PersonneManager(new Mypdo());
if(empty($_POST['choix']) && empty($_POST['login'])){

?>
	<h1>Supprimer une personne</h1>
	<form method="post" action="#">
			<label class="labelC">Nom à Supprimer:</label>
			<select name="choix" required>
				<?php
				$personne = $personneM->getPersonnes();
				foreach($personne as $pers){
					echo '<option name="nom" value="'.$pers->getPerLogin().'">' . $pers->getPerLogin() . '</option>';
					 }

			 ?>

		 </select><br/>
<input class="bouton" type="submit" value="Valider">
	 </form>
		 <?php

}else{

	if(empty($_POST['login'])){
		$_SESSION['choix']=$_POST['choix'];
		?>
<form method="post" action="#">
		<label class="labelC">Voulez vous vraiment supprimer ce compte?<br/>Ceci supprimera toutes traces de ce compte dans la base<br/>Par mesure de sécurité, veuillez ressaisir votre Login: <br/></label>
		<input class="champ" type="text" name="login"/><br/>
		<input class="bouton" type="submit" value="Valider">
</form>

<?php
}else{
	if($_POST['login'] == $_SESSION['choix']){
		$personneM->removePersonneByPerNum($personneM->getPersonneNumByLogin($_POST['login']));
		echo '<img src="image/valid.png"/><p>Suppression réussi';
		unset($_SESSION['choix']);
	}else{
		echo '<img src="image/valid.png"/>erreur';
		unset($_SESSION['choix']);
	}
}
}
 ?>
