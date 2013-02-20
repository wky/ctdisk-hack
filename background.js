
localStorage.file_id = ''
//localStorage.blocking = "yes";

chrome.tabs.onUpdated.addListener(function (tabId, change, tab){
  if (change.url){
    prefix = "http://ctdisk.com/downhtml/" + localStorage.file_id;
    if (change.url.lastIndexOf(prefix, 0) == 0){
      chrome.webRequest.onBeforeRequest.addListener(
        function (details) {
          if (details.url == change.url)
            return {cancel:false};
          else
            return {cancel:true};}, 
        {urls:["<all_urls>"], tabId:tabId},
        ['blocking']);
      chrome.tabs.executeScript(tabId, {file:'grab_link.js'});
    }
  }
});