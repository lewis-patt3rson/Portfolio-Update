const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


const accordion = document.querySelector(".accordion");

accordion.addEventListener('click', (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
})

function toggleAccordion(activatingPanel){
  const buttons = activatingPanel.parentElement.querySelectorAll("button");
  const contents = activatingPanel.parentElement.querySelectorAll(".accordion-content");

  buttons.forEach((button) =>{
    button.setAttribute("aria-expanded", false);
  })

  contents.forEach((content) =>{
    content.setAttribute("aria-hidden", true);
  })

  activatingPanel.querySelector("button").setAttribute("aria-expanded", true);
  activatingPanel.querySelector(".accordion-content").setAttribute("aria-hidden", false);
}