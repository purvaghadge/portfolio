const pages = document.querySelectorAll("[data-page]");
const navLinks = document.querySelectorAll("[data-nav-link]");

navLinks.forEach(btn => {
  btn.addEventListener("click", () => {
    let target = btn.innerText.toLowerCase();

    pages.forEach(p => {
      p.classList.remove("active");
      if (p.dataset.page === target) {
        p.classList.add("active");
      }
    });

    navLinks.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// MODAL CONTENT
function openModal(p) {
  let data = {
    p1: "Crime analysis using spatial + time data to detect patterns 📊",
    p2: "Expense tracker with dashboards + authentication 💰",
    p3: "IoT system for air quality monitoring 🌿",
    p4: "AI tool generating images from prompts 🤖"
  };

  document.getElementById("modal-text").innerText = data[p];
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
