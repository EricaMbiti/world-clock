
function updateTime(){
let nairobiElement=document.querySelector("#nairobi");
let nairobiDateElement=nairobiElement.querySelector(".date");
let nairobitimeElement=nairobiElement.querySelector(".time");
let nairobiTime=moment().tz("Africa/Nairobi");

nairobiDateElement.innerHTML=moment().format("MMMM Do YYYY");
nairobitimeElement.innerHTML=nairobiTime.format("h:mm:ss [<small>]A [</small>]");

//Capetown
let bangkokElement=document.querySelector("#bangkok");
let bangkokDateElement=bangkokElement.querySelector(".date");
let bangkoktimeElement=bangkokElement.querySelector(".time");
let bangkokTime=moment().tz("Asia/Bangkok");

bangkokDateElement.innerHTML=moment().format("MMMM Do YYYY");
bangkoktimeElement.innerHTML=bangkokTime.format("h:mm:ss [<small>]A [</small>]");}

updateTime();
setInterval(updateTime,1000);