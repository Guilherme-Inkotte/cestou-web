<?php
    $id = $_GET["id"];

    $servername = "localhost:3306";
    $username = "root";
    $password = "";
    $dbname = "expcri";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
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