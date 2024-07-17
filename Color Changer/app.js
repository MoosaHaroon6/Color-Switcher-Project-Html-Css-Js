const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const resetBtn = document.querySelector(".reset")

button.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const clickedBtn = e.target;
        const idBtn = clickedBtn.id;
        body.style.background = idBtn
        if (idBtn) {
            clickedBtn.innerHTML = `This is ${idBtn} color`
        }
        if (idBtn === "lightgrey") {
            clickedBtn.innerHTML = "Reset"
            resetAll(clickedBtn)
        }
    })

})

function resetAll(excludeBtn) {
    button.forEach((btn) => {
        if (btn !== excludeBtn) {
            btn.innerHTML = "";
        }
    });
}
