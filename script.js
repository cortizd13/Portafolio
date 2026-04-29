const menuBtn = document.querySelector(".menu");
const linksContainer = document.querySelector(".link-container");
const links = document.querySelectorAll(".link")

menuBtn.addEventListener("click",()=>{
    linksContainer.classList.toggle("open");
})


links.forEach(link =>{
    link.addEventListener("click",()=>{
        linksContainer.classList.remove("open");
    })
})

