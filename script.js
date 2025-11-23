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
        restoreText();
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // ОБФУСКАЦИЯ
    function obfuscateText() {
        const symbols = '⊙⊗♠♣♥♦★☆♫♪♬⚡☢☣☠☯⚛✈✇✎✐✓✔✕✖✗✘✚✜✞✟✠✡✢✣✤✥✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❌❍❎❏❐❑❒❖❗❘❙❚❛❜❝❞';
        
        document.querySelectorAll('h1,h2,h3,h4,p,li,a,span,.role,.date').forEach(el => {
            if (!el.textContent.trim()) return;

            const original = el.textContent;
            el.dataset.original = original;

            let result = '';
            for (let i = 0; i < original.length; i++) {
                const char = original[i];
                // Оставляем только цифры 2025 читаемыми
                if (original.substr(i, 4) === '2025') {
                    result += '2025';
                    i += 3;
                } else if (/[0-9]/.test(char) && original.includes('2025')) {
                    // пропускаем отдельные цифры в 2025
                    result += char;
                } else {
                    result += Math.random() < 0.92 ? symbols[Math.floor(Math.random() * symbols.length)] : char;
                }
            }
            el.textContent = result;
        });
    }

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
            restoreText();
            html.classList.remove('red-theme');
            html.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            obfuscateText();
            html.classList.add('red-theme');
            html.classList.remove('dark');
        }

        html.style.animation = 'shake 0.6s ease-in-out';
        setTimeout(() => { html.style.animation = ''; }, 700);
    });
});
