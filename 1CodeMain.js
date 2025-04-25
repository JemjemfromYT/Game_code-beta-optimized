const get = id => document.getElementById(id);

const firstCode = get("firstCode");
const buttonCode = get("buttonCode");
const inputCode = get("inputCode");
const loading = get("loading");
const pleaseWait = get("pleaseWait");
const stage2 = get("stage2");
const go2 = get("go2");
const respectButton = get("respectButton");
const achievement = get("achievement");
const showStage2 = get("showStage2");
const achievementPic = get("achievementPic");
const achievementDiv = get("achievementDiv");
const respectPic = get("respectPic");
const respect = get("respect");
const audio = get("audioPlayer");

let attempts = 10;

respectButton.addEventListener("click", () => {
  showStage2.style.display = "block";
  respect.play();
  achievement.play();
  respectButton.style.display = "none";

  setTimeout(() => {
    achievementDiv.style.opacity = "1";
    respectPic.classList.add("show");
    setTimeout(() => {
      respectPic.classList.add("hide");
    }, 7000);
  }, 1800);
});

buttonCode.addEventListener("click", () => {
  if (inputCode.value !== "8080") {
    attempts--;
    alert("Attempts remaining: " + attempts);

    if (attempts <= 0) {
      alert("No attempts remain");
      alert("Game over");
      alert("You know where should I take you, right?");
      alert("RIGHT!!!!!!?????");
    }

    if (attempts === 7) {
      alert("You are nearing the limit of your attempts...");
      alert("Would still like to continue?");
    }

    if (attempts === 3) {
      alert("Three attempts remaining...");
    }

    if (attempts === 0) {
      alert("You stubborn");
      alert("Just joking...");
      alert("Continue now");
      alert("But I already recorded through your flashlight");
      alert("Be cautious");

      setTimeout(() => {
        navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            torch: true
          }
        });
      }, 1);
    }
  }
});

setTimeout(() => {
  firstCode.classList.add("show");
}, 1000);

setTimeout(() => {
  loading.classList.add("show");
  setTimeout(() => {
    loading.style.display = "none";
    pleaseWait.classList.add("show");
    setTimeout(() => {
      pleaseWait.style.display = "none";
      stage2.classList.add("show");
      go2.classList.add("show");
    }, 4000);
  }, 4000);
}, 1);

go2.addEventListener("click", () => {
  window.location.href = "3CodeIndex.html";
});

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
