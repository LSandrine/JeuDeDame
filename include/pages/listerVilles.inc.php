
<?php 

	$pdo=new Mypdo();
	$villeM= new VilleManager($pdo);
	$villes=$villeM ->getAllVille(); ?>

<h1>Liste des villes</h1>
<?php echo'<p>Actuellement '.count($villes).' villes sont enrengistrées</p>'; ?>
<table class="centrerBlock">
<tr>
<th>Numéro</th>
<th>Nom</th>
</tr><tr>
<?php

	foreach ($villes as $ville){
		echo '<tr>'."\n";
		echo'<td>'.$ville ->getnumVille().'</td>'."\n";
		echo'<td>'.$ville ->getnomVille().'</td>'."\n";
		echo '</tr>'."\n";
	}
?>
</tr>
</table>