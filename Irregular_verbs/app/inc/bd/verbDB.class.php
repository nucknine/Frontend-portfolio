<?php

class verbDB {
	const SERVER_ROOT = 'verb.nucknine.pro/';
	//<!-- настройки сайта и константы -->
	const DB_HOST = 'localhost'; //хранениe адреса сервера баз данных mySQL
	const DB_LOGIN = 'uzthjwze_nuck'; //хранениe логина сервера баз данных mySQL
	const DB_PASSWORD = 'Mrinnovja69L'; //хранениe пароля сервера баз данных mySQL
	const DB_NAME = 'uzthjwze_wp881'; //хранениe имени сервера баз данных mySQL

	private $_db = null;

	function __get($name) {
			if($name == 'db')
				return $this->_db;
			throw new Exception("Unknown property!");
		}

	function __construct(){
		try{
		$this->_db = new PDO('mysql:host=localhost;dbname=uzthjwze_wp881', 'uzthjwze_nuck', 'Mrinnovja69L', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

		}catch(PDOException $e){
			echo "Невозможно установить соединение";
			print_r($e->getMessage());
		}
	}



	function getVerbs($verb) {
	    $sql = "set names utf8";
	    $this->_db->exec($sql);
		$sql = "SELECT infinitive, past, past_participle, translate_rus FROM verbs WHERE infinitive LIKE '$verb%'";

		if(!$result= $this->_db->query($sql))
			return false;
		return $this->db2Arr($result);
		}




	function __destruct(){
			unset($this->_db);
		}

	/*Доп функции*/
	private function db2Arr($result) {
			$items = [];
			while($row = $result->fetch(PDO::FETCH_ASSOC)) {
				$items[] = $row;
			}

			return $items;
		}

	function clearStr($str){
		return trim(strip_tags($str)); //эскейп строки без пробелов и без тегов
	}

	function clearInt($int){
		return abs((int)$int); //модуль числа
	}

}
