<?php
	$pdo=new Mypdo();
	$parcoursM= new ParcoursManager($pdo);
	$parcourss=$parcoursM ->getAllParcours(); ?>

<h1>Liste des parcours</h1>
<?php echo'<p>Actuellement '.count($parcourss).' parcours sont enrengistrées</p>'; ?>
<table class="centrerBlock" >
<tr>
<th>Numéro</th>
<th>Nom ville</th>
<th>Nom ville</th>
<th>Nombre de Km</th>
</tr><tr>
<?php

	foreach ($parcourss as $parcours){
		echo '<tr>'."\n";
		echo'<td>'.$parcours ->getnumParcours().'</td>'."\n";
		echo'<td>'.$parcours ->getnomVille1().'</td>'."\n";
		echo'<td>'.$parcours ->getnomVille2().'</td>'."\n";
		echo'<td>'.$parcours ->getkmParcours().'</td>'."\n";
		echo '</tr>'."\n";
	}
?>
</tr>
</table>