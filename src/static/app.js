// [castelog:compilables] "./js/calo.calo"
// [castelog:compilables] "./js/component/shellver-gui.calo"
// [castelog:compilables] "./js/component/shellver-gui-console.calo"

// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>Shellver</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"/js/calo.js\"></script>\n    <script src=\"/js/socket.io-client.js\"></script>\n    <script src=\"/js/shellver-client.js\"></script>\n    <script src=\"/js/castelog.js\"></script>\n    <script src=\"/js/component/shellver-gui.js\"></script>\n    <script src=\"/js/component/shellver-gui-console.js\"></script>\n</head>","body":"<body>\n  <style>\n    .intersitial_1 {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: white;\n      cursor: pointer;\n    }\n    .intersitial_1 .el_1 {\n      display: table;\n      width: 100%;\n      height: 100%;\n    }\n    .intersitial_1 .el_1 .el_2 {\n      display: table-cell;\n      width: 100%;\n      height: 100%;\n      text-align: center;\n      vertical-align: middle;\n    }\n    .intersitial_1 .el_1 .el_2 .el_3 {\n      display: block;\n      font-size:20px;\n      text-shadow: 0 0 2px black;\n      font-weight: bold;\n    }\n    .intersitial_1 .el_1 .el_2 .el_4 {\n      display: block;\n      font-size:11px;\n      color: #666;\n      text-shadow: 0 0 0px white;\n      \n    }\n      html {\n        background:\n              radial-gradient(100% 100% at 100% 100%, #0000 46%,#0c1325 47% 53%,#0000 54%) 32px 32px,\n              radial-gradient(100% 100% at 0 0, #0000 46%,#0c1325 47% 53%,#0000 54%) 32px 32px,\n              radial-gradient(100% 100%, #0000 22%, #0c1325 23% 29%, #0000 30% 34%, #0c1325 35% 41%, #0000 42%)\n              #0f2323;\n        background-size: 64px 64px;\n      }\n  </style>\n  <div id=\"app\"></div>\n  <div class=\"intersitial_1\" onclick=\"this.remove()\">\n    <div class=\"el_1\">\n      <div class=\"el_2\">\n        <div class=\"el_3\">☣ shellver ☣</div>\n        <div class=\"el_4\">\n          <span>apps completas entre</span>\n          <br/>\n          <span>node.js y navegador</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"}}

window.addEventListener( "body",
function() {try {
const intersitial_1_matches = Castelog.metodos.una_seleccion_de_elementos_del_dom(null, ".intersitial_1");
const intersitial_1 = intersitial_1_matches[ 0 ];
console.log(intersitial_1);
} catch(error) {
console.log(error);
throw error;
}

} );
const PageForShellverGui = Castelog.metodos.un_componente_vue2("PageForShellverGui",
  "<div class=\"PageForShellverGui Component\">"
 + "    <ShellverGuiConsole />"
 + "    <ShellverGui />"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n");
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">"
 + "    <router-view></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"Home",
component:PageForShellverGui,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");