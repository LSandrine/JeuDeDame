<?php
class Ville{
	public function __construct($tabVille=array()){
		if(!empty($tabVille))$this -> affecte($tabVille);
	}
	public function affecte($tabVille){
		foreach($tabVille as $attribut => $valeur){
			switch($attribut){
				case 'vil_nom':$this -> setnomVille($valeur);
				break;
				case 'vil_num':$this -> setnumVille($valeur);
				break;
			}
		}
	}
	public function getnomVille(){
		return $this -> vil_nom;
	}
	public function setnomVille($vil_nom){
		$this -> vil_nom = $vil_nom;
	}
	public function getnumVille(){
		return $this -> vil_num;
	}
	public function setnumVille($vil_num){
		$this -> vil_num = $vil_num;
	}
}