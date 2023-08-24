
// Função para adicionar animação de fade-in nas seções ao rolar usando GSAP
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('#habilidades li');

    // Animação inicial para a seção hero
    gsap.from("#hero", {duration: 1, y: -50, opacity: 0, delay: 0.5});

    // Efeito hover para habilidades
    skills.forEach(skill => {
        skill.addEventListener('mouseover', function() {
            gsap.to(skill, {duration: 0.5, scale: 1.1, ease: "power2.out"});
        });

        skill.addEventListener('mouseout', function() {
            gsap.to(skill, {duration: 0.5, scale: 1, ease: "power2.out"});
        });
    });

    // Animação Typed.js para a seção "Sobre Mim"
    const options = {
        strings: ["Sou apaixonado pelo desenvolvimento, sempre aberto a novas oportunidades e em busca de novos conhecimentos e tecnologias. Porém como grande parte de minha carreira trabalhei com embarcados, estive limitado a tecnologia e versões de linguagens mais antigas... O que não foi um impedimento para que continuasse me atualizando ao mercado por conta própria em casa, e de certa forma, este ramo de trabalho me ensinou que qualquer língua pode ser aprendida, mesmo havendo obstáculos."],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000
    };
    const typed = new Typed('#typed-output', options);

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionTop < screenPosition) {
                gsap.to(section, {duration: 1, y: 0, opacity: 1});
            }
        });
    });
});
