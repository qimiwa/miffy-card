// get card and inside message
const card = document.getElementById("card");
const inside = document.getElementById("cardInside");

// when the card is clicked, show the inside part
card.addEventListener("click", () => {
  inside.classList.remove("hidden");
  inside.classList.add("visible");
});

// CONFETTI BUTTON
const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - 500,
      speed: Math.random() * 5 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 8 + 2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      ctx.fill();
      p.y += p.speed;
      if (p.y > canvas.height) p.y = -10;
    }
    requestAnimationFrame(draw);
  }

  draw();
});
