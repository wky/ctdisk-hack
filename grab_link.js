console.log('grab link');

setTimeout(function (){
  console.log('1');
  var http_dl = document.getElementById('local_free');
  console.log('1.5');
  http_dl = http_dl.getAttribute('href');
  /* somtimes decoded, somtimes not DAMN!*/
  if (http_dl.lastIndexOf('http://', 0) != 0){
    http_dl = window.atob(http_dl);
    console.log('1.75');
  }
  console.log('2');
  /* somtimes there are multiple elements with class='thunder'*/
  var xunlei_dl = document.getElementsByClassName('thunder')[0];
  xunlei_dl = xunlei_dl.getAttribute('thunderhref');
  console.log('3');
  document.body.innerHTML = "";
  document.head.innerHTML = "";
  console.log('3.5');
  var http_addr = document.createElement('a');
  http_addr.href = http_dl;
  http_addr.target = "_blank"
  http_addr.innerHTML="HTTP Direct Download";
  document.body.appendChild(http_addr);
  console.log('4');
  var br = document.createElement('br');
  document.body.appendChild(br);
  var xunlei_addr = document.createElement('a');
  xunlei_addr.href = xunlei_dl;
  xunlei_addr.target = "_blank"
  xunlei_addr.innerHTML="Thunder(迅雷) Download";
  document.body.appendChild(xunlei_addr);
  console.log('5');
  //localStorage.blocking = '';
}, 500);

/*
function b64decode(str){
  return decodeURIComponent(escape(window.atob( str )));
}
*/