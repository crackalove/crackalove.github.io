document.addEventListener('DOMContentLoaded', () => {
    // Анимации появления секций
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

    // Загрузка темы при старте
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    // Кнопка луна/солнце
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.remove('red-theme');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // ПОЛНАЯ ОБФУСКАЦИЯ — НИЧЕГО НЕ ЖАЛЕЕМ
    function obfuscateAll() {
        const chars = '⊙⊗♠♣♥♦★☆♫♪♬⚡⚠☢☣☠☯☸⚛☤☥☦☧☨☩⚕⚖⚗⚙⚚⚜⚝⚞⚟⚠⚡✇✈✉✎✏✐✑✒✓✔✕✖✗✘✚✜✞✟✠✡✢✣✤✥✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊❋❌❍❎❏❐❑❒❖❗❘❙❚❛❜❝❞';

        document.querySelectorAll('h1,h2,h3,h4,p,li,a,span,.role,.date').forEach(el => {
            if (!el.textContent.trim()) return;

            // Сохраняем оригинал
            el.dataset.original = el.textContent;

            // Полная замена на рандомные символы (90% шанс замены)
            let result = '';
            for (let char of el.textContent) {
                result += Math.random() < 0.9 ? chars[Math.floor(Math.random() * chars.length)] : char;
            }
            el.textContent = result;
        });
    }

    // Полное восстановление
    function restoreAll() {
        document.querySelectorAll('[data-original]').forEach(el => {
            el.textContent = el.dataset.original;
            delete el.dataset.original;
        });
    }

    // Клик по аватарке — вход/выход из красной темы
    document.getElementById('theme-avatar').addEventListener('click', () => {
        const html = document.documentElement;

        if (html.classList.contains('red-theme')) {
            // ВЫХОД — возвращаемся в тёмную тему
            restoreAll();
            html.classList.remove('red-theme');
            html.classList.add('dark');
            html.style.animation = 'shake 0.6s ease-in-out';
            localStorage.theme = 'dark';
        } else {
            // ВХОД — полный режим взлома
            obfuscateAll();
            html.classList.add('red-theme');
            html.classList.remove('dark');
            html.style.animation = 'shake 0.6s ease-in-out';
        }

        setTimeout(() => { html.style.animation = ''; }, 700);
    });
});
