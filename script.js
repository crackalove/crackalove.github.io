document.addEventListener('DOMContentLoaded', () => {
    // Анимации секций при скролле
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

    const html = document.documentElement;

    // Загрузка сохранённой темы
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }

    // Переключение тёмная/светлая
    document.getElementById('theme-toggle').addEventListener('click', () => {
        html.classList.toggle('dark');
        html.classList.remove('red-theme');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });

    // Клик по аватарке → красная тема
    document.getElementById('theme-avatar').addEventListener('click', () => {
        if (html.classList.contains('red-theme')) {
            html.classList.remove('red-theme');
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            html.classList.add('red-theme');
            html.classList.remove('dark');
        }
        html.style.animation = 'shake 0.6s ease-in-out';
        setTimeout(() => html.style.animation = '', 700);
    });

    // Красный курсор в red-theme
    document.addEventListener('mousemove', (e) => {
        if (html.classList.contains('red-theme')) {
            html.style.setProperty('--cursor-x', e.clientX + 'px');
            html.style.setProperty('--cursor-y', e.clientY + 'px');
        }
    });
});
