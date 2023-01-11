const mainContainer=document.querySelector("#main-card")

const thanksContainer=document.querySelector("#Thank-you")

const submitButton=document.getElementById("btn-selector")

const Rating=document.getElementById("Rating")
const Rates=document.querySelectorAll(".btn")


const rateAgain=document.getElementById("rate-again")
//I AM ADDING AN EVENT LISTENER BELOW
//THIS SIMPLY MEANS THAT WHENEVER I CLICK 
//THE SUBMIT BUTTON IT SHOULD REMOVE the hidden class from the thankscontainer
//note that the thankcontainer has been set to a constant for the Thank-you id 


// also when i click the submit button it should hide (none display) the mainContainer
submitButton.addEventListener("click",()=>{thanksContainer.classList.remove("hidden");
mainContainer.style.display="none"})


rateAgain.addEventListener("click",()=>{thanksContainer.classList.add("hidden");
mainContainer.style.display="block"})

Rates.forEach((rate) => {rate.addEventListener("click",() =>{
    Rating.innerHTML= rate.innerHTML}) 

})