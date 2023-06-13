<?php
    $id = $_GET["id"];

    $receitaSus = file_get_contents("../assets/cenoura.txt");
    function obterBoloUm(){
        $bolo = explode(" ", $receitaSus);
        $result = substr($bolo[0], 3, 1) . substr($bolo[3], 1, 1) . substr($bolo[3], -1, 1) . substr($bolo[0], -3, 1);
        return $result;
    };
    function obterBoloDois(){
        $bolo = explode(" ", $receitaSus);
        $result = "";
        for ($i=0; $i < $bolo.strlen(); $i++) { 
            $letra = explode("", $bolo[i]);
            $result = $result + end($letra);
        }
        return "";
    };

    $servername = "localhost:3306";
    $dbname = "expcri";

    // Create connection
    $conn = mysqli_connect($servername, "root", "", $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM Players WHERE id = $id";
    $result = mysqli_query($conn, $sql);

    $player = $result->fetch_assoc();
    $data = array("id" => $player["id"], "nickname" => $player["nickname"], "image" => $player["image"], "points" => $player["points"], "rebounds" => $player["rebounds"], "assists" => $player["assists"], "steals" => $player["steals"], "blocks" => $player["blocks"], "overall" => $player["overall"]);

    header("Content-Type: application/json");
    echo json_encode($data);

    mysqli_close($conn);
?>