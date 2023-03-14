
Castelog.metodos.una_insercion_de_estilos_en_cascada("shellver-gui-console-specification-v1", ( ".ShellverGuiConsole textarea {\n        background: #000;\n        color: white;\n        text-shadow: 0 0 2px white;\n    }\n    .win7 table {\n        background-color: #ffffff;\n        color: black;\n        border-collapse: collapse;\n    }\n    .win7 table td {\n\n    }\n    .win7 table td.active {\n        border: 3px solid #111;\n    }\n    .win7 table td,\n    .win7 table {\n        border: 1px solid #d8d8e8;\n    }\n" ));
const ShellverGuiConsole = Castelog.metodos.un_componente_vue2("ShellverGuiConsole",
  "<div class=\"ShellverGuiConsole win7\">"
 + "    <div>"
 + "      <textarea class=\"\" style=\"width:100%;resize:vertical;\" v-model=\"plantilla_calo_interna\" placeholder=\"Código de plantilla\"></textarea>"
 + "      <div v-if=\"esta_mostrando_componente_de_test\">"
 + "        <component v-bind:is=\"'ShellverGuiConsoleTesterItem' + uuid\"></component>"
 + "      </div>"
 + "      <div v-else>"
 + "        <div class=\"marquee\" role=\"progressbar\"></div>"
 + "      </div>"
 + "      <div v-if=\"error\" style=\"background-color: red; color: white;\">"
 + "        <div>Tipo de error: {{ error.name }}</div>"
 + "        <div>Mensaje de error: {{ error.message }}</div>"
 + "        <div>Traza de error: {{ error.stack }}</div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ uuid:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(20, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
plantilla:{ type:String,
default:function() {try {
return "";
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
return { error:undefined,
esta_mostrando_componente_de_test:false,
plantilla_calo_interna:"retorno un código en html con { <div>\n  <table>\n    <tr>\n      <td>ID</td>\n      <td>Animal</td>\n      <td>Origen</td>\n      <td>Localización</td>\n      <td>Estado</td>\n      <td>Capital total</td>\n    </tr>\n    <tr>\n      <td>4624401N</td>\n      <td>Humano</td>\n      <td>Barcelona</td>\n      <td>Bonastre</td>\n      <td>Lamentable</td>\n      <td>0€</td>\n    </tr>\n    <tr>\n      <td>xxxxxxx1X</td>\n      <td>Humano</td>\n      <td>Igriega Taun</td>\n      <td>Equis Taunn</td>\n      <td>Pseee</td>\n      <td>algo hay €</td>\n    </tr>\n  </table>\n</div> }.\n        ",
plantilla_js_interna:"",
plantilla_resultado_interno:"",
renderizar_dilator_id:undefined,
renderizar_dilator_milisegundos:3 * 1000,
cerrar_error_dilator_id:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ renderizar_con_dilacion:function(  ) {try {
clearTimeout( this.renderizar_dilator_id );
this.renderizar_dilator_id = setTimeout( () => {try {
this.compilar_componente_de_test(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
this.renderizar_dilator_milisegundos );
} catch(error) {
console.log(error);
throw error;
}

},
mostrar_error:async function( error ) {try {
clearTimeout( this.cerrar_error_dilator_id );
this.error = error;
this.cerrar_error_dilator_id = setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
this.renderizar_dilator_milisegundos );
} catch(error) {
console.log(error);
throw error;
}

},
establecer_plantilla:function( texto ) {try {
this.plantilla_calo_interna = texto;
} catch(error) {
console.log(error);
throw error;
}

},
compilar_componente_de_test:async function(  ) {try {
const codigo_calo = this.plantilla_calo_interna;
console.log(codigo_calo);
this.plantilla_js_interna = Castelog_parser.parse( codigo_calo );
const codigo_js = "(function(){" + this.plantilla_js_interna + "})()";
console.log(codigo_js);
this.plantilla_resultado_interno = this.$window.eval( codigo_js );
Castelog.metodos.un_componente_vue2( 'ShellverGuiConsoleTesterItem' + this.uuid,
this.plantilla_resultado_interno,
function() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

} );
this.esta_mostrando_componente_de_test = false;
this.$forceUpdate( true );
(await Castelog.metodos.una_espera_de(1 * 1000, () => {try {
null
} catch(error) {
console.log(error);
throw error;
}
}));
this.esta_mostrando_componente_de_test = true;
this.$forceUpdate( true );
} catch(error) {
this.mostrar_error( error );}
},
descompilar_componente_de_test:function(  ) {try {
delete vue.options.components[ 'ShellverGuiConsoleTesterItem' + this.uuid ];
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ plantilla_calo_interna:function( nuevo_valor ) {try {
this.renderizar_con_dilacion(  );
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
this.compilar_componente_de_test(  );
} catch(error) {
console.log(error);
throw error;
}

},
unmounted() {try {
this.descompilar_componente_de_test(  );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);