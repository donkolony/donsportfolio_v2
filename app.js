const mobileMenuToggle = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar");

mobileMenuToggle.addEventListener("click", () => {
  const isExpanded = mobileMenuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
  mobileMenuToggle.setAttribute("aria-expanded", isExpanded);

  console.log(isExpanded);
});

// Copy Right Year Automatic Update
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
