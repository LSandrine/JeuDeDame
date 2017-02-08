<?php
class PersonneManager{
	private $db;
		
		public function __construct($db){
			$this -> db = $db;
    }
		
		public function removePersonneByPerNum($Personne){

			$req = $this->db->prepare('DELETE FROM avis WHERE per_per_num=:id OR per_num=:id');
			$req->bindValue(':id',$Personne,PDO::PARAM_INT);
			$req->execute();
			
			$req = $this->db->prepare('DELETE FROM propose WHERE per_num=:id');
			$req->bindValue(':id',$Personne,PDO::PARAM_INT);
			$req->execute();

			
			$type = $this->getTypePersonneByNum($Personne);

			if($type === "Etudiant"){
				$req = $this->db->prepare('DELETE FROM etudiant WHERE per_num=:id');
				$req->bindValue(':id',$Personne,PDO::PARAM_INT);
				$req->execute();
			}else if($type === "Salarie"){
				$req = $this->db->prepare('DELETE FROM salarie WHERE per_num=:id');
				$req->bindValue(':id',$Personne,PDO::PARAM_INT);
				$req->execute();
			}

			$req = $this->db->prepare('DELETE FROM personne WHERE per_num=:id');
			$req->bindValue(':id',$Personne,PDO::PARAM_INT);
			$req->execute();

		}
		
		
		public function addPersonne($personne){
			$reqPersonne = $this->db->prepare('INSERT INTO `personne` (`per_nom`,`per_prenom`,`per_tel`,`per_mail`,`per_login`,`per_pwd`) VALUES (:nom,:prenom,:tel,:mail,:login,:pwd)');
			$reqPersonne->bindValue(':nom',$personne->getPerNom(),PDO::PARAM_STR);
			$reqPersonne->bindValue(':prenom',$personne->getPerPrenom(),PDO::PARAM_STR);
			$reqPersonne->bindValue(':tel',$personne->getPerTel(),PDO::PARAM_STR);
			$reqPersonne->bindValue(':mail',$personne->getPerMail(),PDO::PARAM_STR);
			$reqPersonne->bindValue(':login',$personne->getPerLogin(),PDO::PARAM_STR);
			$reqPersonne->bindValue(':pwd',$personne->getPerPassword(),PDO::PARAM_STR);
			return $reqPersonne->execute();
		}
		
		
		function getPersonnes(){
        $req = $this->db->query('SELECT per_num,per_nom,per_prenom, per_tel, per_mail, per_login, per_pwd FROM personne ORDER BY per_nom');
        while($pers = $req->fetch(PDO::FETCH_OBJ)){
            $listpers[] = new Personne($pers);
        	}
        $req->closeCursor();
        return $listpers;
    	}
    	
    
    public function updatePersonne($pers){
    	$req = $this->db->prepare('UPDATE personne SET per_nom=:nom,per_prenom=:prenom,per_tel=:tel,per_mail=:mail,per_login=:login,per_pwd=:pwd WHERE per_num=:num');
    	$req->bindValue(':num',$pers->getPerNum(),PDO::PARAM_INT);
    	$req->bindValue(':nom',$pers->getPerNom(),PDO::PARAM_STR);
    	$req->bindValue(':prenom',$pers->getPerPrenom(),PDO::PARAM_STR);
    	$req->bindValue(':tel',$pers->getPerTel(),PDO::PARAM_STR);
    	$req->bindValue(':mail',$pers->getPerMail(),PDO::PARAM_STR);
    	$req->bindValue(':login',$pers->getPerLogin(),PDO::PARAM_STR);
    	$req->bindValue(':pwd',$pers->getPerPassword(),PDO::PARAM_STR);
    	return $req->execute();
   		}
   		
		public function getPersonneByNum($num){
			$log = $this->db->prepare('SELECT * from personne where per_num=:num');
			$log->bindValue(':num',$num,PDO::PARAM_INT);
			$log->execute();
			return new Personne($log->fetch(PDO::FETCH_OBJ));
		}
		
		public function getPersonneNumByLogin($login){
			$log = $this->db->prepare('SELECT per_num from personne where per_login=:login');
			$log->bindValue(':login',$login,PDO::PARAM_STR);
			$log->execute();
			return $log->fetch(PDO::FETCH_OBJ)->per_num;
		}
		
		public function getTypePersonneByNum($num){

			$etudiant = $this->db ->prepare('SELECT per_num FROM  etudiant where per_num= :num');
			$etudiant->bindValue(':num',$num,PDO::PARAM_INT);
			$etudiant->execute();
			$etu=$etudiant->fetch(PDO::FETCH_OBJ);

			$salarie = $this->db->prepare('SELECT per_num FROM  salarie where per_num= :num');
			$salarie->bindValue(':num',$num,PDO::PARAM_INT);
			$salarie->execute();
			$sal=$salarie->fetch(PDO::FETCH_OBJ);

			if(isset($etu->per_num))return 'Etudiant';
			if(isset($sal->per_num))return 'Salarie';
			return 'Inconnue';
		}
		
		public function verifLogin($login){
			$log = $this->db->prepare('SELECT * from personne where per_login=:login');
			$log->bindValue(':login',$login,PDO::PARAM_STR);
			$log->execute();
			$loginStatus=$log->fetch(PDO::FETCH_OBJ);
			if(isset($loginStatus->per_num))return 1;
			else return 0;
		}
		public function verifMail($mail){
			if(!filter_var($mail, FILTER_VALIDATE_EMAIL))return 1;
			$log = $this->db->prepare('SELECT * from personne where per_mail=:mail');
			$log->bindValue(':mail',$mail,PDO::PARAM_STR);
			$log->execute();
			$loginStatus=$log->fetch(PDO::FETCH_OBJ);

			if(isset($loginStatus->per_num))return 2;
			else return 0;
		}
		
		public function grainDeSel($shaPwd){
			$salt="48@!alsd";
			$pwdCrypt=sha1(sha1($shaPwd).$salt);
			return $pwdCrypt;
		}
		
		public function verifPwd($login, $pwdCry){
			$pwdTest = $pwdCry;
			$sqlPwd= "select per_pwd from personne where '$login' = per_login LIMIT 1";
			$reqPwd=$this ->db -> query($sqlPwd);
			$pwdDb=$reqPwd->fetch(PDO::FETCH_ASSOC);
			if($pwdDb["per_pwd"]==$pwdTest){
				unset($_SESSION['pwd']);
				return 1;
			}
			else return 0;
			$reqPwd->closeCursor;
			unset($_SESSION['pwd']);
		}
		
		public function getUserNumByConnec($login) {
			$sql="select per_num from personne where '$login' = per_login ";
			$req=$this ->db -> query($sql);
			$per_numDb=$req->fetch(PDO::FETCH_ASSOC);
			$_SESSION["per_num"]=$per_numDb["per_num"];
		}
}
