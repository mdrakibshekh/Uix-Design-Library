<?php
/**
 * UIX DESIGN SYSTEM — CLOUD LIBRARY API (PHP)
 * Place this in your cPanel public_html/api directory.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Simple JSON file-based storage for speed, can be upgraded to SQL easily
$db_file = __DIR__ . '/library_data.json';

// Handle OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Handle FETCH (GET)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($db_file)) {
        echo file_get_contents($db_file);
    } else {
        echo json_encode(["success" => false, "message" => "Library empty"]);
    }
    exit();
}

// Handle PUBLISH (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if ($data && isset($data['data'])) {
        file_put_contents($db_file, $input);
        echo json_encode(["success" => true, "message" => "Library updated"]);
    } else {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid data"]);
    }
    exit();
}
?>
