var file_id = '';
var tab_id = 0;
var tab_url = '';
function b64decode(str){
  return decodeURIComponent(escape(window.atob( str )));
}
document.addEventListener('DOMContentLoaded', function ()
{
  document.getElementById('begin').addEventListener('click', function()
  {
    file_id = document.getElementById('file_id').value;
    if (!file_id) return;
    tab_url = 'http://ctdisk.com/file/' + String(file_id);
    chrome.tabs.create({url:tab_url, active:false}, function(tab){
        tab_id = tab.id;
        console.log(tab_id);
        chrome.tabs.executeScript(tab_id, {file:'send_msg.js',
          runAt:"document_start"});
        chrome.webRequest.onBeforeRequest.addListener(
          function (details) {
            if (details.url == tab_url)
              return {cancel:false};
            else
              return {cancel:true};}, 
          {urls:["<all_urls>"], tabId:tab_id},
          ['blocking']);
      });
  });
  chrome.extension.onMessage.addListener(function (msg){
    console.log("received.");
    var hash_id = msg.hash_id;

    chrome.tabs.remove(tab_id);
    
    var file_size = document.createElement('p');
    file_size.innerHTML = msg.size;
    var file_time = document.createElement('p');
    file_time.innerHTML = msg.time;
    document.body.appendChild(file_size);
    document.body.appendChild(file_time);

    var captcha = document.createElement('img');
    captcha.src = "http://ctdisk.com/randcodeV2.php?fid=" + file_id;
    document.body.appendChild(captcha);

    var file_input = document.createElement("input");
    file_input.name = "file_id";
    file_input.type = "hidden";
    file_input.value = file_id;
    
    var hash_input = document.createElement("input");
    hash_input.name = "hash_id"
    hash_input.type = "hidden";
    hash_input.value = hash_id; 
    
    var randcode = document.createElement("input");
    randcode.name = 'randcode';
    randcode.type = 'text';
    
    var confirm = document.createElement("input");
    confirm.type = 'submit';
    confirm.value = 'Comfirm';

    var form = document.createElement("form");
    form.method = "post";
    form.action = "http://ctdisk.com/guest_loginV2.php";
    form.target = "_blank";
    form.appendChild(file_input);
    form.appendChild(hash_input);
    form.appendChild(randcode);
    form.appendChild(confirm)
    form.addEventListener('submit', function(){
      document.body.removeChild(captcha);
      document.body.removeChild(form);
    });
    document.body.appendChild(form);
    randcode.focus();
    localStorage.file_id = file_id;
  });
});
