

// variable for an active modal
let activeGifNum;

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
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
    ],
    // quiz #3
    [
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
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
        'What color is the sky?',
        'Always blue',
        'Sometimes blue',
        'Often red'
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
const goToFirstScreen = function(item) {
    console.log('returning to first screen', item);
    $('.first-screen').show();
    $('.video-container').hide();
}

const addQuizQuestions = function(videoIdNum) {
    console.log("Adding questions for video #", videoIdNum);
    $("#box1-label").text(quizQuestions[videoIdNum][0]);
    $("#box2-label").text(quizQuestions[videoIdNum][1]);
    $("#box3-label").text(quizQuestions[videoIdNum][2]);
}

// ---- Gif 3 & Video 3 ----------
const video = document.querySelector('#video');
video.addEventListener('ended', (event) => {
    // Add the quiz text
    addQuizQuestions(activeGifNum);
    $('#theQuiz').modal('show');
});

$(".gif-listener").on('click touchstart', e => {
    // parse the gif number
    activeGifNum = e.currentTarget.id.split('-')[1];
    console.log("Clicked on gif listener #", activeGifNum);
    $('.first-screen').hide();
    $('.video-container').show();
    video.play();
    return false;
});
// ------ end gif3 video3


// --- handler for submit on the quiz modal popup
const modalForm = document.querySelector('form');
modalForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form submission cancelled for ', event);
    // get the form elements
    const input = event.target.elements;
    // this assumes the input boxes are named box1, box2,  box3
    console.log("box1", input.box1.checked, "box2", input.box2.checked, "box3",  input.box3.checked);
    $('#theQuiz').modal('hide');

    // TODO change this to the rest of the video
    // This defaults to going back to the first screen
    goToFirstScreen();
});
