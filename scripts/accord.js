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

var myIndex = 0
carousel();

function carousel(){
    var i
    var x = document.getElementsByClassName("mySlides")
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none"
    }
    myIndex++
    if(myIndex > x.length){myIndex = 1}
    x[myIndex - 1].style.display = "block"
    setTimeout(carousel, 2000)
}