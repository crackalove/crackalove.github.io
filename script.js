document.addEventListener('DOMContentLoaded', () => {
    // MATRIX BOOT ANIMATION (запуск при загрузке)
    const boot = document.getElementById('matrix-boot');
    const code = document.querySelector('.matrix-code');

    if (boot && code) {
        const symbols = '01⊙⊗♠♣♥♦★☆⚡☢☠✈✇✎✓✕✖✚✜✠✡✢✤✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❌❍❎';
        let lines = '';
        for (let i = 0; i < 38; i++) {
            let line = '';
            for (let j = 0; j < 95; j++) {
                line += symbols[Math.floor(Math.random() * symbols.length)];
            }
            lines += line + '\n';
        }
        code.textContent = lines;

        // Убираем прелоадер через 2.4 секунды
        setTimeout(() => {
            boot.classList.add('loaded');
        }, 2400);
    }

    // MATRIX CURSOR — только в красной теме
    const html = document.documentElement;

    const updateCursor = (e) => {
        if (html.classList.contains('red-theme')) {
            html.style.setProperty('--cursor-x', e.clientX + 'px');
            html.style.setProperty('--cursor-y', e.clientY + 'px');
        }
    };

    document.addEventListener('mousemove', updateCursor);

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
        html.classList.add('dark');
    }

    // Кнопка луна/солнце
    document.getElementById('theme-toggle').addEventListener('click', () => {
        html.classList.toggle('dark');
        html.classList.remove('red-theme');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
    });

    // Клик по аватарке — красная тема + тряска
    document.getElementById('theme-avatar').addEventListener('click', () => {
        if (html.classList.contains('red-theme')) {
            // ВЫХОД из красной темы → в тёмную
            html.classList.remove('red-theme');
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            // ВХОД в красную тему
            html.classList.add('red-theme');
            html.classList.remove('dark');
        }

        // Тряска при переключении
        html.style.animation = 'shake 0.6s ease-in-out';
        setTimeout(() => { html.style.animation = ''; }, 700);
    });
});
