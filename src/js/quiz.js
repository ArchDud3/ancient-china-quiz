correctAnswer = document.querySelector(".correct-answer");
correctAnswer.addEventListener("click", correctAnswerFn);
correctAnswerBanner = document.querySelector(".correct-banner");
correctAnswerBannerNext = document.querySelector(".correct-next");
correctAnswerBannerNext.addEventListener("click", correctAnswerBannerNextFn);

incorrectAnswer = document.querySelector(".incorrect-answer");
incorrectAnswer.addEventListener("click", incorrectAnswerFn);
incorrectAnswerBanner = document.querySelector(".incorrect-banner");

incorrectAnswer2 = document.querySelector(".incorrect-answer2");
incorrectAnswer2.addEventListener("click", incorrectAnswerFn);

incorrectAnswer3 = document.querySelector(".incorrect-answer3");
incorrectAnswer3.addEventListener("click", incorrectAnswerFn);

answeredAlready = false;

question2 = document.querySelector("#question2");

function correctAnswerFn() {
    if(!answeredAlready) {
        correctAnswerBanner.style.display = "flex";
        correctAnswerBanner.style.animation = "bannerPopUp 1s";
        answeredAlready = true;
    }
}
function correctAnswerBannerNextFn() {
    answeredAlready = false;
    question2.style.display = "initial";
    question2.style.animation = "slideContent 1s";
    incorrectAnswerBanner.style.animation = "bannerPopDown 1s";
    incorrectAnswerBanner.addEventListener("animationend", function() {
        incorrectAnswerBanner.style.display = "none";
    }, false);
    question2.style.left = "0%";
}


function incorrectAnswerFn() {
    if(!answeredAlready) {
        incorrectAnswerBanner.style.display = "flex";
        incorrectAnswerBanner.style.animation = "bannerPopUp 1s";
        answeredAlready = true;
    }
}