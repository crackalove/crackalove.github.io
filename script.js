document.addEventListener('DOMContentLoaded', () => {
    // Анимации появления
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(60px)';
        section.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        observer.observe(section);
    });

    // Загрузка темы
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    // Кнопка луна/солнце
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.remove('red-theme');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // Функция обфускации текста
    function obfuscateText() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~';
        document.querySelectorAll('h1, h2, h3, h4, p, li, a, span').forEach(el => {
            if (el.textContent.includes('2025')) return; // оставляем 2025 как есть
            if (el.closest('.footer') && el.textContent.includes('2025')) return;

            const original = el.textContent;
            let obfuscated = '';
            for (let i = 0; i < original.length; i++) {
                obfuscated += Math.random() > 0.1 ? chars[Math.floor(Math.random() * chars.length)] : original[i];
            }
            el.dataset.original = original;
            el.textContent = obfuscated;
        });
    }

    // Функция восстановления текста
    function restoreText() {
        document.querySelectorAll('[data-original]').forEach(el => {
            el.textContent = el.dataset.original;
            delete el.dataset.original;
        });
    }

    // Клик по аватарке — красная тема + обфускация + тряска
    document.getElementById('theme-avatar').addEventListener('click', () => {
        const html = document.documentElement;

        if (html.classList.contains('red-theme')) {
            // ВЫХОД: убираем обфускацию → тёмная тема + тряска
            restoreText();
            html.classList.remove('red-theme');
            html.classList.add('dark');
            html.style.animation = 'shake 0.6s ease-in-out';
            localStorage.theme = 'dark';
        } else {
            // ВХОД: обфускация → красная тема + тряска
            obfuscateText();
            html.classList.add('red-theme');
            html.classList.remove('dark');
            html.style.animation = 'shake 0.6s ease-in-out';
        }

        setTimeout(() => { html.style.animation = ''; }, 700);
    });
});
