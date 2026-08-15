/* =========================
   START EXPERIENCE
========================= */

function startExperience() {
  const music = document.getElementById("bgMusic");

  if (music) {
    music.play().catch(() => {});
  }

  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });

  createHearts();
}


/* =========================
   FINAL SURPRISE
========================= */

function openFinalSurprise() {
  const surprise = document.getElementById("finalSurprise");

  if (!surprise) return;

  surprise.classList.add("active");

  createFireworks();
  createHearts();

  const music = document.getElementById("bgMusic");

  if (music) {
    music.play().catch(() => {});
  }
}


/* =========================
   CLOSE SURPRISE
========================= */

function closeFinalSurprise() {
  const surprise = document.getElementById("finalSurprise");

  if (surprise) {
    surprise.classList.remove("active");
  }
}


/* =========================
   FIREWORKS
========================= */

function createFireworks() {

  const container = document.getElementById("fireworks");

  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 35; i++) {

    const spark = document.createElement("span");

    spark.innerHTML = "✨";

    spark.style.position = "fixed";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 80 + "vh";
    spark.style.fontSize =
      15 + Math.random() * 30 + "px";

    spark.style.pointerEvents = "none";
    spark.style.zIndex = "10000";

    spark.style.animation =
      "fireworkAnimation 1.5s ease forwards";

    container.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 1600);
  }
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

  const container = document.getElementById("hearts");

  if (!container) return;

  for (let i = 0; i < 15; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize =
      15 + Math.random() * 25 + "px";

    heart.style.zIndex = "9998";
    heart.style.pointerEvents = "none";

    heart.style.animation =
      "heartFloat 4s linear forwards";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}


/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {

  /*
    Yahan birthday date set kar sakte ho.

    Example:
    August 18, 2026
  */

  const birthday = new Date("August 18, 2026 00:00:10");

  const now = new Date();

  let difference = birthday - now;

  if (difference < 0) {
    difference = 0;
  }

  const days =
    Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

  const minutes =
    Math.floor(
      (difference / (1000 * 60)) % 60
    );

  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );

  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");

  if (daysElement)
    daysElement.textContent =
      String(days).padStart(2, "0");

  if (hoursElement)
    hoursElement.textContent =
      String(hours).padStart(2, "0");

  if (minutesElement)
    minutesElement.textContent =
      String(minutes).padStart(2, "0");

  if (secondsElement)
    secondsElement.textContent =
      String(seconds).padStart(2, "0");
}


/* =========================
   START COUNTDOWN
========================= */

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   ANIMATION STYLES
========================= */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

@keyframes fireworkAnimation {

  0% {
    opacity: 0;
    transform: scale(0);
  }

  30% {
    opacity: 1;
    transform: scale(1.5);
  }

  100% {
    opacity: 0;
    transform:
      scale(.5)
      translateY(-100px);
  }

}

@keyframes heartFloat {

  0% {
    opacity: 0;
    transform: translateY(0) scale(.7);
  }

  15% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform:
      translateY(-100vh)
      rotate(25deg)
      scale(1.2);
  }

}

`;

document.head.appendChild(animationStyle);
/* =========================
   ROSE + HEART ANIMATION
========================= */

function createRoseAndHearts() {

  for (let i = 0; i < 25; i++) {

    const item = document.createElement("div");

    item.innerHTML = Math.random() > 0.5 ? "🌹" : "❤️";

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.bottom = "-50px";
    item.style.fontSize =
      (18 + Math.random() * 25) + "px";

    item.style.zIndex = "9997";
    item.style.pointerEvents = "none";

    item.style.animation =
      "roseHeartFloat " +
      (4 + Math.random() * 3) +
      "s linear forwards";

    document.body.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, 7000);
  }
}


/* Automatically start animation */

setInterval(createRoseAndHearts, 3500);


/* Animation */

const roseHeartStyle = document.createElement("style");

roseHeartStyle.innerHTML = `

@keyframes roseHeartFloat {

  0% {
    opacity: 0;
    transform:
      translateY(0)
      rotate(0deg)
      scale(.6);
  }

  15% {
    opacity: 1;
  }

  50% {
    transform:
      translateY(-50vh)
      rotate(15deg)
      scale(1);
  }

  100% {
    opacity: 0;
    transform:
      translateY(-110vh)
      rotate(-20deg)
      scale(1.2);
  }

}

`;

document.head.appendChild(roseHeartStyle);
