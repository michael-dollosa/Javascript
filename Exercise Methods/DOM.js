var p = document.getElementsByClassName("sample")
console.log("hello")
console.log(p[0].innerHTML)
console.log(p[0].textContent)

var bod = document.querySelector("body")
var but = document.querySelector("button")
but.addEventListener("click", function(){
    console.log("pota ka")
    bod.classList.toggle("purple")
})