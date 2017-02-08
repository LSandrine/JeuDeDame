<?php

class Personne{

	public function __construct($Personne = array()){
		if(!empty($Personne)){
				$this->modif($Personne);
		}
	}

	protected function modif($Personne = array()){
		foreach ($Personne as $attribut => $valeur) {
			switch($attribut){
				case 'per_num':
					$this->numero_personne = $valeur;
					break;
				case 'per_nom':
					$this->per_nom = $valeur;
					break;
				case 'per_prenom':
					$this->per_prenom = $valeur;
					break;
				case 'per_tel':
					$this->per_tel = $valeur;
					break;
				case 'per_mail':
					$this->per_mail = $valeur;
					break;
				case 'per_login':
					$this->per_login = $valeur;
					break;
				case 'per_pwd':
					$this->per_pwd = $valeur;
					break;
			}
		}
	}

	public function setPerNum($Personne){
		$this->per_num = $Personne;
	}

	public function setPerNom($Personne){
		$this->per_nom = $Personne;
	}

	public function setPerPrenom($Personne){
		$this->per_prenom = $Personne;
	}

	public function setPerTel($Personne){
		$this->per_tel = $Personne;
	}

	public function setPerMail($Personne){
		$this->per_mail = $Personne;
	}

	public function setPerLogin($Personne){
		$this->per_login = $Personne;
	}

	public function setPerPassword($Personne){
		$this->per_pwd = $Personne;
	}

	public function getPerNum(){
		return $this->numero_personne;
	}

	public function getPerNom(){
		return $this->per_nom;
	}

	public function getPerPrenom(){
		return $this->per_prenom;
	}

	public function getPerTel(){
		return $this->per_tel;
	}

	public function getPerMail(){
		return $this->per_mail;
	}

	public function getPerLogin(){
		return $this->per_login;
	}

	public function getPerPassword(){
		return $this->per_pwd;
	}
}
