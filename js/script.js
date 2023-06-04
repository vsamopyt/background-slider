
// VARIABLES
let buttons =document.querySelectorAll(".arrow");
let sliders = document.querySelectorAll(".slider");
let body =document.querySelector("body");
let count = 0;
 console.log(buttons[0]);
 console.log(sliders[0]);

// APP
buttons.forEach((button, index)=>{
    button.addEventListener("click", () => {
        setButtons (index)
        setActiveClass (count)
    })

})

// FUNCTIONS

// to set clear and set active claas and body background to the class picture
function setActiveClass (count) {
    let link;
    sliders.forEach(slider => {
        slider.classList.remove("active");
    })
    sliders[count].classList.add("active");
    link = sliders[count].getAttribute("style")
    body.setAttribute("style",link )  
}

// to work thhough buttons and index (count) for active class
function setButtons (index) {
    if(index === 0) {
        if(count != 0) {
            count--
        }
        else {
           count = sliders.length-1;
           }
    }
    else {
        if(count < sliders.length-1) {
            count++
        }
        else {
           count = 0;
           }
    }
    // return count;
}