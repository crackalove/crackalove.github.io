document.addEventListener('DOMContentLoaded', () => {
    // Анимации секций
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

    // Клик по аватарке — красная тема + тряска
    document.getElementById('theme-avatar').addEventListener('click', () => {
        const html = document.documentElement;

        if (html.classList.contains('red-theme')) {
            // ВЫХОД — сразу в тёмную
            html.classList.remove('red-theme');
            html.classList.add('dark');
            html.style.animation = 'shake 0.6s ease-in-out';
            localStorage.theme = 'dark';
        } else {
            // ВХОД — красная тема
            html.classList.add('red-theme');
            html.classList.remove('dark');
            html.style.animation = 'shake 0.6s ease-in-out';
        }

        setTimeout(() => { html.style.animation = ''; }, 700);
    });
});
