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

    // Обычная смена темы (солнце/луна)
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.remove('red-theme');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // КЛИК ПО АВАТАРКЕ = КРАСНАЯ ТЕМА + ТРЯСКА
    document.getElementById('theme-avatar').addEventListener('click', () => {
        document.documentElement.classList.toggle('red-theme');
        if (document.documentElement.classList.contains('red-theme')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    });
});
