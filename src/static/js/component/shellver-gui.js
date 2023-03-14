
Castelog.metodos.una_insercion_de_estilos_en_cascada("shellver-gui-specification-v1", ( ".ShellverGui .horizontal {\n          display: flex;\n          flex-direction: row;\n      }\n      .ShellverGui .w100 {\n          width: 100% !important;\n      }\n      .ShellverGui textarea {\n          min-height: 100px;\n          resize: vertical;\n      }\n      .ShellverGui.win7 textarea.code_input,\n      .ShellverGui.win7 textarea.code_output {\n        background-color: #110808;\n        color: #4F0;\n        text-shadow: 0 0 2px white;\n        font-size: 12px;\n      }\n      .ShellverGui.win7 textarea.code_input {\n          white-space: pre-wrap;\n      }\n      .ShellverGui.win7 textarea.code_output {\n        color: orange;\n      }\n      .ShellverGui.win7 [role=\"tabpanel\"] {\n        margin-bottom: 0px;\n        padding: 0px;\n      }\n      .ShellverGui.win7 .dense_button {\n        width: auto;\n        min-width: 30px;\n        padding-left: 2px;\n        padding-right: 2px;\n        padding-top: 2px;\n        padding-bottom: 2px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-top: 0px;\n        margin-bottom: 0px;\n        \n      }\n      .ShellverGui.win7 .dense_button_2 {\n        width: auto;\n        padding-left: 2px;\n        padding-right: 2px;\n        padding-top: 2px;\n        padding-bottom: 2px;\n        margin-right: 0px;\n        margin-bottom: 0px;\n        margin-top: 0px;\n        margin-bottom: 0px;\n        min-height: 9px;\n        min-width: 35px;\n        \n      }\n      .ShellverGui.win7 p {\n          padding-left: 10px;\n          padding-right: 10px;\n          \n      }\n      .ShellverGui.win7 .relative {\n          position: relative;\n      }\n      .ShellverGui.win7 .absolute_top_right_1 {\n          float: right;\n          position: absolute;\n          top: 4px;\n          right: 4px;\n          opacity: 0.7;\n      }\n      .ShellverGui.win7 .absolute_bottom_left_1 {\n          float: left;\n          position: absolute;\n          bottom: 4px;\n          left: 4px;\n          opacity: 0.7;\n      }\n      .ShellverGui.win7 button[role=\"tab\"] {\n          \n          padding: 2px;\n          min-height: 10px;\n          min-width: 10px;\n      }\n      .ShellverGui.win7 .small_text,\n      .ShellverGui.win7 .small_text span {\n        \n      }\n      .ShellverGui.win7 .small_title_bar {\n        padding-top: 3px;\n        padding-bottom: 1px;\n      }\n      .ShellverGui.win7 .window-body {\n        margin: 0 3px 3px;\n      }\n      .ShellverGui.win7 .force_small_text * {\n        \n        padding: 3x;\n        margin: 0x;\n      }\n      .ShellverGui.win7 .console_buttons {\n        padding: 2px;\n      }\n      .ShellverGui.win7 .console_buttons > * {\n        \n\n      }\n      .ShellverGui.win7 .title-bar {\n\n      }\n      .ShellverGui.win7 .status-bar {\n        margin: -3px 3px 3px;\n      }\n      .ShellverGui.win7 .nowrap {\n        white-space: nowrap;\n      }\n      .ShellverGui.win7 table.noborder {\n        border: none;\n        border-collapse: collapse;\n      }\n      .ShellverGui.win7 .window:before,\n      .ShellverGui.win7 .title-bar {\n        background: linear-gradient(90deg, hsla(0, 0%, 100%, .4), rgba(0, 0, 0, .1), hsla(0, 0%, 100%, .2)), linear-gradient(55deg, transparent, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, .1) 50%, transparent 53%), #ff222233 !important;\n      }\n      .ShellverGui.win7 ul.tree-view.has-container,\n      .ShellverGui.win7 .status-bar,\n      .ShellverGui.win7 [role=\"tabpanel\"],\n      .ShellverGui.win7 .window-body {\n        background: #00000033;\n        color: white;\n        text-shadow: 0 0 1px white;\n      }\n      .ShellverGui.win7 .flex_horizontal {\n        display: flex;\n        flex-direction: row;\n      }\n      .ShellverGui.win7 .flex_vertical {\n        display: flex;\n        flex-direction: column;\n      }\n      .ShellverGui.win7 .no_outline:focus,\n      .ShellverGui.win7 .no_outline {\n        outline: none;\n      }\n      .ShellverGui.win7 .warning_box {\n        background-color: #FFFF5533;\n        padding: 4px;\n        color: #FF0000;\n        text-shadow: 0 0 1px red;\n      }\n      .ShellverGui.win7 .warning_box > a {\n        color: white;\n      }\n" ));
window.ff = function() {try {
return 500;
} catch(error) {
console.log(error);
throw error;
}

};
const ShellverGuiConsoleForAny = Castelog.metodos.un_componente_vue2("ShellverGuiConsoleForAny",
  "<div class=\"ShellverGuiConsoleForAny Component\">"
 + "    <div class=\"flex_horizontal\" v-if=\"text_input_mode === 'js'\" v-bind:key=\"'shelver-gui-console-' + uuid + '-input-mode-1'\">"
 + "        <textarea class=\"code_input w100\" type=\"text\" v-model=\"text_input\" v-on:keyup=\"on_key_event_for_input\" ref=\"code_input_calo\" placeholder=\"Entrada calo\" />"
 + "        <div class=\"console_buttons\" style=\"display: flex; flex-direction: column;\">"
 + "            <div v-if=\"['nodejs','browser'].indexOf(env) !== -1\">"
 + "              <button class=\"dense_button_2\" v-on:click=\"toggle_code_language\" title=\"Cambiar a castelog\" v-if=\"$window.Castelog_parser\">→</button>"
 + "            </div>"
 + "            <button class=\"dense_button_2\" v-on:click=\"run_message\" title=\"Ejecutar javascript\">▶</button>"
 + "            <button class=\"dense_button_2 nowrap\" v-on:click=\"save_script\" title=\"Guardar script\">📁✔</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"load_script\" title=\"Cargar script\">📁?</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"execute_script\" title=\"Ejecutar script\">📁!</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"go_back_in_history\" title=\"Atrás en la historia\">▲</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"go_front_in_history\" title=\"Adelante en la historia\">▼</button>"
 + "        </div>"
 + "    </div>"
 + "    <div class=\"flex_horizontal\" v-else-if=\"text_input_mode === 'calo'\" v-bind:key=\"'shelver-gui-console-' + uuid + '-input-mode-2'\">"
 + "        <textarea class=\"code_input w100\" type=\"text\" v-model=\"text_input_2\" v-on:keyup=\"on_key_event_for_input_2\" ref=\"code_input_calo\" placeholder=\"Entrada calo\" />"
 + "        <div class=\"console_buttons\" style=\"display: flex; flex-direction: column;\">"
 + "            <div v-if=\"['nodejs','browser'].indexOf(env) !== -1\">"
 + "              <button class=\"dense_button_2\" v-on:click=\"toggle_code_language\" title=\"Cambiar a javascript\" v-if=\"$window.Castelog_parser\">←</button>"
 + "            </div>"
 + "            <button class=\"dense_button_2\" v-on:click=\"run_message_2\" title=\"Ejecutar castelog\">▶</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"parse_message_2\" title=\"Comprobar sintaxis castelog\">✔</button>"
 + "            <button class=\"dense_button_2 nowrap\" v-on:click=\"save_script_2\" title=\"Guardar script\">📁✔</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"load_script_2\" title=\"Abrir script\">📁?</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"execute_script_2\" title=\"Ejecutar script\">📁!</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"go_back_in_history_2\" title=\"Atrás en la historia\">▲</button>"
 + "            <button class=\"dense_button_2\" v-on:click=\"go_front_in_history_2\" title=\"Adelante en la historia\">▼</button>"
 + "        </div>"
 + "    </div>"
 + "    <div class=\"small_text\">"
 + "      <span>estado: </span>"
 + "      <span v-if=\"typeof status_bar_text === 'string'\">"
 + "        <span>{{ status_bar_text ? status_bar_text : parent.is_connected ? \"✔ cliente conectado\" : \"✘ cliente desconectado\" }}</span>"
 + "      </span>"
 + "      <span v-else-if=\"typeof status_bar_text === 'object'\">"
 + "        <span>{{ \"✘ \" + status_bar_text.message }}</span>"
 + "      </span>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ uuid:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(10, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
gui:{ type:Object,
default:function() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

}
},
env:{ type:String,
required:true
},
initialInputMode:{ type:String,
default:"calo"
},
state:{ type:Object,
default:function() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

}
},
parent:{ type:Object,
required:true
},
onExecute:{ type:Function,
default:function() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { status_bar_text_timeout_id:0,
status_bar_text:"",
text_input_mode:this.initialInputMode,
text_input:"",
text_input_history:[  ],
text_input_history_index:0 - 1,
text_input_2:( ( this.env === "nodejs" ? "\n                  retorno un escaneo de ficheros con ruta \".\".\n                " : "\n                  retorno `El agente de usuario de este cliente es: ${window.navigator.userAgent}`.\n                " ) ).replace( new RegExp( "\n[\t ]+",
"g" ),
"\n" ).trim(  ),
text_input_2_history:[  ],
text_input_2_history_index:0 - 1,

...(this.state )
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async run_message() {try {
const input = this.text_input;
this.text_input_history.unshift(input)
this.text_input = "";
const respuesta = (await this.onExecute( input,
this ));
this.text_input_history_index = 0 - 1;
this.parent.text_output = "[✔] " + ( JSON.stringify(respuesta.output, null, 2) ) + "\n" + this.parent.text_output;
this.$refs.code_input_js.focus(  );
} catch(error) {
this.parent.text_output = "error:\n  [env:" + this.env + "]\n  [date:" + ( Castelog.metodos.un_formateo_de_fecha(new Date(  ), null, "un formateo de fecha a texto") ) + "]\n  [error:" + error.name + "]\n>> " + error.message + "\n" + this.parent.text_output;}
},
save_script( evento ) {
},
load_script( evento ) {
},
execute_script( evento ) {
},
go_back_in_history( evento ) {try {
if((!(this.text_input_history_index < this.text_input_history.length - 1))) {
return;
}
this.text_input_history_index += 1;
this.text_input = this.text_input_history[ this.text_input_history_index ].trim(  );
} catch(error) {
console.log(error);
throw error;
}

},
go_front_in_history( evento ) {try {
if((!(this.text_input_history_index > 0))) {
return;
}
this.text_input_history_index -= 1;
this.text_input = this.text_input_history[ this.text_input_history_index ].trim(  );
} catch(error) {
console.log(error);
throw error;
}

},
on_key_event_for_input( evento ) {try {
if(evento.keyCode === 38 && evento.ctrlKey === true) {
this.go_back_in_history(  );
}
else if(evento.keyCode === 40 && evento.ctrlKey === true) {
this.go_front_in_history(  );
}
else if(evento.keyCode === 13) {
if(this.text_input.endsWith( "\n\n" )) {
return this.run_message(  );
}
else {
return true;
}
}
} catch(error) {
console.log(error);
throw error;
}

},
toggle_code_language() {try {
if(this.text_input_mode === "js") {
this.text_input_mode = "calo";
}
else {
this.text_input_mode = "js";
}
} catch(error) {
console.log(error);
throw error;
}

},
async run_message_2() {try {
const input_brute = this.text_input_2;
const input = this.$window.Castelog_parser.parse( input_brute );
this.text_input_2_history.unshift(input_brute)
this.text_input_2 = "";
const respuesta = (await this.onExecute( input,
this ));
this.text_input_2_history_index = 0 - 1;
this.parent.text_output = "[✔] " + ( JSON.stringify(respuesta.output, null, 2) ) + "\n" + this.parent.text_output;
this.$refs.code_input_calo.focus(  );
} catch(error) {
console.log(error);
this.parent.text_output = "error:\n  [env:" + this.env + "]\n  [date:" + ( Castelog.metodos.un_formateo_de_fecha(new Date(  ), null, "un formateo de fecha a texto") ) + "]\n  [error:" + error.name + "]\n>> " + error.message + "\n" + this.parent.text_output;}
},
clear_output() {try {
this.parent.text_output = "";
} catch(error) {
console.log(error);
throw error;
}

},
save_script_2( evento ) {
},
load_script_2( evento ) {
},
execute_script_2( evento ) {
},
go_back_in_history_2( evento ) {try {
if((!(this.text_input_2_history_index < this.text_input_2_history.length - 1))) {
return;
}
this.text_input_2_history_index += 1;
this.text_input_2 = this.text_input_2_history[ this.text_input_2_history_index ].trim(  );
} catch(error) {
console.log(error);
throw error;
}

},
go_front_in_history_2( evento ) {try {
if((!(this.text_input_2_history_index > 0))) {
return;
}
this.text_input_2_history_index -= 1;
this.text_input_2 = this.text_input_2_history[ this.text_input_2_history_index ].trim(  );
} catch(error) {
console.log(error);
throw error;
}

},
on_key_event_for_input_2( evento ) {try {
if(evento.keyCode === 38 && evento.ctrlKey === true) {
this.go_back_in_history_2(  );
}
else if(evento.keyCode === 40 && evento.ctrlKey === true) {
this.go_front_in_history_2(  );
}
else if(evento.keyCode === 13) {
if(this.text_input_2.endsWith( "\n\n" )) {
return this.run_message_2(  );
}
}
} catch(error) {
console.log(error);
throw error;
}

},
parse_message_2() {try {
const texto_js = this.$window.Castelog_parser.parse( this.text_input_2 );
this.text_input = texto_js;
this.set_temporary_status_bar( "✔ texto formal correcto." );
} catch(error) {
this.set_temporary_status_bar( error );}
},
set_final_status_bar( mensaje_arg ) {try {
clearTimeout( this.status_bar_text_timeout_id );
this.status_bar_text = mensaje;
} catch(error) {
console.log(error);
throw error;
}

},
async set_temporary_status_bar( mensaje_arg ) {try {
let mensaje = undefined;
if(typeof mensaje_arg === 'string') {
mensaje = mensaje_arg;
}
else if(typeof mensaje_arg === 'object') {
mensaje = mensaje_arg;
}
this.status_bar_text = mensaje;
clearTimeout( this.status_bar_text_timeout_id );
this.status_bar_text_timeout_id = setTimeout( () => {try {
this.status_bar_text = "";
} catch(error) {
console.log(error);
throw error;
}

},
4000 );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ text_input( valor ) {
}
},
mounted() {try {
this.parse_message_2(  );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);
window.shellver_gui_client = undefined;
/////////////////////////
// Ignorado por Castelog:
// `
// 
//     Balloon - Burbuja de ayuda
//     Button - Control de botón
//     CheckBox - Control de verificador
//     Collapse - Control de interruptor
//     Dropdown - Control de opción simple limitada
//     ComboBox - Control de opcion simple buscable
//     ListBox - Control de opción compuesta
//     GroupBox - Conjunto de controles
//     Navigation - 
//         Menu
//         MenuBar
//     OptionButton
//     ProgressBar
//     Scrollbar
//     Slider
//     Spinner
//     Tabs
//     TextBox
//     TreeView
//     Window
//         Title Bar
//         Window body
//         Status Bar
//         Glass frame & Color
//         Dialog Box`;

const ShellverGui = Castelog.metodos.un_componente_vue2("ShellverGui",
  "<div class=\"ShellverGui Component win7\">"
 + "    <div class=\"window glass\">"
 + "      <div class=\"title-bar small_title_bar\">"
 + "        <div class=\"title-bar-text small_text\"> ☢ shellver ☢ </div>"
 + "      </div>"
 + "      <div class=\"window-body small_text\" style=\"padding: 0px;\">"
 + "        <section class=\"tabs\">"
 + "          <menu role=\"tablist\">"
 + "            <button role=\"tab\" v-on:click=\"() => selected_tab = 'nodejs'\" :aria-selected=\"selected_tab === 'nodejs'\">remota</button>"
 + "            <button role=\"tab\" v-on:click=\"() => selected_tab = 'browser'\" :aria-selected=\"selected_tab === 'browser'\">local</button>"
 + "            <button role=\"tab\" v-on:click=\"() => selected_tab = 'help'\" :aria-selected=\"selected_tab === 'help'\"> ? </button>"
 + "          </menu>"
 + "          <article role=\"tabpanel\" v-show=\"selected_tab === 'nodejs'\" v-bind:key=\"'shellver-gui-'+uuid+'-nodejs-tab'\">"
 + "            <div v-if=\"!is_connected\">"
 + "              <div class=\"warning_box small_text\">☢ atención ☢: para acceder a un entorno <a href=\"#\">node.js</a> y no simplemente al <a href=\"#\">navegador</a>, introduce detalles del <a href=\"#\">shellver-server</a> objetivo:</div>"
 + "              <table class=\"w100 noborder small_text\">"
 + "                <tr>"
 + "                  <td style=\"text-align: right; width: 1%;\">"
 + "                    <span>servidor: </span>"
 + "                  </td>"
 + "                  <td colspan=\"100\" class=\"w100\">"
 + "                    <input class=\"w100 small_text\" type=\"text\" v-model=\"login_server\" />"
 + "                  </td>"
 + "                </tr>"
 + "                <tr>"
 + "                  <td style=\"text-align: right;\">"
 + "                    <span>puerto: </span>"
 + "                  </td>"
 + "                  <td colspan=\"100\">"
 + "                    <input class=\"w100 small_text\" type=\"text\" v-model=\"login_port\" />"
 + "                  </td>"
 + "                </tr>"
 + "                <tr>"
 + "                  <td style=\"text-align: right;\">"
 + "                    <span>contraseña: </span>"
 + "                  </td>"
 + "                  <td class=\"w100\">"
 + "                    <input class=\"w100 small_text\" type=\"password\" v-model=\"login_password\" />"
 + "                  </td>"
 + "                  <td class=\"w100\" style=\"text-align: right; \" colspan=\"100\">"
 + "                    <button class=\"dense_button small_text\" v-on:click=\"login_attempt\">conectarse</button>"
 + "                  </td>"
 + "                </tr>"
 + "              </table>"
 + "              <div style=\"min-height: 4px;\"></div>"
 + "            </div>"
 + "            <ShellverGuiConsoleForAny v-else :parent=\"this\" :gui=\"this\" env=\"nodejs\" :state=\"{}\" :on-execute=\"run_in_nodejs\" />"
 + "          </article>"
 + "          <article role=\"tabpanel\" v-show=\"selected_tab === 'browser'\" v-bind:key=\"'shellver-gui-'+uuid+'-browser-tab'\">"
 + "            <ShellverGuiConsoleForAny :parent=\"this\" :gui=\"this\" env=\"browser\" :state=\"{text_input:'window.alert(`hello from the browser!`)'}\" :on-execute=\"run_in_browser\" />"
 + "          </article>"
 + "          <article class=\"force_small_text\" role=\"tabpanel\" v-show=\"selected_tab === 'help'\">"
 + "            <div>"
 + "              <h4>ShellverGui: un cliente gráfico básico para <b>shellver-server</b></h4>"
 + "              <div>"
 + "                <p>ShellverGui es un ejemplo básico de lo que puedes hacer con la API de <a href=\"\">shellver</a> fácilmente. Con ShellverGui podrás:</p>"
 + "                <ul>"
 + "                  <li>ejecutar node.js en el shellver-server</li>"
 + "                  <li>ejecutar js del lado cliente</li>"
 + "                  <li>utilizar castelog en lugar de js</li>"
 + "                  <li>guardar códigos para ejecutar posteriormente</li>"
 + "                </ul>"
 + "                <p>ShellverGui (de Shellver Graphical User Interface) es una interfaz gráfica basada en HTML que brinda una vía rápida de conexión con servudires shellver-server. Es deecir: con un fichero HTML y tu navegador puedes conectarte a un servicio web remoto y ejecutar comandos en node.js (desdee el navegador) a través de js o castelog.</p>"
 + "                <p>Por tanto, puedes usar ShellverGui para ejecutar scripts en calo para entorno de navegador (local) así como para entorno de servidor (remota).</p>"
 + "                <p>Shellver atiende al nombre de Shell + Server, dado que la funcionalidad final es \"abrir una shell para node\", aunque sea como cliente único y seguro, de forma no persistente, ni intrusiva, ni malintencionada.</p>"
 + "                <p>Lo más importante de entender es que este cliente requiere de un servidor shellver-server al cual conectarse para exponer todas sus capacidades.</p>"
 + "                <p>De lo contrario, todavía sigue siendo un cliente capaz de ejecutar javascript/castelog de forma local, por lo cual de adquirir recursos en línea y utilizarlos para extender los datos y las funciones de la aplicación.</p>"
 + "                <p>Para más información, visita la documentación del proyecto en <a href=\"https://github.com/allnulled/shellver\">https://github.com/allnulled/shellver</a>.</p>"
 + "              </div>"
 + "            </div>"
 + "          </article>"
 + "        </section>"
 + "        <div class=\"flex_horizontal\" v-bind:key=\"'shelver-gui-console-' + uuid + '-output-panel'\" v-show=\"((!is_connected) && selected_tab === 'browser') || (is_connected && selected_tab !== 'help')\">"
 + "          <textarea class=\"code_output w100\" disabled=\"true\" v-model=\"text_output\" ref=\"code_output\" placeholder=\"Salida\" />"
 + "          <div class=\"console_buttons\" style=\"display: flex; flex-direction: column;\">"
 + "            <button class=\"dense_button_2\" v-on:click=\"clear_output\">✘</button>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"status-bar small_text\" v-if=\"!is_connected && selected_tab === 'nodejs'\">"
 + "        <div class=\"status-bar-field\">"
 + "          <span>estado: </span>"
 + "          <span>✘ cliente desconectado, solo <a href=\"#\">entorno local</a> accesible.</span>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ uuid:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(10, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { login_server:"127.0.0.1",
login_port:"",
login_password:"",
is_connected:false,
is_overview_selected:false,
text_output:"",
opened_apps:[  ],
selected_memory_tab:"files",
selected_tab:"nodejs",
on_exit_event:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ run_in_nodejs( input,
shellver_gui_console ) {try {
return this.$window.shellver_gui_client.run_in_nodejs( input );
} catch(error) {
console.log(error);
throw error;
}

},
run_in_browser( input,
shellver_gui_console ) {try {
const Castelog = this.$window.Castelog;
return this.$window.eval( "(async () => {\n  try{\n\n" + input + "\n\n} catch (error) {\n  throw error;\n}})().then(o => ({output:o}))\n" );
} catch(error) {
console.log(error);
throw error;
}

},
clear_output() {try {
this.text_output = "";
} catch(error) {
console.log(error);
throw error;
}

},
print( mensaje ) {try {
this.text_output = mensaje + "\n" + this.text_output;
} catch(error) {
console.log(error);
throw error;
}

},
login_attempt() {
},
toggle_shellver_overview() {try {
this.is_overview_selected = (!(this.is_overview_selected));
} catch(error) {
console.log(error);
throw error;
}

},
on_exit() {try {
for(let index = 0; index < 1000 * 1000 * 1000; index++) {this.$window.shellver_gui_client.run_in_nodejs( function() {try {
return process.exit( 0 );
} catch(error) {
console.log(error);
throw error;
}

} );}
console.log("Cerrando servidor....");
for(let index = 0; index < 1000000 * 20000 * 5; index++) {}
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
if(typeof window.shellver_gui_client === 'undefined') {
window.shellver_gui_client = new window.ShellverClient( window.location.host,
{ password:"x",
on_connect:() => {try {
this.is_connected = true;
this.print( "[✔] Conexión «shellver-client» exitosa a: " + this.$window.shellver_gui_client.url );
} catch(error) {
console.log(error);
throw error;
}

},
on_disconnect:() => {try {
this.is_connected = false;
this.print( "[✔] Desconexión de «shellver-client» a: " + this.$window.shellver_gui_client.url );
} catch(error) {
console.log(error);
throw error;
}

}
} );
}
this.$window.shellver_gui_client.on( "shellver-gui-" + this.uuid + "-listener-1",
function( evento,
datos ) {try {
console.log(evento);
console.log(datos);
} catch(error) {
console.log(error);
throw error;
}

} );
this.on_exit_event = () => {try {
return this.on_exit(  );
} catch(error) {
console.log(error);
throw error;
}

};
this.$window.onunload = this.on_exit_event;
window.xxx = this;
} catch(error) {
console.log(error);
throw error;
}

},
unmounted() {try {
this.$window.shellver_gui_client.off( "shellver-gui-" + this.uuid + "-listener-1" );
this.$window.onunload = undefined;
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);