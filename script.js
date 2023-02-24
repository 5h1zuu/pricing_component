let toggle = document.querySelector(".toggle");
let toggleBtn = document.querySelector(".toggle-button")
let priceType = document.querySelector(".priceType")
let slider = document.getElementById("myRange")
let output = document.querySelector("h3")

function animatedToggle(){
    toggle.classList.toggle("active")
    let resetCol = `linear-gradient(90deg,rgb(214,214,214) 60%, rgb(214,214,214)60%)`;

    if(toggle.classList == "toggle active"){
        slider.value = 1
        output.innerText = 12
        slider.style.background = resetCol
        priceType.innerText = "/year"
    }
    else{
        slider.value = 1
        output.innerText = 1
        slider.style.background = resetCol
        priceType.innerText = "/month"
    }
}
toggleBtn.addEventListener("click", animatedToggle)


output.innerText = slider.value

slider.oninput = function(){
    if(priceType.innerText == "/month"){
        output.innerText = this.value
    }else if(priceType.innerText == "/year")
        output.innerText = this.value * 12
        
        

}

slider.addEventListener("input", () =>{
    let sliderVal = slider.value
    let color = `linear-gradient(90deg, rgb(1, 255, 221) ${sliderVal}%, rgb(214,214,214)${sliderVal}%`
    slider.style.background = color
})