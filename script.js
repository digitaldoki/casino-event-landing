const reveals=document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const windowHeight=window.innerHeight
const elementTop=el.getBoundingClientRect().top

if(elementTop<windowHeight-100){
el.classList.add("active")
}

})

})

const floating=document.getElementById("floatingCta")

window.addEventListener("scroll",()=>{

if(window.scrollY>500){
floating.style.display="block"
}else{
floating.style.display="none"
}

})
