<?php

class Division{
	private $div_num;
	private $div_nom;


	public function __construct($Division = array()){
		if(!empty($Division)){
				$this->affecte($Division);
		}
	}

	private function affecte($Division = array()){
		foreach ($Division as $attribut => $valeur) {
			switch($attribut){
				case 'div_num':
					$this->div_num = $valeur;
					break;
				case 'div_nom':
					$this->div_nom = $valeur;
					break;
			}
		}
	}


	public function setDivNum($Division){
		$this->div_num = $Division;
	}
	public function setDivNom($Division){
		$this->div_nom = $Division;
	}


	public function getDivNum(){
		return $this->div_num;
	}
	public function getDivNom(){
		return $this->div_nom;
	}
}
