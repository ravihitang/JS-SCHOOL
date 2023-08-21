
let count = 0;
let counter =document.getElementById("counter");
let saveCounter = document.getElementById("states");
let increment=()=>
{
    count++;
    counter.innerText =count;
}
let save = ()=>{
    saveCounter.textContent+=`${count} - `;
    count=0;
    counter.textContent=0;
}