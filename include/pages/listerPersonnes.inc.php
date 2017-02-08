<?php


$PersonneM = new PersonneManager(new Mypdo());
$EtudiantM = new EtudiantManager(new Mypdo());
$VilleM = new VilleManager(new Mypdo());
$DepM= new DepartementManager(new Mypdo());
$SalarieM = new SalarieManager(new Mypdo());

if(!empty($_GET['id'])){
	$type = $PersonneM->getTypePersonneByNum($_GET['id']);
	
	if($type === "Etudiant"){

		$etu = $EtudiantM->getEtudiantByNum($_GET['id']);
		$dep = $DepM->getDepartementByNum($etu->getDepNum());
		$vil = $VilleM->getNomVille($dep->getVilleNum());
		echo '<h1>Details sur l\'étudiant '.$etu->getPerNom().'</h1>';
		echo '<table class="centrerBlock">
		<tr>
			<th>Prénom</th>
			<th>Mail</th>
			<th>Tel</th>
			<th>Département</th>
			<th>Ville</th>
		</tr><tr>
			<td>'.$etu->getPerPrenom().'</td>
			<td>'.$etu->getPerMail().'</td>
			<td>'.$etu->getPerTel().'</td>
			<td>'.$dep->getDepNom().'</td>
			<td>'.$vil->getnomVille().'</td>
		</tr></table>';
		
	}else if($type === "Salarie"){

		$sal = $SalarieM->getSalarieByNum($_GET['id']);
		$FctM = new FonctionManager(new Mypdo());
		$fct = $FctM->getFonctionByNum($sal->getFonNum());
		echo '<h1>Details sur le salarie '.$sal->getPerNom().'</h1>';
		echo '<table class="centrerBlock">
		<tr>
			<th>Prénom</th>
			<th>Mail</th>
			<th>Tel</th>
			<th>Tel pro</th>
			<th>Fonction</th>
		</tr><tr>
			<td>'.$sal->getPerPrenom().'</td>
			<td>'.$sal->getPerMail().'</td>
			<td>'.$sal->getPerTel().'</td>
			<td>'.$sal->getSalTelProf().'</td>
			<td>'.$fct->getFonLibelle().'</td>
		</tr></table>';
	}
}else{
	echo '<h1>Liste des Personnes enregistrees</h1>';
	$personnes = $PersonneM->getPersonnes();
	
	echo '<br/><p>Actuellement '.count($personnes).' personnes sont enregistrées</p>';

	?>
	<table class="centrerBlock">
	<tr>
		<th>Numéro</th>
		<th>Nom</th>
		<th>Prénom</th>
	</tr>
	<?php
	
		foreach($personnes as $p){
			echo '<tr><td><a href="?page=2&id='.$p->getPerNum().'">';
			echo $p->getPerNum();
			echo '</a></td><td>';
			echo $p->getPerNom();
			echo '</td><td>';
			echo $p->getPerPrenom();
			echo '</td></tr>';
		}
	 ?>
	</table>
	<?php
}
?>
