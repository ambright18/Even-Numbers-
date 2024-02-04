console.log("Even numbers from 0 to 20 below: ");
function myFunction(){
var result = document.getElementById('result');
  for(var i=0; i <= 20; i += 2){
    result.innerHTML = i;
  }
}
myFunction();