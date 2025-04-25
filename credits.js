const jumpscareButton = document.getElementById ("jumpscareButton")
const jumpscare = document.getElementById("jumpscare")
const visible = document.getElementById ("visible")
const outro = document.getElementById ("outro")
const review = document.getElementById ("review")
const pleaseWet = document.getElementById ("pleaseWet")




 
 
jumpscareButton.addEventListener("click", function(){
  
jumpscareButton.classList.add("show")
jumpscare.play()
jumpscare.classList.add("show")

setTimeout(()=>{
  jumpscare.classList.add("hide")
},7500);
setTimeout(()=>{
  review.classList.add("show")
  outro.classList.add("show")
  setTimeout(()=>{
    pleaseWet.style.opacity="1"
    setTimeout(()=>{
      pleaseWet.style.opacity="0"
    },3000);
  },3000);
},7900);

  jumpscareButton.style.display="none";
  

  
  outro.play();

  
  const buttons = document.querySelectorAll('button');
  const audio = document.getElementById('audioPlayer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });
  
  
  setTimeout(()=>{
    visible.style.display="none";
    
  },8650);
  
  
  
  alert("I am to tired rn and lazy at the same time to do the stage 3 so I end it up in a sudden")
  alert("there is no 2 code")
  alert("btw how is the flashlight? did you already turn off?")
          
});

/////////////

let output = document.getElementById ("output")

function buttonClick(){
  
let parms = {
  
  name : document.getElementById("nameId").value,
  message : document.getElementById ("messageId").value
  
}

emailjs.send("service_nlvctxc", "template_ktu8uj9", parms).then(alert("message sent successfully!"))
  
  setTimeout(()=>{
  console.log("sent")
  alert("Thats, all")
  alert("You may now exit")
  },7000);
  
  
output.textContent = nameId.value

output.textContent += " Your  message will be posted within 1-2 days"
}


const buttons = document.querySelectorAll('button');
  const audio = document.getElementById('audioPlayer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });