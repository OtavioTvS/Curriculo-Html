const btn = document.getElementById("themeBtn");
const container = document.querySelector(".ripple-container");

btn.addEventListener("click", (e) => {
  // Criar ripple
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  const size = 100;
  ripple.style.width = size + "px";
  ripple.style.height = size + "px";

  ripple.style.left = (window.innerWidth / 2 - size / 2) + "px";
  ripple.style.top = (window.innerHeight / 2 - size / 2) + "px";

  container.appendChild(ripple);

  setTimeout(() => ripple.remove(), 800);

  // efeito líquido
  document.body.classList.add("liquid");

  setTimeout(() => {
    document.body.classList.remove("liquid");
  }, 600);

  // troca tema
  setTimeout(() => {
    document.body.classList.toggle("dark");
  }, 200);
});