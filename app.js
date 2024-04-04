
const btn = document.getElementById("button");
let i=0;
let direction=true;
btn.addEventListener('click', function() {
  if(direction===true && i<=10){
   btn.textContent = `Click me ${i++} `;
    if(i===10){
      direction=!direction;
    } 
  }
  else if (direction===false && i>=0){ 
    btn.textContent = `Click me ${i--}  `;
    if(i===0){
       direction=!direction;
    } 
  }
  });