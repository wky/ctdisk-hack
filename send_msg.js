console.log('send_msg.js');
document.addEventListener('DOMContentLoaded', function (){
  hash_tag = document.getElementById('hash_id');
  //hash_val = '';
  //if (hash_tag)
  hash_val = hash_tag.value;
  /*http_tag = document.getElementById('local_free');
  http_dl = '';
  if (http_tag)
    http_dl = http_tag.href;
  console.log(http_dl);*/
  console.log(hash_val);
  chrome.extension.sendMessage({hash_id:hash_val});
});