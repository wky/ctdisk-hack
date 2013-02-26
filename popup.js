localStorage.file_id = '';

document.addEventListener('DOMContentLoaded', function (){
  document.getElementById('begin').addEventListener('click',
    beginRequest1);  
});

function beginRequest1(){
  file_id = document.getElementById('file_id').value;
  if (!file_id) return;
  var req = new XMLHttpRequest();
  req.responseType = 'document';
  var url = 'http://ctdisk.com/file/' + String(file_id);
  req.onload = function(){
    console.log('response from ' + url);
    var hash_val = req.response.getElementById('hash_id').value;
    var file_info = req.response.getElementsByClassName('file_info')[0];
    var size_str = file_info.children[0].innerHTML;
    var time_str = file_info.children[1].innerHTML;
    process({
      file_id:  file_id,
      hash_id:  hash_val,
      size:     size_str, 
      time:     time_str
    });
  };
  req.open('get', url, true);
  req.send();
  console.log('sent.');
}

function process(msg){
  console.log("received.");

  localStorage.file_id = msg.file_id;
  
  var file_size = document.getElementById('file_size');
  file_size.innerHTML = msg.size;
  
  var file_time = document.getElementById('file_time');
  file_time.innerHTML = msg.time;

  var captcha = document.getElementById('captcha_img');
  captcha.src = "http://ctdisk.com/randcodeV2.php?fid=" + msg.file_id;

  var randcode = document.getElementById('randcode');

  var confirm = document.getElementById('confirm');
  confirm.onclick = function ()
  {
    console.log('confirm clicked.');
    captcha.style.display = 'none';
    randcode.style.display = 'none';
    confirm.style.display = 'none';
    
    var req = new XMLHttpRequest();
    req.responseType = 'document';
    req.onload = function(){ getLinks(req.response);};

    // something wrong with FormData type.
    // FormData is sending rubbish.
    // so I'm using raw string.
    var form = 'file_id=' + msg.file_id + 
              '&hash_id=' + msg.hash_id + 
              '&randcode=' + randcode.value;
    var url = 'http://ctdisk.com/guest_loginV2.php';
    // bloody hell
    // you have to call open() first, then setReuestHeader()
    req.open('post', url, true);
    req.setRequestHeader("Content-type",
      "application/x-www-form-urlencoded");
    req.send(form);
    console.log('dl req sent.');
  };

  file_size.style.display = 'inline';
  file_time.style.display = 'inline';
  captcha.style.display = 'block';
  randcode.style.display = 'inline';
  confirm.style.display = 'inline'
  randcode.focus();
}

function getLinks(resp){
  console.log('dl response.');

  var xunlei_dl = resp.getElementsByClassName('thunder')[0];
  xunlei_dl = xunlei_dl.getAttribute('thunderhref');

  var http_dl = resp.getElementById('local_free');
  http_dl = http_dl.getAttribute('href');
  /* somtimes decoded, somtimes not DAMN!*/
  if (http_dl.lastIndexOf('http://', 0) != 0){
    http_dl = window.atob(http_dl);
  }

  var http = document.getElementById('http_dl');
  var xunlei = document.getElementById('xunlei_dl');

  http.href = http_dl;
  xunlei.href = xunlei_dl;

  http.style.display = 'block';
  xunlei.style.display = 'block';
}