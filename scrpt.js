let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let pc = document.querySelector(".pc");
let winmodel = document.querySelector(".win-model");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
let rulebtn = document.querySelector(".btn-rule");
let rulemodel = document.querySelector(".rule-model");
let ruleimg = document.querySelector(".rule-img");
let close = document.querySelector(".close");

console.log(computer);
let random = Math.floor(Math.random() * 3);
let triangle = document.querySelector(".tri-img");
let yourscore = JSON.parse(localStorage.getItem("yoursco"));
let comscore = JSON.parse(localStorage.getItem("comsco"));
let yourscoreElem = document.getElementById("yourscore");
let comscoreElem = document.getElementById("comscore");
if (yourscore) {
    yourscoreElem.innerText = yourscore;
}
if (comscore) {
    comscoreElem.innerText = comscore;
}


let wincount = 0;
let lostcount = 0;

con.forEach((element, index) => {
    element.addEventListener("click", () => {
        user.style.opacity = "1";
        triangle.style.display = "none";
        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");
        setTimeout(() => {
            pc.style.opacity = "1";
            setTimeout(() => {
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            }, 1000)
        }, 500);
        setTimeout(() => {
            if ((index == 0 && random == 2) || (index == 1 && random == 0) || (index == 2 && random == 1)) {
                winmodel.style.display = "grid";
                winner.innerText = "YOU WIN";
                wincount = yourscore;
                wincount++;
                yourscoreElem.innerText = wincount;
                localStorage.setItem("yoursco", JSON.stringify(wincount));
            } else if (index == random) {
                winmodel.style.display = "grid";
                winner.innerText = "TIE Up";
            } else {
                winmodel.style.display = "grid";
                winner.innerText = "YOU LOST";
                lostcount = comscore;
                lostcount++;
                comscoreElem.innerText = lostcount;
                localStorage.setItem("comsco", JSON.stringify(lostcount));
            }
        }, 1500)
    })
});

play.addEventListener("click", () => {
    window.location.reload();
})
rulebtn.addEventListener("click", () => {
    rulemodel.style.display = "flex";
    setTimeout(() => {
        ruleimg.style.transform = "translateY(0)";
    }, 400);
})
close.addEventListener("click", () => {
    ruleimg.style.transform = "translateY(-200)";
    setTimeout(() => {
        rulemodel.style.display = "none";
    }, 200);
})