let fullName = "Onkar";

function d_open(){
    document.getElementById("drawer").style.display = "flex";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";


    // document.getElementById("drawer").style.background = "yellow";
    console.log(fullName);
}
function d_close(){
    document.getElementById("drawer").style.display = "none";

}
function d_check(){
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn1").style.color = "blue";    
}
function p_btn(){
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("btn2").style.color = "blue"; 
}