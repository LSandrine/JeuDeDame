<?php

$PersonneM= new PersonneManager(new Mypdo());
 	if(empty($_POST['choix']) && empty($_POST['nom'])){

 ?>
    <h1>Modifier une personne</h1>

    <form method="post" action="#">
        <label class="labelC">Nom à modifier:</label>
        <select name="choix" required>
          <?php

          $personne = $PersonneM->getPersonnes();
          foreach($personne as $pers){
            echo '<option value="'.$pers->getPerNum().'">' . $pers->getPerLogin() . '</option>';
             }
         ?>
       </select><br/>
      <input  class="bouton" type="submit" value="Valider">
      </form>
       <?php
  }else{
    if(empty($_POST['nom'])){
         $modif = $PersonneM->getPersonneByNum($_POST['choix']);
         ?>
      <form method="post" action="#">
 			<table class="nobordered centrerBlock">
 			<tr>
 				<td><label class="labelC">Nom</label></td>
 				<td><input type="text" name="nom" class="champ" value="<?php echo $modif->getPerNom();?>" required/></td>
 				<td><label class="labelC">Prénom</label></td>
 				<td><input type="text" name="prenom" class="champ" value="<?php echo $modif->getPerPrenom();?>" required/></td>
 			</tr>
 			<tr>
 				<td><label class="labelC">Téléphone</label></td>
 				<td><input type="text" name="tel" class="champ" value="<?php echo $modif->getPerTel();?>" required/></td>
 				<td><label class="labelC">Mail</label></td>
 				<td><input type="email" name="mail" class="champ" value="<?php echo $modif->getPerMail();?>" required/></td>
 			</tr>
 			<tr>
 				<td><label class="labelC">Login</label></td>
 				<td><input type="text" name="login" class="champ" value="<?php echo $modif->getPerLogin();?>" required/></td>
 				<td><label class="labelC">Mots de passe</label></td>
 				<td><input type="password" name="password" class="champ" required/></td>
 			</tr>
 		</table>
 		<input  class="bouton" type="submit" value="Valider">
 		</form>


<?php
  $_SESSION['nom']=$modif;
  }else{
		$crypt = new PersonneManager(new Mypdo());
		$_SESSION['nom']->setPerNom($_POST['nom']);
		$_SESSION['nom']->setPerPrenom($_POST['prenom']);
		$_SESSION['nom']->setPerMail($_POST['mail']);
		$_SESSION['nom']->setPerTel($_POST['tel']);
		$_SESSION['nom']->setPerLogin($_POST['login']);
		$_SESSION['nom']->setPerPassword($crypt->grainDeSel($_POST['password']));

		if($PersonneM->updatePersonne($_SESSION['nom'])){
			echo '<img src="image/valid.png"/><p>Modification enregistrée';
			}else{
			echo '<img src="image/valid.png"/>erreur';
			}
 }
 }
  ?>
