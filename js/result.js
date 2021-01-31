var points=sessionStorage.getItem("points")

function reset(){
    location.href="./index.html"
}

var head=document.getElementById("result-header")
var body=document.getElementById("result-body")

if(points>=4){
    head.innerText= "That's Nice! You've got "+points+" out of 6"
    body.innerText= "You worked hard and it paid off ! Nice work figuring out these questions, you earned it buddy !"}
    else{
        head.innerText= "Oops ! You've got only "+points+ " out of 6"
        body.innerText= "Marvel have created more Avengers than even the geekiest of geeks couldn't remember, but that doesn’t mean you shouldn’t try."}
