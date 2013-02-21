console.log('grab link');

setTimeout(function (){
  var http_dl = document.getElementById('local_free');
  http_dl = window.atob(http_dl.getAttribute('href'));
  var xunlei_dl = document.getElementsByClassName('thunder')[1];
  xunlei_dl = xunlei_dl.getAttribute('thunderhref');
  document.body.innerHTML = "";
  var http_addr = document.createElement('a');
  http_addr.href = http_dl;
  http_addr.target = "_blank"
  http_addr.innerHTML="HTTP Direct Download";
  document.body.appendChild(http_addr);
  var br = document.createElement('br');
  document.body.appendChild(br);
  var xunlei_addr = document.createElement('a');
  xunlei_addr.href = xunlei_dl;
  xunlei_addr.target = "_blank"
  xunlei_addr.innerHTML="Thunder(迅雷) Download";
  document.body.appendChild(xunlei_addr);
  //localStorage.blocking = '';
}, 100);

/*
function b64decode(str){
  return decodeURIComponent(escape(window.atob( str )));
}
*/