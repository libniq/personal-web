const curriculumEs = {
    sections: [
        {
            title: "Educación formal y experiencia laboral",
            subsections : [
                            {
                                title: "Educación formal",
                                experiences:[

                                                {  id: "1", date: "2012-2014", title: "Bachillerato"                                         
                                                , institution: "IES el Palau"   , city: "Sant Andreu de la Barca (España)"    , description: null},

                                                {   id: "2", date: "2015-2017", title: "CFGS Desarrollo de aplicaciones multiplataforma"      
                                                , institution: "IES Marianao"   , city: "Sant Boi (España)"                   , description: null },

                                            ]
                            },
                            {
                                title: "Experiencia laboral",
                                experiences:[

                                                {  id: "3",  date: "01/07/2017–01/07/2017", title: "Operario de almacén"           , institution: "PKW Logistic"   
                                                , city: "Abrera   (España)"    
                                                , description: `Seleccionar y clasificar piezas industriales y trasladarlas a 
                                                                diferentes contenedores industriales para el sector automobilístico.`},

                                                {  id: "4",  date: "14/08/2017–29/08/2017", title: "Operario de almacén"           , institution: "PKW Logistic",
                                                 city: "Abrera   (España)"    , 
                                                 description: `Seleccionar y clasificar piezas industriales y trasladarlas a 
                                                 diferentes contenedores industriales para el sector automobilístico.`},

                                                {   id: "5", date: "23/10/2017–28/12/2017", title: "Practicas de programación"     , institution: "Promaut",
                                                 city: "Sant Boi (España)"    , 
                                                 description: "Crear y configurar vistas para un sistema Legato Managing execution system."}
                                            ]
                            }
                    ] 
        },
        {
            title: "Herramientas de programación",
            subsections : [
                            {
                                title: "Lenguajes de marcado",
                                experiences:[
                                                {  id: "6",  tool: "HTML" , description : "Mayoritariamente html 4, hemos tocado html 5 en el modulo pero no en profundidad."},
                                                {  id: "7",  tool: "XML"  , description : "He hecho bastante XML en el modulo, también hemos aprendido a validarlos con su schema definition language."},
                                                {  id: "8",  tool: "JSON" , description : "Como conozco las reglas de los objetos y arrays de JavaScript, que son las mismas que JSON, también puedo definir datos con JSON fácilmente."}
                                            ]
                            },
                            {
                                title: "Lenguajes de programación",
                                experiences:[
                                                {   id: "9", tool: "JavaScript" , description :   `Nivel medio, conozco los principios propios de JavaScript, como closures, function scopes en js,
                                                                                        heréncia por prototipos, el traicionero this, parte de ES6... Destaco esto porque JavaScript,
                                                                                        aunque pueda parecer un lenguaje sencillo, oculta mucha complejidad para que sea más rápido programar,
                                                                                        y es necesario conocer como funcionan esos mecanismos para comprender lo que hace, es necesario 
                                                                                        entender que las variables de una función van a hacer hoist y van a subir a la parte superior de la función 
                                                                                        si no quieres redeclararlas en un if por ejemplo (a no ser que utilizes let o const). El mensaje principal que quiero 
                                                                                        transmitir es que no he reciclado mi conocimiento de un lenguaje basado en clases como Java 
                                                                                        como puedes hacer en mayor medida si de Java pasas a un lenguaje basado en clases como Python o PHP. 
                                                                                        Estos lenguajes son suficientemente parecidos a Java para que funcione esa estratégia, 
                                                                                        pero al ser JavaScript mucho más diferente, no funciona en absoluto. 
                                                                                        No me convenció en su momento que JavaScript no encajara
                                                                                        en el modelo mental que había dejado el aprender Java y me ha costado más adaptarse al propio modo de pensar de JavaScript. 
                                                                                        Sobretodo cuando buscaba reaprovechar lo que había aprendido de un lenguaje orientado a objetos con clases como java y en javascript 
                                                                                        simplemente no hay clases ( Las hay, pero no son clases como java, solo son una sintaxis más fácil para declarar prototipos ) 
                                                                                        Ahora no obstante me parece genial haber podido ver una forma diferente de conocer un lenguaje de programación.`},


                                                {  id: "10",  tool: "Java"       , description : `Nivel medio, Java es el lenguaje que más hemos trabajado en el curso.
                                                                                     Hemos practicado sockets, encriptación y threads como lo más destacable.
                                                                                      Disfruto mucho programando en Java, porque aunque no sea un lenguaje tan productivo 
                                                                                      como JavaScript, es tremendamente coherente y al tener tipos, la IDE te ayuda muchísimo
                                                                                       con los metodos, lo que hace programar en Java bastante ameno.`},

                                                {  id: "11",  tool: "PHP"        , description : `Nivel bajo, Pongo nivel bajo ya que al parecerse tanto la versión 5 a Java,
                                                                                     he programado sobretodo con lo que sabía de java y no he tenido que aprender muchas cosas
                                                                                      específicas de php, a diferencia de javascript. Lo empezé a aprender en el curso cuando 
                                                                                      hacía aplicaciones web por mi cuenta, es el primer lenguaje con el que empezé 
                                                                                      a hacer cosas medianamente útiles ( no solo un script para aprender a programar ) 
                                                                                      y ha sido de gran ayuda cuando estaba empezando a programar 
                                                                                      ya que que es fácil de configurar. Lo incluyo en el curriculum porque es un lenguaje
                                                                                      muy popular y que va bien poder trabajar con el.`},

                                                {  id: "12",  tool: "Python"     , description : `Nivel bajo, he hecho funciones y pequeños scripts, y lo hemos trabajado por encima en el módulo,
                                                                                     sabría programar de forma más productiva en Python que en PHP porque tambíen se parece a Java y la api es más consistente pero 
                                                                                     aparte de la heréncia multiple, al igual que PHP, no se muchas cosas específicas de este lenguaje, 
                                                                                     aunque me encantaría aprenderlas.`}
                                            ]
                            },
                            {
                                title: "Frameworks",
                                experiences:[
                                                {   id: "13", tool: "Bootstrap" , description : "He estudiado Bootstrap 3 en el modulo y lo he utilizado bastante por mi cuenta en paginas web. Esta página, aunque sea sencilla esta hecha con Bootstrap."},
                                                {  id: "14",  tool: "React"     , description : `Me encanta react, es una librería que me estoy esforzando por aprender en profundidad,
                                                                                     Me gustó mucho la idea de los componentes web cuando aprendí vue js, pero muy pocas empresas usan vue 
                                                                                     y por eso estoy aprendiendo react, ya que es muy similar, pero con más oportunidades laborales. 
                                                                                     Al ser estos frameworks tan tremendamente parecidos, estoy aprendiendo bastante rápido. 
                                                                                     Me falta aprender redux, aunque lo aprenderé también rápido ya que aprendí vuex y los dos son flux.`},
                                                {   id: "15", tool: "Laravel"   , description : `Me gusta y he usado bastante Laravel para hacer aplicaciones web y apis, 
                                                                                    se puede ser muy productivo trabajando con la base de datos con
                                                                                     el ORM y con la interfaz rest usando generadores de controladores. 
                                                                                     Me ha venido genial aprender Laravel sobretodo para entender el patrón MVC. 
                                                                                     Ya que vuelve el codigo mucho más limpio y comprensible.`}
                                            ]
                            },
                            {
                                title: "Otros",
                                experiences:[
                                                {   id: "16", tool: "CSS"   , description : `He estudiado CSS en el modulo, con Media queries y bastantes conceptos de
                                                                                 CSS3, aunque hay algunos aspectos de CSS3 que no domino aún. Aprender flexbox o algunas animaciones
                                                                                son algunos ejemplos de cosas que tengo pendientes de aprender.`},

                                                {   id: "17", tool: "SQL"   , description : "He aprendido SQL en el modulo con bastantes joints y un poco de plsql."},

                                                {   id: "18", tool: "Linux" , description : `Hemos estudiado y usado bastante terminal en el modulo, también lo he utilizado
                                                                                 bastante por mi cuenta ya que una vez que te acostumbras es bastante practico 
                                                                                 para npm y algunos comandos.`}
                                            ]
                            }
                    ] 
        },
        {
            title: "Lenguajes",
            subsections : [
                            {
                                title: null,
                                experiences:[

                                                {  id: "19", tool: "Inglés"  , description :   `Tengo buen nivel de inglés. Hago muchos cursos en inglés, veo videos y peliculas 
                                                                                    en inglés y leo bastantes libros difíciles ( no solo novelas, sino sobretodo libros de estratégia corporativa,
                                                                                    negocios, marketing, programación y temas que me parecen interesantes) en inglés. No tengo muy 
                                                                                    buena gramatica porque no hago ejercicios y no pienso en gramatica cuando hablo o escribo, hablo
                                                                                    sin traducir de forma fluida la gran mayoría de tiempo. Diría que puedo tener un nivel first certificate,
                                                                                    un poco más en lectura, comprensión y hablar, un poco menos en gramatica y escritura. 
                                                                                    Tengo pendiente el first certificate, pero de momento me estoy esforzando más en demostrar 
                                                                                    lo que se hacer en el ámbito de la programación ya que es más dificil de demostrar tus cualidades. 
                                                                                    Respecto al inglés si alguíen quiere verificar mi nivel, me ofrezco a hacer una entrevista en inglés o hablar de algún
                                                                                    tema que no haya habido posibilidad de preparar. Y de hecho agradecería que se me hiciera algún tipo
                                                                                    de prueba en la entrevista, ya que en España se suele poner más nivel que el que se tiene y me va 
                                                                                    bien que se sepa con confianza que tengo un nivel razonable.`},

                                                {  id: "20", tool: "Francés" , description : `Mi nivel no es el que me gustaría, ya que cuando no se practica se pierde. 
                                                                                  Estudié francés en secundaria; Luego lo estudié un tiempo por mi cuenta, 
                                                                                  he estado de intercambio cultural en la bretaña francesa, y en otra ocasión, 
                                                                                  durante algunos dias viviendo en París. A diferencia del inglés no lo uso 
                                                                                  dia a dia, y esta bastante olvidado. Pero me suelen decir que las lenguas 
                                                                                  se me dan bastante bien. Lo recordaría facilmente si fuera necesario.` },

                                                {  id: "21", tool: "Español" , description : "Nivel nativo."},

                                                {  id: "22", tool: "Catalán" , description : "Nivel nativo."}

                                            ]
                            }
                    ] 
        },
        {
            title: "Otros",
            subsections : [
                            {
                                title: null,
                                experiences:[
                                                {  id: "23", tool: "Permiso de conducir"  , description : "Dispongo de permiso de conducir B, vehiculo propio y conduzco habitualmente."},
                                            ]
                            }
                    ] 
        }

    ]
}

export default curriculumEs;