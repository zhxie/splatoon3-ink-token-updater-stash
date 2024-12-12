const body = JSON.parse($response.body);
const token = body["bulletToken"];
$notification.post("Splatoon3.ink Token Updater", "", `Found bullet token ${token}.`);

$done({});
