[ ] botones para histórico de comandos (antes y después)
[ ] botones del textarea I&O apartados a un lado
[ ] botones del textarea con label de texto añadido en pantallas grandes
[ ] link de ayuda en el shellver login
[ ] link de ir a consola local


[ ] Sintaxis de arroba final
    [ ] para generar UIs por plantillaje, o para otras
    [ ] que funcione igual que los ¡! como operadores inicializables
[ ] Corregir sintaxis dee apendice de generativa: interpelado y substituido (pueden permanecer, pero deben ser corregidas)
[ ] API de componentes dee Win7-Vue2-Calo(en sintaxis: ¡! y @)
    [ ] API de componentes UI
    [ ] API de componente volátil (deefinido al vuelo, como con ShellverGuiTester)
    [ ] Primera API de interacción: API de diálogos inmediatos (Vue2 / Calo + Win7 + HTML + Promise)
    Castelog.metodos.un_dialogo_interactivo(uid,plantilla,logica,estilos,asincronamente)
    desacoplo constantes {usuario, contrasenya} a partir de asíncronamente un diálogo interactivo con plantilla {
        <div class="window" role="dialog">
            <ControlDeTexto etiqueta="Usuario:" v-model="usuario" />
            <ControlDeTexto etiqueta="Contraseña:" v-model="contrasenya" />
            <LayoutHorizontal>
                <Boton v-on:click="">Cancelar</Boton>
                <Boton v-on:click="">Entrar</Boton>
            </LayoutHorizontal>
        </div>
        ### alternativamente: con plantilla donde / con plantilla como / con plantilla a partir de
        declaro clases de decorador a partir de {
            dialogo: una función donde {
                inicializo item.atributos.class con "".
                si item.atributos.class no contiene "dialog" incremento item.atributos.class en "dialog".
                inicializo item.atributos.role con "".
                si item.atributos.role no contiene "dialog" incremento item.atributos.role en "dialog".
            }
        }.
        retorno @div*.dialogo[
            @control.de.texto{etiqueta:"Usuario:",v_model:usuario}[]
            @control.de.texto{etiqueta:"Contraseña:",v_model:contrasenya}[]
            @layout.horizontal{}[
                @boton{v_on_click:cancelar}
                @boton{v_on_click:entrar}
            ]
        ]
    } con lógica donde retorno {
        método data donde retorno {
            usuario: "",
            contrasenya: ""
        }.
        propiedad methods como {
            entrar: una función donde {},
            cancelar: una función donde {}
        }
    }.
    [ ] Segunda API de interacción: API de menús contextuales:
    creo programa como una interfaz gráfica con plantilla donde {
        <div>
            <div class="tabs_panel">
                <ul class="tabs">
                    <li class="tab">Tab</li>
                    <li class="tab">Tab</li>
                    <li class="tab">Tab</li>
                    <li class="tab">Tab</li>
                </ul>
            </div>
            <div class="tab_viewer">
                <div class="tab_box">
                    <component :is="componente" v-on="eventos" v-bind="parametros" />
                </div>
            </div>
        </div>
    } con lógica donde {
        hago un componente vue2 con nombre "PaginaDeInicio" con plantilla {<div></div>}.
        hago un componente vue2 con nombre "PaginaDeContacto" con plantilla {<div></div>}.
        hago un componente vue2 con nombre "PaginaDeAyuda" con plantilla {<div></div>}.
        retorno {
            método data donde retorno {
                ruta: undefined,
                componente: undefined.
                eventos: undefined.
                parametros: undefined.
            }.
            propiedad watch como {
                ruta: ...
                componente: ...
                eventos: ...
                parametros: ...
            }
        },
    },
    
    [ ] Comprobar que con esta sintaxis pueden hacerse "rápidamente" programas interesantes.
        [ ] Login interactivo
        [ ] Programa con utilidades varias esparcidas por un árbol navegable
[ ] Shellver
    [ ] faltaría un explorador de ficheros
        [ ] uno local, basado en ranas-db/indexed-db
        [ ] uno remoto, basado en shellver/node.js
        [ ] que permita rutas (simples, redundantes)
        [ ] que permita la UI cargar y guardar ficheros desdee las consolas.
        [ ] y que se puedan abrir canales  desde shellver-server (aunque se broadcasteen los mensajes)
        [ ] testear la funcionalidad de elos canales con una barra de progreso
[ ] FuncOS
    [ ] Como programa huésped de ShellverGui
    [ ] Como potencial programa huésped/inyector de otros programas JavaScript
    [ ] Como canal entre las funciones - el código - y el usuario
    [ ] Como memoria persistent estandarizada multientorno (Shellver Filesystem API)
    [ ] Como sistema interoperativo (navegador/servidor) basado igual en JavaScript
    [ ] Como puerto de uso intensivo de Castelog