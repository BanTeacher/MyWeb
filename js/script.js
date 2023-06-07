const modal = document.querySelector(".modal");
const viewBtn = document.querySelector(".btnView");
const closeBtn = document.querySelector(".modal > .close");
const bgBtns= document.querySelectorAll(".others > .bgBtn");

bgBtns.forEach(item=>{
    item.addEventListener("click", (e)=>{
        // alert(e.target.getAttribute("style"));
        const clickBtn = e.target;
        for(let el of bgBtns){
            el.classList.remove("on");
        }
        clickBtn.classList.add("on");
        const btnColor = clickBtn.getAttribute("style");
        console.log(btnColor);
        document.body.setAttribute("style", `${btnColor};`);
    });
});

viewBtn.addEventListener("click", (e) => {
    const target = e.target;
    console.log(modal.previousElementSibling);
    modal.previousElementSibling.classList.add("on");

    modal.style.display = "block";
    console.log(target.parentNode);
    let targetParent = target.parentNode;
    let targetImg = targetParent.firstElementChild;
    let targetName = targetImg.nextElementSibling;
    let targetDept = targetName.nextElementSibling;
    let targetMail = targetDept.nextElementSibling;
    console.log(targetImg, targetName);

    document.querySelector("#modalImage").src = targetImg.src;
    document.querySelector("#modalName").textContent = targetName.textContent;
    document.querySelector("#modalDept").textContent = targetDept.textContent;
    document.querySelector("#modalMail").textContent = targetMail.textContent;

    closeBtn.addEventListener("click", ()=>{
        modal.style.display = "none";
        modal.previousElementSibling.classList.remove("on");
    })
});