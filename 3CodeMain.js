// Created by r8w9

const get3 = id => document.getElementById(id);

window.onload = function () {
  alert("on this game, you must score at least 1 point.");
  alert("if you score 1 point, I will give you the second code");
  alert("if only you can score");
  alert("good luck!");

  const stage2Div = get3("stage2Div");
  const showStage2 = get3("showStage2");
  const letmeknow = get3("letmeknow");

  showStage2.addEventListener("click", function () {
    stage2Div.style.opacity = "1";
    letmeknow.play();
    showStage2.style.display = "none";

    let c;
    const canvas = document.querySelector("canvas");
    c = canvas.getContext("2d");
    c.width = 300;
    c.height = 200;

    let ballX = c.width / 2;
    let ballY = c.height / 2;
    const ballRadius = 4;
    let dx = 1;
    let dy = 1;

    let paddle1X = 0, paddle1Y = 80, paddle1WIDTH = 3, paddle1HEIGHT = 35;
    let paddle2X = 297, paddle2Y = 80, paddle2WIDTH = 3, paddle2HEIGHT = 35;
    let score1 = 0, score2 = 0;
    const AI = 0.9;

    window.addEventListener("mousemove", function (event) {
      paddle1Y = event.clientY - innerHeight / 2 - paddle1HEIGHT / 2 + c.height / 2;
      event.preventDefault();
    });

    canvas.addEventListener("touchmove", function (e) {
      const rect = canvas.getBoundingClientRect();
      const root = document.documentElement;
      const touch = e.changedTouches[0];
      const touchY = parseInt(touch.clientY) - rect.top - root.scrollTop;
      e.preventDefault();
      paddle1Y = touchY - paddle1HEIGHT / 2;
    });

    function dealWithKeyboard(e) {
      if (e.keyCode === 81) paddle1Y -= 2;
      else if (e.keyCode === 65) paddle1Y += 2;
      if (e.keyCode === 38) paddle2Y -= 2;
      else if (e.keyCode === 40) paddle2Y += 2;
    }

    function reset() {
      ballX = c.width / 2;
      ballY = c.height / 2;
      dx = 1;
      dy = 1;
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, c.width, c.height);

      c.beginPath();
      c.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, false);
      c.fill();
      c.stroke();

      c.beginPath();
      c.fillRect(paddle1X, paddle1Y, paddle1WIDTH, paddle1HEIGHT);

      c.beginPath();
      c.fillRect(paddle2X, paddle2Y, paddle2WIDTH, paddle2HEIGHT);

      c.fillText(score1, 100, 10);
      c.fillText(score2, c.width - 100, 10);

      const gameColors = ['red', 'green', 'blue', 'black', 'brown', '#741a1a', '#121f1f'];
      const randomColor = gameColors[Math.floor(Math.random() * gameColors.length)];

      function paddle2Bounce() {
        if (ballX + ballRadius > c.width) {
          if (ballY >= paddle2Y && ballY <= paddle2Y + paddle2HEIGHT) {
            dx = -dx - 0.2;
            c.fillStyle = randomColor;
          } else {
            score1++;
            reset();
          }
        }
      }

      function paddle1Bounce() {
        if (ballX - ballRadius < 0) {
          if (ballY >= paddle1Y && ballY <= paddle1Y + paddle1HEIGHT) {
            dx = -dx + 0.2;
            c.fillStyle = randomColor;
          } else {
            score2++;
            if (score2 === 2) alert("I didn't know you're noob");
            if (score2 === 5) alert("good dog");
            if (score2 === 8) {
              alert("you're a fool");
              alert("I am sorry");
              alert("actually this game was");
              alert("actually this game was programmed through algorithm which is there is no way you can defeat the AI");
              alert("the code is");
              alert("the code is 80**");
              window.location.href = "2CodeIndex.html";
            }
            reset();
          }
        }
      }

      function topBottomBounce() {
        if (ballY + ballRadius > c.height || ballY - ballRadius < 0) {
          dy = -dy;
        }
      }

      function stayInCanvas() {
        if (paddle1Y + paddle1HEIGHT > c.height) paddle1Y = c.height - paddle1HEIGHT;
        if (paddle1Y < 0) paddle1Y = 0;
        if (paddle2Y + paddle2HEIGHT > c.height) paddle2Y = 165;
        if (paddle2Y < 0) paddle2Y = 0;
      }

      function AIPlayer() {
        if (paddle2Y + paddle2HEIGHT / 2 < ballY) paddle2Y += AI;
        else paddle2Y -= AI;
      }

      function moveBall() {
        ballX += dx;
        ballY += dy;
      }

      moveBall();
      paddle1Bounce();
      paddle2Bounce();
      topBottomBounce();
      stayInCanvas();
      AIPlayer();
    }

    animate();
  });

  // Play click sound on any button press
  const buttons = document.querySelectorAll("button");
  const audio = get3("audioPlayer");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });
};
