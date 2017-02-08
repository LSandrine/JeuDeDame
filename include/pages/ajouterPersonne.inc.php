<?php


	$cryptage = new PersonneManager(new Mypdo());

	if(!empty($_POST)){
		$PersonneManager = new PersonneManager(new Mypdo());
		if(!empty($_POST['login'])){
			if($PersonneManager->verifLogin($_POST['login']) == 1){
				unset($_POST);
				echo '<div class="centrerBlock">
									<img src="image/erreur.png"/><p>Ce Login existe déjà! Veuillez en saisir un nouveau.</p>
							</div>';
			
			}else if($PersonneManager->verifMail($_POST['mail']) == 2){
				unset($_POST);
				echo '<div class="centrerBlock">
									<img src="image/erreur.png"/><p>Email déjà existant ! Veuillez en saisir un nouveau.</p>
							</div>';
			}
		}
	}

	if(empty($_POST)){
?>
	<h1>Ajouter une personne</h1>
		<form method="post" action="#">
			<table class="nobordered centrerBlock">
			<tr>
				<td><label class="labelC">Nom</label></td>
				<td><input type="text" name="nom" class="champ" required/></td>
				<td><label class="labelC">Prénom</label></td>
				<td><input type="text" name="prenom" class="champ" required/></td>
			</tr>
			<tr>
				<td><label class="labelC">Téléphone</label></td>
				<td><input type="text" name="tel" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" class="champ" required/></td>
				<td><label class="labelC">Mail</label></td>
				<td><input type="email" name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,5}$" class="champ" required/></td>
			</tr>
			<tr>
				<td><label class="labelC">Login</label></td>
				<td><input type="text" name="login" class="champ" required/></td>
				<td><label class="labelC">Mots de passe</label></td>
				<td><input type="password" name="password" class="champ" required/></td>
			</tr>
		</table>
		<label class="labelC">Catégorie:</label>
		<input  class="labelC" type="radio" id="etudiant" value="etudiant" name="categorie" required/>
		<label for="etudiant">Etudiant</label>
		<input  class="labelC" type="radio" value="personnel" id="personnel" name="categorie" required/>
		<label for="personnel">Personnel</label><br/><br/>
		<input  class="bouton" type="submit" value="Valider">
		</form>
<?php
 }else{
	 if($_POST['categorie'] === 'etudiant'){
		 if(empty($_POST['annee']) || empty($_POST['departements'])){
		 ?>
				 <h1>Ajouter un étudiant</h1>
				 <form method="post" action="#">
						 <label class="labelC">Année :</label>
						 <select name="annee" class="champ" required>
							 <?php
							 		$divmanag= new DivisionManager(new Mypdo());
									$divisions = $divmanag->getDivisions();
									foreach($divisions as $div){
										echo '<option value="'.$div->getDivNum().'">' . $div->getDivNom() . '</option>';
									}
							  ?>
						 </select><br/>
						 <label class="labelC">Département</label>
						 <select name="departements" class="champ" required>
							 <?php
								 $depmanag = new DepartementManager(new Mypdo());
								 $departements = $depmanag->getDepartements();
								 foreach($departements as $dep){
									 echo '<option value="'.$dep->getDepNum().'">' . $dep->getDepNom() . '</option>';
								 }
							  ?>
						 </select><br/>
						 <input type="hidden" name="password" value="<?php echo $cryptage->grainDeSel($_POST['password']); ?>"/>
						 <input type="hidden" name="categorie" value="<?php echo $_POST['categorie']; ?>"/>
						 <input type="hidden" name="login" value="<?php echo $_POST['login']; ?>"/>
						 <input type="hidden" name="mail" value="<?php echo $_POST['mail']; ?>"/>
						 <input type="hidden" name="tel" value="<?php echo $_POST['tel']; ?>"/>
						 <input type="hidden" name="nom" value="<?php echo $_POST['nom']; ?>"/>
						 <input type="hidden" name="prenom" value="<?php echo $_POST['prenom']; ?>"/>
						 <input class="bouton" type="submit" value="Valider">
				 </form>
		 <?php
	 		}else{
					echo '<h1>Ajouter un étudiant</h1>';
					
					$etudiant = new Etudiant(
						array(
							'per_nom'=>$_POST['nom'],
							'per_prenom'=>$_POST['prenom'],
							'per_tel'=>$_POST['tel'],
							'per_mail'=>$_POST['mail'],
							'per_login'=>$_POST['login'],
							'per_pwd'=>$_POST['password'],
							'dep_num'=>$_POST['departements'],
							'div_num'=>$_POST['annee']
						)
					);
					$etudmanag = new EtudiantManager(new Mypdo());
					if($etudmanag->addEtudiant($etudiant)){
							echo '<img src="image/valid.png"/>l\'étudiant a était ajouté';
					}else{
						echo '<img src="image/valid.png"/>erreur';
					}
	 		}
	 }else{
		 if(empty($_POST['fonction']) || empty($_POST['tel_prof'])){
		 ?>
				 <h1>Ajouter un salarié</h1>
				 <form method="post" action="#">
						 <label class="labelC">Téléphone professionnel:</label>
						 <input class="champ" type="text" pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$" name="tel_prof"/><br>
						 <label class="labelC">Fonction:</label>
						 <select name="fonction" class="champ">
							 <?php
							 $fonctmanag = new FonctionManager(new Mypdo());
							 $fonction = $fonctmanag->getFonctions();
							 foreach($fonction as $fon){
								 echo '<option value="'.$fon->getFonNum().'">' . $fon->getFonLibelle() . '</option>';
							 }
							 ?>
						 </select><br>
						 <input type="hidden" name="password" value="<?php echo $cryptage->grainDeSel($_POST['password']); ?>"/>
						 <input type="hidden" name="categorie" value="<?php echo $_POST['categorie']; ?>"/>
						 <input type="hidden" name="login" value="<?php echo $_POST['login']; ?>"/>
						 <input type="hidden" name="mail" value="<?php echo $_POST['mail']; ?>"/>
						 <input type="hidden" name="tel" value="<?php echo $_POST['tel']; ?>"/>
						 <input type="hidden" name="nom" value="<?php echo $_POST['nom']; ?>"/>
						 <input type="hidden" name="prenom" value="<?php echo $_POST['prenom']; ?>"/>
						 <input class="bouton" type="submit" value="valider">
				 </form>
		 <?php
			 }else{
				 echo '<h1>Ajouter un salarié</h1>';

				 $salarie = new Salarie(
					 array(
						 'per_nom'=>$_POST['nom'],
						 'per_prenom'=>$_POST['prenom'],
						 'per_tel'=>$_POST['tel'],
						 'per_mail'=>$_POST['mail'],
						 'per_login'=>$_POST['login'],
						 'per_pwd'=>$_POST['password'],
						 'fon_num'=>$_POST['fonction'],
						 'sal_telprof'=>$_POST['tel_prof']
					 )
				 );
				 $salmanag = new SalarieManager(new Mypdo());
				 if($salmanag->addSalarie($salarie)){
						 echo '<img src="image/valid.png"/>le salarié a était ajouté';
				 }else{
					 echo '<img src="image/valid.png"/>erreur';
				 }
			 }
	 }
}
 ?>





