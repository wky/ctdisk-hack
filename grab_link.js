console.log('grab link');
setTimeout(function (){
  http_dl = document.getElementById('local_free').getAttribute('href');
  http_dl = window.atob(http_dl);
  document.body.innerHTML = "";
  var addr = document.createElement('a');
  addr.href = http_dl;
  addr.target = "_blank"
  addr.innerHTML="Here is your link";
  document.body.appendChild(addr);
  //localStorage.blocking = '';
}, 100);

/*
function b64decode(str){
  return decodeURIComponent(escape(window.atob( str )));
}
function grab() {
    console.log("bon");
}
setInterval(grab, 1000);
*/