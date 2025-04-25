const get2 = id => document.getElementById(id);

const buttonCode22 = get2("buttonCode22");
const inputCode22 = get2("inputCode22");
const loading22 = get2("loading22");
const pleaseWait22 = get2("pleaseWait22");
const stage22 = get2("stage22");
const go22 = get2("go22");
const respectButton22 = get2("respectButton22");
const achievement22 = get2("achievement22");
const showStage22 = get2("showStage22");
const achievementPic22 = get2("achievementPic22");
const achievementDiv22 = get2("achievementDiv22");
const respectPic22 = get2("respectPic22");
const daisy22 = get2("daisy22");
const jumpscare22 = get2("jumpscare22");
const audioPlayer22 = get2("audioPlayer22");
const terrifying22 = get2("terrifying22");
const firstCode22 = get2("firstCode22");

let attempts22 = 10;
let t22 = 0;

go22.addEventListener("click", () => {
  t22++;
  setTimeout(() => {
    terrifying22.style.display = "block";
    jumpscare22.play();
    setTimeout(() => {
      terrifying22.style.display = "none";
    }, 1000);
  }, 1);

  if (t22 >= 3) {
    setTimeout(() => {
      terrifying22.style.display = "block";
      setTimeout(() => {
        alert("why?");
        alert("why why???");
        setTimeout(() => {
          alert(":)");
          alert(":,)");
          setTimeout(() => {
            alert(":,(");
            setTimeout(() => {
              alert("System alert: Unknown.");
              alert("repeat: GPS detected");
              alert("watch out on your flashlight");

              setTimeout(() => {
                navigator.mediaDevices.getUserMedia({
                  video: {
                    facingMode: "environment",
                    torch: true
                  }
                });
              }, 1);

              setTimeout(() => {
                window.location.href = "credits.html";
              }, 4500);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2500);
    }, 2500);

    daisy22.play();
  }
});

respectButton22.addEventListener("click", () => {
  showStage22.style.display = "block";
  respect22.play();
  achievement22.play();
  respectButton22.style.display = "none";

  setTimeout(() => {
    achievementDiv22.style.opacity = "1";
    respectPic22.classList.add("show");
    setTimeout(() => {
      respectPic22.classList.add("hide");
    }, 7000);
  }, 1800);
});

buttonCode22.addEventListener("click", () => {
  if (inputCode22.value !== "8080") {
    attempts22--;
    alert("Attempts remaining: ???");
  }
});

setTimeout(() => {
  firstCode22.classList.add("show");
}, 1000);

setTimeout(() => {
  loading22.classList.add("show");
  setTimeout(() => {
    loading22.style.display = "none";
    pleaseWait22.classList.add("show");
    setTimeout(() => {
      pleaseWait22.style.display = "none";
      stage22.classList.add("show");
      go22.classList.add("show");
    }, 4000);
  }, 4000);
}, 1);

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    audioPlayer22.play();
  });
});
