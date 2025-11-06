
      feather.replace();

      const mobileMenu = document.querySelector(".mobile-menu");
      const navMenu = document.querySelector("nav ul");

      mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });


      document.querySelectorAll("nav ul li a").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
        });
      });


      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert(
            "Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda."
          );
          this.reset();
        });


      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 100) {
          header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
        } else {
          header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        }
      });


const scrollToTopBtn = document.getElementById("scrollToTop");


window.addEventListener("scroll", function() { 
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});