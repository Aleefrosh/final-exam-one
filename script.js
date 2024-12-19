const additionBtn = document.getElementById("additionBtn")
 const subtractionBtn = document.getElementById("subtractionBtn")
 const multiplicationBtn = document.getElementById("multiplicationBtn")
 const divisionBtn = document.getElementById("divisionBtn")
 const modulusBtn = document.getElementById("modulusBtn")
 const sqarerootBtn = document.getElementById("squarerootBtn")
 const resetBtn = document.getElementById("resetBtn")
 let count = 0;

 additionBtn.onclick = function(){
    count++;
     theme1.textContent = count;
    theme.textContent = "CALCULATING..."
 }
 subtractionBtn.onclick = function(){
     count--;
     theme1.textContent = count;
    theme.textContent = "CALCULATING..."
 }
 multiplicationBtn.onclick = function(){
   count++;
  theme1.textContent = count;
   theme.textContent = "CALCULATING..."
}
divisionBtn.onclick = function(){
   count--;
  theme1.textContent = count;
   theme.textContent = "CALCULATING..."
}
modulusBtn.onclick = function(){
   count++;
  theme1.textContent = count;
   theme.textContent = "CALCULATING..."
}
squarerootBtn.onclick = function(){
   count--;
  theme1.textContent = count;
   theme.textContent = "CALCULATING..."
}
resetBtn.onclick = function(){
   count = 0;
  theme1.textContent = count;
   theme.textContent = "CALCULATOR"
}