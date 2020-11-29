

// variable for an active modal
let activeGifNum;
// True if ending first video, false if ending second video
let isFirstVideo = true;

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
    // tiny fade in fade out (in ms)
    $('.video-container').fadeOut(100);
    $('.first-screen').fadeIn(100);
}


// This swaps out the quiz questions
const addQuizQuestions = function(videoIdNum) {
    console.log("Adding questions for video #", videoIdNum);
    $(".modal-title").text(quizQuestions[videoIdNum][0]);
    $("#box1-label").text(quizQuestions[videoIdNum][1]);
    $("#box2-label").text(quizQuestions[videoIdNum][2]);
    $("#box3-label").text(quizQuestions[videoIdNum][3]);
}

// ---- Start Gif click to video ----------
const video = document.querySelector('#video');
video.addEventListener('ended', (event) => {

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
                goToFirstScreen();
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

    // swap video source
    // Always loading the "a" video on GIF click
    const videoPath = `video/video-${activeGifNum}-b.mp4`;
    // Example: video/video-8-a.mov
    $('#video-source').attr("src", videoPath);
    video.load();
    video.play();
});
