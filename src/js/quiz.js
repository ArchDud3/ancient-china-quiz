correctAnswerBanner = document.querySelector(".correct-banner");
incorrectAnswerBanner = document.querySelector(".incorrect-banner");

document.querySelector(".correct-answer").addEventListener("click", correctAnswerFunction)
document.querySelector(".incorrect-answer").addEventListener("click", incorrectAnswerFn)
document.querySelector(".incorrect-answer2").addEventListener("click", incorrectAnswerFn)
document.querySelector(".incorrect-answer3").addEventListener("click", incorrectAnswerFn)

answeredAlready = false;

function correctAnswerFunction() {
    if(!answeredAlready) {
        correctAnswerBanner.style.display = "flex";
        correctAnswerBanner.style.animation = "bannerPopUp 1s";
        answeredAlready = true;
    }
}



function incorrectAnswerFn() {
    if(!answeredAlready) {
        incorrectAnswerBanner.style.display = "flex";
        incorrectAnswerBanner.style.animation = "bannerPopUp 1s";
        answeredAlready = true;
    }
}