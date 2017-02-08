<?php
class DivisionManager{
	private $db;


    public function __construct($db){
        $this->db = $db;
    }


		public function getDivisions(){
			$req = $this->db->query('SELECT * FROM division');
			while($div=$req->fetch(PDO::FETCH_OBJ)){
				$divisions[]=new Division($div);
			}
			$req->closeCursor();
			return $divisions;
		}

		public function getDivisionByNum($num){
			$req = $this->db -> prepare('SELECT * FROM division where div_num=:num');
			$req->bindValue(1, $num);
			$req->execute();
			return new Division($req->fetch(PDO::FETCH_OBJ));
		}
}
