

const countElement = document.getElementById("count");
const increElement = document.getElementById("increment");
const decreElement = document.getElementById("decrement");

let count = 0;

increElement.addEventListener("click", () => {
    count++;
    updateCounter();
});
decreElement.addEventListener("click", () => {
    count--;
    updateCounter();
});

function updateCounter() {
    countElement.textContent = count;

    if (count < 0){ 
        countElement.style.color = "red";
        
    }
    else if (count > 0){
        countElement.style.color ="green";
    }
    else if (count > 0){
        countElement.style.color ="black";
    }
}
function Submit(){
let FName = document.getElementById('Name').Value;
let  Email = document.getElementById('Email').Value;
let TextA = document.getElementById('Textbox').Value;

const Name = FName;
const Gmail = Email;
const Message = TextA;


console.log(`Name: ${Name} Email: ${Gmail} Message:${Message}`);
alert(`Name: ${Name} Email: ${Gmail} Message:${Message}`);

}
const btn = document.getElementById('button');
btn.addEventListener('click',Submit);



