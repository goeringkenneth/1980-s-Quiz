var questions={
    position:0,
    questionList:[
        {
            // Top Gun
        question:"Two of your Snot-Nose Jockeys did a fly-by on my tower at over 400 KNOTS! I want somebody's butt, I want it now, I've HAD IT!",
        choices:["Big Trouble Little China","Airplane","Top Gun","Weird Science",],
        answer:3
    },
    {
        // The Goonies
        question:"Heyyy Yooouuu GuuuUUUyys!!!!",
        choices:["w","w","w","The Goonies",],
        answer:4
    },
    {
        // Airplane
        question:"Does anyone here speak Jive?",
        choices:["w","Airplane","w","w",],
        answer:2
    },
    {
        // Sixteen Candles 
        question:"Long Duck Dong has been here for five fours, and he's got somebody. I live here my whole life, and I'm like a disease.",
        choices:["Sixteen Candles","w","w","w",

        ],
        answer:1
    },
    {
        // Breakfast Club
        question:"Don't mess with the bull, young man. You'll get the horns.",
        choices:["w","w","w","Breakfast Club",

        ],
        answer:4
    },
    {
        // License To Drive
        question:"Now Anderson, I want you to take a good look at my cup of coffee. Now, I love my coffee. It's probably the only thing I cherish on this god forsaken mud ball called Earth!",
        choices:["License To Drive","w","w","w",

        ],
        answer:1
    },
    {
        // Weird Science
        question:" By the way, why are we wearing bras on our heads?",
        choices:["w","Weird Science","w","w",

        ],
        answer:2
    },
    {
        // Ferris Buller's Day Off
        question:" Pardon my French, but Cameron is so tight that if you stuck a lump of coal up his ass, in two weeks you'd have a diamond.",
        choices:["Ferris Buller's Day Off","w","w","w",

        ],
        answer:1
    },
    {
        // Then NeverEnding Story
        question:"Having a luck dragon with you is the only way to go on a quest.",
        choices:["w","w","w","Then NeverEnding Story",

        ],
        answer:4
    },
    {
        // Big Trouble in Little China 
        question:"This is Jack Burton in the Pork Chop Express, and I’m talkin’ to whoever’s listenin’ out there.",
        choices:["w","Big Trouble in Little China ","w","w",

        ],
        answer:2
    },
    ]
};

// run questions with index
function quizInfo(){
    var questionEl= questions.questionList[0].question;
    var questionEls=document.querySelector('.question p');
    questionEls.textContent=questionEl
    console.log(questionEl);
    function takeQuiz(){
    //  questions.questionList[0].choices=options;
    var options=document.querySelectorAll('.quiz button');
    options.forEach(option=>{
      option.addEventListener("click", function(){
        console.log(this);
        });
        });
        
    };
    takeQuiz();
    };
    quizInfo();