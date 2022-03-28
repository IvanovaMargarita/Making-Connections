var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections")
var userName = document.querySelector("#username")


function accept(id){
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;
  connectionSpan.innerText++;
}
function ignore(id){
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;

}  
function edit(){
  userName.innerText = "Vybz Kartel"
}