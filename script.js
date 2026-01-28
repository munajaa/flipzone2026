const filterButtons = document.querySelectorAll(".chip");
const productCards = document.querySelectorAll(".product-card");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    productCards.forEach((card) => {
      const category = card.dataset.category;
      card.style.display = filter === "all" || filter === category ? "flex" : "none";
    });
  });
});

const paymentButtons = document.querySelectorAll("[data-payment-key]");

paymentButtons.forEach((button) => {
  const key = button.dataset.paymentKey;
  if (paymentLinks && paymentLinks[key]) {
    button.href = paymentLinks[key];
    button.target = "_blank";
    button.rel = "noreferrer";
  } else {
    button.href = "#kontakt";
  }
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

window.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
    nav.classList.remove("open");
  }
});
