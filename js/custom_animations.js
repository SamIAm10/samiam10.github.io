function bounceUp() {
    document.getElementsByClassName("email-icon")[0].style.transition = "all .2s ease-in-out";
    document.getElementsByClassName("email-icon")[0].style.transform = "translate(30%, -30%)";
}

function bounceDown() {
    document.getElementsByClassName("email-icon")[0].style.transform = "translate(0, 0)";
}