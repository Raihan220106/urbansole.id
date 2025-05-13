// 1. Menambahkan efek smooth scroll pada navigasi
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Menambahkan kelas aktif pada menu navigasi sesuai halaman
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// 3. Validasi form kontak (hanya tampilan, tidak submit ke backend)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Harap lengkapi semua kolom formulir!');
        return;
    }

    alert('Pesan berhasil dikirim! (Dummy alert - tidak benar-benar terkirim)');
    this.reset();
});

// 4. Efek hover pada card produk (opsional, bisa diganti dengan CSS)
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// 5. Sticky navbar saat scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});