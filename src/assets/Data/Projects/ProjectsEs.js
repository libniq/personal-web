import PersonalWebpageImage from './../../img/vistaportada.png';
import BurgerBuilder from './../../img/burgerbuilder.png';

const projectsEs = {
    title: "Proyectos",

    pageExplanation : `En esta página enseñaré algunos proyectos que he programado con el objetivo de mostrar mis habilidades,
                       por ahora principalmente con react y bootsrap,
                       He empezado a ser consciente de lo importante que es tener un portfolio de aplicaciones para 
                       avanzar mi carrera como programador y lamentablemente solo tengo dos proyectos para enseñar, pero haré más en un futuro.`,      
    projects: [
        {
            title: "Esta página",
            description: `Aunque pueda parecer una pagina solo hecha con html ya que no es muy interactiva, la interfaz de usuario esta hecha completamente con
                            componentes react. Así que sería tremendamente fácil consumir los datos de un backend por ejemplo ya que la información no esta escrita 
                            directamente en el html. Cuando cambias el lenguaje por ejemplo, cambias los datos dinamicamente con JavaScript en vez de refrescar 
                            la página entera, resultando en una mejor experiencia de usuario. La interfaz está hecha con el framework de css bootstrap.`,
            githubLink: "https://github.com/libniq/personal-web",
            image: PersonalWebpageImage,
            imageDescription: "Una captura de pantalla de la pagina principal de este sitio web."
        },
        {
            title: "Constructor de hamburguesas",
            description: `Esta es la aplicación que estoy programando con el curso de react que he comprado en udemy,
                          Tengo que terminarlo aún, pero quería solidificar el conocimiento sobre componentes react antes de continuar con redux
                          haciendo esta página. Una vez esta página esté acabada empezaré a trabajar duro para aprender redux. Como ya aprendí vuex y es bastante similar
                          espero aprenderlo rápido. Usando vuex llegué a la conclusión de que flux ayuda muchísimo a mantener la claridad de la aplicación cuando va creciendo.`,
            githubLink: "https://github.com/libniq/burger-builder",
            image: BurgerBuilder,
            imageDescription: "Una imagen que muestra una hamburgesa con unos cuantos ingredientes."
        }
    ]
}

export default projectsEs;