<?php

class Departement{
	private $dep_num;
	private $dep_nom;
	private $vil_num;


	public function __construct($Departement = array()){
		if(!empty($Departement)){
				$this->affecte($Departement);
		}
	}

	private function affecte($Departement = array()){
		foreach ($Departement as $key => $valeur) {
			switch($key){
				case 'dep_num':
					$this->dep_num = $valeur;
					break;
				case 'dep_nom':
					$this->dep_nom = $valeur;
					break;
				case 'vil_num':
					$this->vil_num = $valeur;
					break;
			}
		}
	}


	public function setDepNum($Departement){
		$this->dep_num = $Departement;
	}

	public function setDepNom($Departement){
		$this->dep_nom = $Departement;
	}

	public function setVilleNum($Departement){
		$this->vil_num = $Departement;
	}

	public function getDepNum(){
		return $this->dep_num;
	}

	public function getDepNom(){
		return $this->dep_nom;
	}

	public function getVilleNum(){
		return $this->vil_num;
	}

}
