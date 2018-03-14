const curriculumEn = {
    sections: [
        {
            title: "Formal education & Work Experience",
            subsections : [
                            {
                                title: "Formal education",
                                experiences:[

                                                { id: "1" , date: "2012-2014", title: "High school Diploma", institution: "IES el Palau"   , 
                                                city: "Sant Andreu de la Barca (Spain)"    , description: null},
                                                
                                                { id: "2",  date: "2015-2017", title: "Higher Technician in Multi-platform Applications Development", 
                                                institution: "IES Marianao"   , city: "Sant Boi (Spain)"                   , description: null}

                                            ]
                            },
                            {
                                title: "Work Experience",
                                experiences:[

                                                { id: "3", date: "01/07/2017–01/07/2017", title: "Warehouse operator", institution: "PKW Logistic", 
                                                city: "Abrera   (Spain)"    , 
                                                description: `Select and classify industrial pieces and move them to different 
                                                industrial containers for the automotive industry`},

                                                { id: "4", date: "14/08/2017–29/08/2017", title: "Warehouse operator", institution: "PKW Logistic"   , 
                                                city: "Abrera   (Spain)"    , description: `Select and classify industrial pieces and move them to different
                                                 industrial containers for the automotive industry.`},

                                                { id: "5", date: "23/10/2017–28/12/2017", title: "Computer programmer internship", institution: "Promaut",
                                                 city: "Sant Boi (Spain)"    , description: "Create and configure views for a Legato Managing execution system."}

                                            ]
                            }
                    ] 
        },
        {
            title: "Programming tools",
            subsections : [
                            {
                                title: "Markup languages",
                                experiences:[                                   
                                                { id: "6",  tool: "HTML" , description : `Mostly html 4, I have studied html 5 in the Higher Technician course, 
                                                                                but not in depth.`},

                                                { id: "7",  tool: "XML"  , description : `I have done a fair amount of XML in the Higher Technician course.
                                                                                I've also learnt to validate them with the schema definition language.`},
                                                
                                                { id: "8",  tool: "JSON" , description : `As I know the rules of objects and arrays in JavaScript, which are the same of JSON,
                                                                                I know how to define JSON data with ease.`}
                                            ]
                            },
                            {
                                title: "Programming languages",
                                experiences:[                                        
                                                { id: "9",  tool: "JavaScript" , description :   `Medium level, I know specific concepts of JavaScript, like closures, JavaScript function
                                                                                        scopes hoist, prototype inheritance, the distrustful this, part of ES6 syntax... 
                                                                                        I am remarking this due to the fact that although JavaScript may seem a simple 
                                                                                        language, it does a lot of things for you in the background with the objective of being
                                                                                        more productive and you have to know them in order to code more effectively. 
                                                                                        You have to know for example that the variables of a function are going to be hoisted 
                                                                                        and they are going to be allocated at the top of the function if you do not want 
                                                                                        to redeclare them in an if for example ( unless you use let or const ).
                                                                                        The main message that I want to transmit is that 
                                                                                        I have learned the specific way of doing things in JavaScript instead of reusing 
                                                                                        the knowledge that I had in Java like you can do more successfully 
                                                                                        in PHP or Python. Those languages are enough similar to Java as to be able to do it,
                                                                                        but with JavaScript it does not work at all. I was not convinced some time ago when 
                                                                                        JavaScript did not fit in the mental model that I had when learning Java, 
                                                                                        and it has been more difficult to adapt to the own way of thinking in JavaScript,
                                                                                        especially with the structures related to classes, as JavaScript does not have them 
                                                                                        ( It has them but they are not classes like Java, they are just sintax sugar for 
                                                                                        declaring prototypes ). However, now I have found amazing learning the JavaScript 
                                                                                        way of looking at programming.`},

                                                { id: "10",  tool: "Java"       , description :   `Medium level, Java is the language that I have learned the most in the Higher
                                                                                        Technician course, I have done sockets, encrypting and threads as the most remarkable. 
                                                                                        I like coding in Java, although as a language is not as productive as JavaScript, it is tremendously
                                                                                        coherent and being a typed language, the IDE helps you a lot with methods, 
                                                                                        which makes programming in Java quite amusing.`},

                                                { id: "11",  tool: "PHP"        , description :   `Low level, I think that I have low level as being PHP 5 so similar to Java,
                                                                                        I have always programmed in PHP with the Java mentality and I have not learned
                                                                                        a lot of PHP specific things, in contrast with JavaScript. 
                                                                                        I leaned PHP on my own making web applications. It is the first language
                                                                                        where I started to make somewhat useful things ( not just an script to learn programming ),
                                                                                        And it has been a tremendous help while learning programming due to the fact 
                                                                                        that it is easy to configure. Although not very impressive, I have mentioned my experience 
                                                                                        in PHP as it is a very popular language and it is useful to know the basics.`},

                                                { id: "12",  tool: "Python"     , description :   `Low level, as with PHP I can program in Python as it is very similar to Java.
                                                                                        I have just done functions and small scripts, and we have done some exercises
                                                                                        in the Higher Technician course. I would be more productive in Python than in 
                                                                                        PHP cause the api is more consistent, but apart from multiple inheritance, i do not know 
                                                                                        a lot of specific things from this language.`}
                                            ]
                            },
                            {
                                title: "Frameworks",
                                experiences:[                                       
                                                { id: "13",  tool: "Bootstrap" , description : "I have studied Bootstrap 3 in the Higher Technician course and on my own."},

                                                { id: "14",  tool: "React"     , description : `I love react, it is a library that I am putting a lot of effort for learning it depth,
                                                                                     I loved the idea of web components when I started to learn vue js. But almost any company 
                                                                                     uses vue js and therefore I am learning react, which is almost the same library but more 
                                                                                     popular amongst companies and therefore with more job opportunities. 
                                                                                     Being those frameworks so similar, I am learning quite fast. I have to learn redux still,
                                                                                     although I think that I will learn it pretty fast too as I have learned vuex,
                                                                                     and vuex and redux have lots of similarities due to the fact that both are based on the flux design pattern.`},

                                                { id: "15",  tool: "Laravel"   , description : `I liked and I have used Laravel to make web applications and apis, 
                                                                                    you can be really productive working in the database with the ORM and with the REST interface
                                                                                    using controller generators. It has been tremendously useful learning Laravel due to the fact 
                                                                                    that you learn to organize your code following the MVC pattern, which makes your code more clear
                                                                                    and maintainable.`}
                                            ]
                            },
                            {
                                title: "Others",
                                experiences:[                                   
                                                { id: "16",  tool: "CSS"   , description : `I have studied CSS in the course, with media queries and some concepts of CSS3,
                                                                                 although I have to learn some concepts of CSS3 that I don't master still, 
                                                                                 flexbox or some animations are some examples of concepts that I will have to adress in the future.`},

                                                { id: "17",  tool: "SQL"   , description : "I have studied SQL in the course with joins and some plsql."},

                                                {  id: "18", tool: "Linux" , description : `I have learned to use the Linux command line on the course, once learned,
                                                                                 you get used to it and you also use it on your own cause it is really practical,
                                                                                 especially to run npm or Laravel commands.`}
                                            ]
                            }
                    ] 
        },
        {
            title: "Languages",
            subsections : [
                            {
                                title: null,
                                experiences:[                                    
                                                { id: "19", tool: "English" , description :   `I have a good English level. I do lots of online courses in English,
                                                                                    I watch videos and movies in English, I read a lot of difficult books 
                                                                                    ( not only novels, but corporate strategy books, business books, books about marketing,
                                                                                    programming and other interesting topics) in English. I may not have a very good grammar
                                                                                    or a very good spelling as I do not do drill exercices cause I am not used to think about
                                                                                    grammar when I speak or write, I speak without translating fluently most of the time. 
                                                                                    I would say that I am first certificate level, a bit more on reading, comprehension and speaking, 
                                                                                    a bit less on grammar and writing. I have got getting the first certificate planned in the future,
                                                                                    but now I am mainly focused on proving what I can do in the programming world, as it's much more 
                                                                                    difficult to prove your competency about your programming skills than to show your English level,
                                                                                    due to the fact that it is way easier to make a quick English test than to assess if you know some
                                                                                    programming language well. I would be willing to make any test or the entire interview in English
                                                                                    as in Spain is quite common to put more level than you have in the resumé so I would be very happy
                                                                                    to know that you know with confidence that I have a reasonable level.`},

                                                { id: "20", tool: "French"  , description :   `I have a basic level. I studied french in middle school and I did a cultural exchange in brittany.
                                                                                    In contrast with the English language, I do not use it every day and I have forgotten most of what I knew some day,
                                                                                    but I can read and understand a bit and I would remember the language very fast if necessary.`},

                                                { id: "21", tool: "Spanish" , description :   "Native level."},

                                                { id: "22", tool: "Catalan" , description :   "Native level."}
                                            ]
                            }
                    ] 
        },
        {
            title: "Others",
            subsections : [
                            {
                                title: null,
                                experiences:[
                                                { id: "23", tool: "Driving license"  , description : "I have got a class \"B\" driving license."},
                                            ]
                            }
                    ] 
        }

    ]
}

export default curriculumEn;