
// ===================================
// CALVIN WEBSITE - JAVASCRIPT
// ===================================

// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// TUTUP MENU SETELAH LINK DIKLIK
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// TAHUN OTOMATIS
document.getElementById("year").textContent =
    new Date().getFullYear();

// FORMULIR KONTAK
const contactForm = document.getElementById("contactForm");

// GANTI DENGAN NOMOR WHATSAPP BISNIS KAMU
// Format: 628xxxxxxxxxx (tanpa tanda +)
const WHATSAPP_NUMBER = "628xxxxxxxxxx";

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Mohon lengkapi semua formulir.");
        return;
    }

    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
        alert("Nomor WhatsApp belum diatur. Silakan ubah WHATSAPP_NUMBER di script.js.");
        return;
    }

    const text =
        `Halo CALVIN!\n\n` +
        `Nama: ${name}\n` +
        `Email: ${email}\n\n` +
        `Pesan:\n${message}`;

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    contactForm.reset();
});