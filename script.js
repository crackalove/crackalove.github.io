document.addEventListener('DOMContentLoaded', () => {
    // Анимации секций (учёт prefers-reduced-motion)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
        if (!reduceMotion) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(60px)';
            section.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        }
        observer.observe(section);
    });

    // Тема
    const html = document.documentElement;
    const applyTheme = (mode) => {
        html.classList.toggle('dark', mode === 'dark');
        html.classList.toggle('red-theme', mode === 'red');
        localStorage.theme = mode;
    };

    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyTheme('dark');
    }

    document.getElementById('theme-toggle').addEventListener('click', () => {
        applyTheme(html.classList.contains('dark') ? 'light' : 'dark');
    });

    document.getElementById('theme-avatar').addEventListener('click', () => {
        if (html.classList.contains('red-theme')) {
            applyTheme('dark');
            html.style.animation = 'shake 0.6s ease-in-out';
        } else {
            applyTheme('red');
            html.style.animation = 'shake 0.6s ease-in-out';
        }
        setTimeout(() => { html.style.animation = ''; }, 700);
    });
});
