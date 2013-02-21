console.log('send_msg.js');
document.addEventListener('DOMContentLoaded', function (){
  var hash_val = document.getElementById('hash_id').value;
  var file_info = document.getElementsByClassName('file_info')[0];
  var size_str = file_info.children[0].innerHTML;
  var time_str = file_info.children[1].innerHTML;
  console.log(hash_val);
  chrome.extension.sendMessage({hash_id:hash_val, size:size_str,
    time:time_str});
});