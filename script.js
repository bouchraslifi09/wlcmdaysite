document.addEventListener("DOMContentLoaded", () => {
  console.log(" JS prêt !");

  // --- Effet "playing" sur clic image ---
  const images = document.querySelectorAll(".trending-thumb img, .box img");
  images.forEach(img => {
    img.addEventListener("click", (e) => {
      const link = img.closest("a");
      if (link?.getAttribute("href") === "#") e.preventDefault();

      const parent = img.closest(".trending-thumb") || img.closest(".box");
      const target = parent || img;

      target.classList.add("playing");
      setTimeout(() => target.classList.remove("playing"), 2000);
    });
  });

  console.log(" Listeners installés !");

  // --- Animation des dots ---
  const dots = document.querySelectorAll('.dot');
  let activeIndex = 0;
  let autoPlay;

  function activateDot(index) {
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
    activeIndex = index;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      activateDot(i);
      clearInterval(autoPlay); // tu peux aussi supprimer cette ligne si tu veux
    });
  });

  activateDot(0);

  console.log(" Animation dots activée !");
});
 