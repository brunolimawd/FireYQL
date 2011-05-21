FireYQL.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ FireYQL.showFirefoxContextMenu(e); }, false);
};

FireYQL.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-FireYQL").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { FireYQL.onFirefoxLoad(); }, false);
