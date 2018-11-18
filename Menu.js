function displayPopup() {
  //建立層疊附且加置網頁
  var overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  overlay.setAttribute("class", "overlay");
  document.body.appendChild(overlay);

  //建立訊息且附加至層疊
  var msg = document.createElement("div");
  var txt = document.createTextNode(" ");
  msg.appendChild(txt);
  msg.setAttribute("id", "msg");
  msg.setAttribute("class", "overlaymsg");

  //點擊以回復頁面
  msg.onclick = restore;

  //將層疊加製主體
  document.body.appendChild(msg);
}

//還原頁面
function restore() {
  document.body.removeChild(document.getElementById("overlay"));
  document.body.removeChild(document.getElementById("msg"));
}

window.onload = function() {
  displayPopup();
}
