<?php

class Etudiant extends Personne{
	private $dep_num;
	private $div_num;

	public function __construct($Etudiant = array()){
		if(!empty($Etudiant)){
				$this->modif($Etudiant);
		}
	}

	protected function modif($Etudiant = array()){
		parent::modif($Etudiant);
		foreach ($Etudiant as $attribut => $valeur) {
			switch($attribut){
				case 'per_num':
						$this->per_num = $valeur;
					break;
				case 'dep_num':
						$this->dep_num = $valeur;
					break;
					case 'div_num':
						$this->div_num = $valeur;
					break;
			}
		}
	}

	public function setPerNum($Etudiant){
		$this->per_num = $Etudiant;
	}
	public function setDepNum($Etudiant){
		$this->dep_num = $Etudiant;
	}
	public function setDivNum($Etudiant){
		$this->div_num = $Etudiant;
	}

	/**
	* Getteurs de la classe
	*/
	public function getPerNum(){
		return $this->per_num;
	}
	public function getDepNum(){
		return $this->dep_num;
	}
	public function getDivNum(){
		return $this->div_num;
	}
}
