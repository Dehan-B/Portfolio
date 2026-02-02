// Mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when clicking a link (mobile)
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project filtering
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".project");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const tags = (card.dataset.tags || "").split(" ");
      const show = filter === "all" || tags.includes(filter);
      card.style.display = show ? "block" : "none";
    });
  });
});

// Contact form (simple demo - no backend)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

// Put your LinkedIn link here once created
const linkedinUrl = "https://www.linkedin.com/in/YOUR-LINKEDIN";
document.getElementById("linkedinLink").href = linkedinUrl;
document.getElementById("linkedinLink2").href = linkedinUrl;

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Thanks! This demo form doesn’t send yet. Use the email link to contact me.";
  form.reset();
});
