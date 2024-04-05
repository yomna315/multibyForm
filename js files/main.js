let btn = document.getElementById(next);
let form = document.querySelector("#form1");
let form1 = document.querySelector("#form2");
let span = document.querySelector(".span1");
let span1 = document.querySelector(".span2");
let submit = document.querySelector("#submit");
let done = document.querySelector(".done");
next.onclick = function () {
    span.style="background-color: rgb(227, 97, 216)" ;
    form.style.display = "none";
    form1.style.display = "block";

};
submit.onclick = function () { 
    span.style = "background-color: rgb(227, 97, 216)";
    span1.style = "background-color: rgb(227, 97, 216)";
    form.style.display = "none";
    form1.style.display = "none";
    done.style.display="block"

}