document.addEventListener("DOMContentLoaded", () => {
  const heartCount = 30; // Idadi ya makopa
  const colors = ['red', 'black', 'white']; // rangi tatu

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Set random color class
    const colorClass = colors[Math.floor(Math.random() * colors.length)];
    heart.classList.add(colorClass);

    // Set emoji moyo
    heart.innerText = "❤️";

    // Random horizontal start position (vw)
    heart.style.left = `${Math.random() * 100}vw`;

    // Random animation duration (3s hadi 6s)
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;

    // Random animation delay (0s hadi 5s)
    heart.style.animationDelay = `${Math.random() * 5}s`;

    document.body.appendChild(heart);
  }
});