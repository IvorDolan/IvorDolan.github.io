

// variable for an active modal
let activeGifNum;
// True if ending first video, false if ending second video
let isFirstVideo = true;
let isSubmittedQuiz = false;


// no op quiz
const noop = function() {
    console.log(`no consequence for quiz ${activeGifNum}`);
    // return false for no consequence
    return false;
}

// quiz that links to other url
const openOtherLink = function(url) {
    window.open(url, "_self", );
    // return true for consequence
    return true;
}

// --- Questions with consequences ---
const quizConsequences = [
    // quiz 1
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 2
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 3
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 4
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 5
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 6
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 7
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 8
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
    // quiz 9
    {
        box1: [openOtherLink, "https://en.wikipedia.org/wiki/Glitch"],
        box2: [noop, null],
        box3: [noop, null],
    },
]



// --- The quiz questions -------
const quizQuestions = [
    // quiz #1
    [
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
    ],
    // quiz #2
    [
        'What are they looking at?',
        'The blue water',
        'the white clouds',
        'nothing'
    ],
    // quiz #3
    [
        'What is there in the forest?',
        'Some trees',
        'Dead leaves',
        'Something hidden'
    ],
    // quiz #4
    [
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
    ],
    // quiz #5
    [
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
    ],
    // quiz #6
    [
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
    ],
    // quiz #7
    [
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
    ],
    // quiz #8
    [
        'Where are you looking?',
        'At the car',
        'At the lights',
        'At who?'
    ],
    // quiz #9
    [
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
    ]
];

// --- Go back to main screen --
const goToMainScreen = function(item) {
    console.log('returning to first screen', item);
    // tiny fade in fade out (in ms)
    $('.video-container').fadeOut(100);
    $('.first-screen').fadeIn(100);
}

// Test if consequence
const doConsequence = function(index, box) {
    let consequence = quizConsequences[index];
    // Assumes first is function and second is param
    if (consequence[box] && consequence[box].length == 2) {
        consequence[box][0](consequence[box][1]);
    }
}

// This swaps out the quiz questions
const addQuizQuestions = function(videoIdNum) {
    console.log("Adding questions for video #", videoIdNum);
    const index = videoIdNum - 1;
    $(".modal-title").text(quizQuestions[index][0]);
    $("#box1-label").text(quizQuestions[index][1]);
    $("#box2-label").text(quizQuestions[index][2]);
    $("#box3-label").text(quizQuestions[index][3]);
}

// ---- Start Gif click to video ----------
const video = document.querySelector('#video');
video.addEventListener('ended', (event) => {
    doVideoEnded();
});

// Handle if quiz not submitted, background clicked
// Go back to home
$("#theQuiz").on("hide.bs.modal", function () {
    // Pause before show quiz or returning to main page
    setTimeout(() => {
            // if on first video, load the quiz
            if (!isSubmittedQuiz) {
                doVideoEnded();
            }
        },
        300);
});

$(".gif-listener").on('click touchstart', e => {
    // parse the gif number
    // example "gif-8" split on "-" is "gif" and "8";
    activeGifNum = e.currentTarget.id.split('-')[1];
    console.log("Clicked on gif listener #", activeGifNum);
    $('.first-screen').hide();
    $('.video-container').show();
    // reset quiz toggle
    isSubmittedQuiz = false;
    // swap video source
    // Always loading the "a" video on GIF click
    const videoPath = `video/video-${activeGifNum}-a.mp4`;
    // Example: video/video-8-a.mov
    $('#video-source').attr("src", videoPath);
    video.load();
    video.play();
    return false;
});
// ------ end gif click to video


// ---- FORM SUBMIT HANDLER -----------------------
// --- handler for submit on the quiz modal popup
const modalForm = document.querySelector('form');
modalForm.addEventListener('submit', event => {
    isSubmittedQuiz = true;
    event.preventDefault();
    console.log('Form submission cancelled for ', event);
    // get the form elements
    const input = event.target.elements;
    // this assumes the input boxes are named box1, box2,  box3
    console.log("box1", input.box1.checked, "box2", input.box2.checked, "box3",  input.box3.checked);
    $('#theQuiz').modal('hide');

    //TODO execute the consequence
    //input.box1.checked
    //true
    //input.box2.checked
    //false
    //input.box3.checked
    //false
    const boxes = ["box1", "box1", "box3"]
    boxes.forEach(box => {
        if (input[box].checked) {
            doConsequence(activeGifNum - 1, box);
        }
    })

    // swap video source
    // Always loading the "a" video on GIF click
    const videoPath = `video/video-${activeGifNum}-b.mp4`;
    // Example: video/video-8-a.mov
    $('#video-source').attr("src", videoPath);
    video.load();
    video.play();

});

const doVideoEnded = function() {
    // Pause before show quiz or returning to main page
    setTimeout(() => {
            // if on first video, load the quiz
            if (isFirstVideo) {
                // toggle off first screen boolean
                isFirstVideo = !isFirstVideo;
                // Add the quiz text
                addQuizQuestions(activeGifNum);
                $('#theQuiz').modal('show');
            } else {
                // toggle back on first screen boolean
                isFirstVideo = !isFirstVideo;
                // got back to home page
                goToMainScreen();
            }
        },
        300);
}
