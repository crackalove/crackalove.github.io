document.addEventListener('DOMContentLoaded', () => {
    // Анимации появления секций при скролле
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

    // Загрузка сохранённой темы при старте
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    // Кнопка луна/солнце — обычное переключение светлая ↔ тёмная
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.remove('red-theme');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // Клик по аватарке — включаем/выключаем красную тему
    document.getElementById('theme-avatar').addEventListener('click', () => {
        if (document.documentElement.classList.contains('red-theme')) {
            // Выход из красной → сразу в тёмную тему (как ты и хотел)
            document.documentElement.classList.remove('red-theme');
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            // Вход в красную тему
            document.documentElement.classList.add('red-theme');
            document.documentElement.classList.remove('dark');
        }
    });
});
