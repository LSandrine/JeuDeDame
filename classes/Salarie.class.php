<?php

class Salarie extends Personne{
	private $sal_telprof;
	private $fon_num;

	public function __construct($Salarie = array()){
		if(!empty($Salarie)){
				$this->modif($Salarie);
		}
	}

	protected function modif($Salarie = array()){
		parent::modif($Salarie);
		foreach ($Salarie as $attribut => $valeur) {
			switch($attribut){
				case 'per_num':
					$this->per_num = $valeur;
					break;
				case 'sal_telprof':
					$this->sal_telprof = $valeur;
					break;
				case 'fon_num':
					$this->fon_num = $valeur;
    				break;
			}
		}
	}

	public function setPerNum($Salarie){
		$this->per_num = $Salarie;
	}
	public function setSalTelProf($Salarie){
		$this->sal_telprof = $Salarie;
	}
	public function setFonNum($Salarie){
		$this->fon_num = $Salarie;
	}


	public function getPerNum(){
		return $this->per_num;
	}
	public function getSalTelProf(){
		return $this->sal_telprof;
	}
	public function getFonNum(){
		return $this->fon_num;
	}
}
