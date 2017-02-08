<?php

class Fonction{
	private $fon_num;
	private $fon_libelle;

	public function __construct($Fonction = array()){
		if(!empty($Fonction)){
				$this->affecte($Fonction);
		}
	}

	private function affecte($Fonction = array()){
		foreach ($Fonction as $attribut => $valeur) {
			switch($attribut){
				case 'fon_num':
					$this->fon_num = $valeur;
					break;
				case 'fon_libelle':
					$this->fon_libelle = $valeur;
					break;
			}
		}
	}

	public function setFonNum($Fonction){
		$this->fon_num = $Fonction;
	}
	public function setFonLibelle($Fonction){
		$this->fon_libelle = $Fonction;
	}


	public function getFonNum(){
		return $this->fon_num;
	}
	public function getFonLibelle(){
		return $this->fon_libelle;
	}
}
