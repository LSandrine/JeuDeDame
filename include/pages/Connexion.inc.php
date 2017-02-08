<h1>Pour vous connecter</h1>

<?php
$db = new Mypdo();
$PersonneM = new PersonneManager($db);

if(!isset($_POST['captcha']) or $_POST['captcha']!=(($_SESSION["chiffre1"])+($_SESSION["chiffre2"]))){
  $verif=0;
  $_SESSION["chiffre1"] = rand(1, 9);
  $_SESSION["chiffre2"] = rand(1, 9);
} elseif ($_POST['captcha']==(($_SESSION["chiffre1"])+($_SESSION["chiffre2"]))) {
  $verif=1;
}

if(empty($_POST['per_nom']) or empty($_POST['per_pwd']) or empty($_POST['captcha']) or ($verif==0) ) {
?>

<form name="connection" action="#" method="POST"  >
<table class="centrerBlock">

      <tr>
            <td><b>Nom d'utilisateur:</b></td>
      </tr>
      <tr>
            <td><input type="text" name="per_nom" class="champ" required="required"/></td>
      </tr>
      <tr>
            <td><b>Mot de passe:</b></td>
      </tr>
      <tr>
            <td><input type="password"  name="per_pwd" class="champ" required="required" /></td>
      </tr>
      <tr>

          <td><p><img  src="./image/nb/<?php echo $_SESSION["chiffre1"] ?>.jpg"/>+<img  src="./image/nb/<?php echo $_SESSION["chiffre2"] ?>.jpg"/>=</p></td>

      </tr>
      <tr>
        <td><input type="text"  name="captcha" class="champ" required="required" /></td>

      <tr>
        <td><input type="submit" name="valider" class="bouton" value="valider"></td>
</table>
		
</form>

<?php }else{
	unset($_SESSION['chiffre1']);
	unset($_SESSION['chiffre2']);
	$_SESSION["login"] = $_POST["per_nom"];
	$_SESSION["pwd"] = $_POST["per_pwd"];
	$_SESSION["pwd"] = $PersonneM->grainDeSel($_SESSION["pwd"]);
	$PersonneM->getUserNumByConnec($_POST["per_nom"]) ;
	if ($PersonneM->verifPwd($_SESSION["login"],$_SESSION["pwd"])==1){
		$_SESSION["connected"]=1;
		header('Location: ./index.php?page=0');
  } else {
		header('Location: ./index.php?page=11');
  }

}

