const elements = {
  soundOn: document.getElementById("soundOn"),
  soundOff: document.getElementById("soundOff"),
  stein: document.getElementById("stein"),
  buttonStart: document.getElementById("buttonStart"),
  blackscreen: document.getElementById("blackscreen"),
  intro: document.getElementById("intro"),
  instruction: document.getElementById("instruction"),
  notification: document.getElementById("notification"),
  inputName: document.getElementById("inputName"),
  buttonJoin: document.getElementById("buttonJoin"),
  divContainer: document.getElementById("divContainer"),
  inputCode: document.getElementById("inputCode"),
  buttonCode: document.getElementById("buttonCode"),
  objective1: document.getElementById("objective1"),
  objective2: document.getElementById("objective2"),
  objective3: document.getElementById("objective3"),
  introduction: document.getElementById("introduction"),
  yourCode: document.getElementById("yourCode"),
  code0: document.getElementById("code0"),
  signIn: document.getElementById("signIn"),
  stage1: document.getElementById("stage1"),
  linkArcher: document.getElementById("linkArcher"),
  developed: document.getElementById("developed"),
  objective: document.getElementById("objective"),
  introLoading: document.getElementById ("introLoading"),
  com: document.getElementById ("com"),
  comments: document.getElementById ("comments")
};

function showTextWithDelay(element, text, delay) {
  setTimeout(() => {
    element.textContent = text;
  }, delay);
}

showTextWithDelay(introLoading, "loading", 3000); 
showTextWithDelay(introLoading, "optimizing", 6000); 

setTimeout(()=>{
  introLoading.classList.add("hide")
},8500);

const showElementWithDelay = (element, delay, displayStyle = 'block') => {
  setTimeout(() => {
    element.style.display = displayStyle;
  }, delay);
};

const hideElementWithDelay = (element, delay) => {
  setTimeout(() => {
    element.classList.add("hide");
  }, delay);
};

setTimeout(() => {
  elements.notification.classList.add("hide");
  hideElementWithDelay(elements.developed, 4500);
}, 4500);

elements.soundOff.addEventListener("click", () => {
  elements.soundOff.style.display = "none";
  elements.soundOn.style.display = "block";
  elements.stein.play();
});

elements.buttonStart.addEventListener("click", () => {
  elements.blackscreen.classList.add("show");
  comments.style.display="none"
  setTimeout(() => {
    elements.blackscreen.classList.add("hide");
    elements.intro.style.display = "none";
  }, 4000);
});









buttonJoin.addEventListener("click", function () {
  let playerName = inputName.value; // Get player name
  instruction.textContent = "Welcome, " + playerName; // Update instruction text
  buttonJoin.style.display="none"

setTimeout( ()=> {
  let sentences = ["your goal is find the code", "you need to input it here:"];
  
  let i = 0;

  function text() {
    if (i < sentences.length) {
      let appearMyText = document.createElement("div");
      appearMyText.textContent = sentences[i];
      divContainer.appendChild(appearMyText); // Append to the div container
      i++;
      setTimeout(text, 2000);
      
      
      setTimeout(()=>{
          introduction.style.display="block"
        },3000);
      
      setTimeout(()=>{
        objective1.style.display="block";
        setTimeout(()=>{
        objective1.style.display="none"
        setTimeout(()=>{
        objective2.style.display="block";
        setTimeout(()=>{
        objective2.style.display="none"
        setTimeout(()=>{
        objective3.style.display="block";
        setTimeout(()=>{
        objective3.style.display="none"
        yourCode.style.display="block"
        code0.style.display="inline"
        signIn.style.display="none"
        
        setTimeout(()=>{
        stage1.classList.add("show")
        linkArcher.classList.add("show")
        
        linkArcher.addEventListener("click", function(){
        window.location.href = "index1.html";

  //game code should be game_code to prevent issue because of space, use underscore
        });
        
        },2000);
        
      },2500);
      },2000);
      },2500);
      },2000);
      },8500);
      },6500);
      
      
      
      
      
      
    }
  }
  text();
},2000);
});




const buttons = document.querySelectorAll('button');
  const audio = document.getElementById('audioPlayer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });

window.onload = () => {
  alert("I recommend to play this website if you have an internet connection");
  alert("This website is only compatible on mobile bruh")
  alert("Be cautious");
  alert("El Psy Congroo...");
};

com.addEventListener("click", function(){
  alert("How to display your comment/review?")
  alert("After you end the game, you will wait the credits end and you will see a review form")
})
