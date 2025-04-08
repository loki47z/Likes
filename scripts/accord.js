var acc = document.getElementsByClassName("accordion");
var i 
console.log(acc.length)

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling
        if(panel.style.display === "flex"){
            panel.style.display = "none"
        }
        else{
            panel.style.display = "flex"
        }
    });
}

function menu(){
    var x = document.getElementById("topnav")
    if(x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}

let slideIndex = 0;
showSlides();
function showSlides(){
    let i;
    let slides = document.getElementsByClassName("slides")
    let dots = document.getElementsByClassName("dot")
    for(i = 0; i < slides.length; i++){
        dots[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += "active"
    setTimeout(showSlides, 2000)
}