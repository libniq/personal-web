import PersonalWebpageImage from './../../img/vistaportada.png';
import BurgerBuilder from './../../img/burgerbuilder.png';

const projectsEn = {
    title: "Projects",
    pageExplanation : `In this page I will show some projects that I have programmed in order to show my skills, for now mainly with react and bootstrap. 
                       I have started being aware of how important is to have a portfolio of apps in order to advance my career as a programmer very recently
                       and sadly I just have two projects. However, I will be coding more soon.`,
    projects: [
        {
            title: "This page",
            description: `Although it might seem like an html only web page, 
                        due to the fact that It is not very interactive, the UI is made wide react components, 
                        so it would be really easy to consume the data from a backend 
                        for example as the information is not hard coded. When you change the language for example, 
                        it just changes the data dynamically with JavaScript instead
                        of refreshing the whole page, resulting in a better user experience. 
                        The layout has been done with the bootstrap css framework.`,
            githubLink: "https://github.com/libniq/personal-web",
            image: PersonalWebpageImage,
            imageDescription: "A screenshot of this page homepage."
        },
        {
            title: "Burger Builder",
            description: `This is the app that I am building with a react course that I have bought from udemy, 
                         I have to finish it yet, but I wanted to solidify the knowledge of react components with this page
                         before continuing the course with redux, once this page is running I will be working really hard to finish it and 
                         learn redux. As using vuex I found that flux is really useful in order to maintain clarity when the application grows.`,
            githubLink: "https://github.com/libniq/burger-builder",
            image: BurgerBuilder,
            imageDescription: "An image of a web page showing a Burger with some ingredients."
        }
    ]
}

export default projectsEn;