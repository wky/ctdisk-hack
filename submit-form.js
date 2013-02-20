
var form = document.createElement("form");
form.method = "post";
form.action = "/guest_loginV2.php";
var file_id = document.createElement("input");
file_id.setAttribute("name", "file_id");
file_id.setAttribute("value", "16878899");
var hash_id = document.createElement("input");
hash_id.setAttribute("name", "hash_id");
hash_id.setAttribute("value", "2a794cdc7ad7c34fb3cca3c579a6432e");
var randcode = document.createElement("input");
randcode.setAttribute("name", "randcode");
randcode.setAttribute("value", "481");
form.appendChild(file_id);
form.appendChild(hash_id);
form.appendChild(randcode);
document.body.appendChild(form);
form.submit()
