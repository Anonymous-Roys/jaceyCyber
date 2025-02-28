<script>
  document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-close");
    const offcanvasNavbar = new bootstrap.Offcanvas(document.getElementById("offcanvasNavbar"));
    const scrollLinks = document.querySelectorAll("nav a[href^='#']");
    const sections = document.querySelectorAll("section");

    // Handle Menu Navigation (Internal Scroll & External Redirect)
    menuLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        const targetHref = this.getAttribute("href");

        if (targetHref.includes(".html")) {
          // Redirect to external page (resources.html)
          window.location.href = targetHref;
        } else {
          // Handle internal section scroll
          event.preventDefault();
          offcanvasNavbar.hide();
          setTimeout(() => {
            document.querySelector(targetHref).scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }, 300);
        }
      });
    });

    // Smooth Scroll for Navigation Links with Active State
    scrollLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    // Highlight Active Nav Link on Scroll
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
          current = section.getAttribute("id");
        }
      });

      scrollLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });

    // Contact Form Submission with Animated Toast Notification
    const contactForm = document.querySelector("form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const toast = document.createElement("div");
        toast.className = "toast-message";
        toast.innerText = "Thank you for reaching out! We'll get back to you soon.";
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.classList.add("fade-out");
          setTimeout(() => toast.remove(), 1000);
        }, 3000);
        contactForm.reset();
      });
    }

    // Card Hover Animation with Subtle Scaling Effect
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.classList.add("shadow-lg", "scale-up");
      });
      card.addEventListener("mouseleave", () => {
        card.classList.remove("shadow-lg", "scale-up");
      });
    });

    // Dynamic Year Update in Footer with Fade-in Effect
    const footerText = document.querySelector("footer p");
    if (footerText) {
      const currentYear = new Date().getFullYear();
      footerText.innerHTML = `&copy; ${currentYear} Cybersecurity Awareness Campaign. All rights reserved.`;
      footerText.classList.add("fade-in");
    }

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.innerHTML = "⬆";
    backToTop.className = "back-to-top";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
</script>
