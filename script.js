document.addEventListener('DOMContentLoaded', function() {
    // Filtro de projetos
    const filtroBtns = document.querySelectorAll('.filtros button');
    const projetoCards = document.querySelectorAll('.projeto-card');
    
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove a classe ativo de todos os botões
            filtroBtns.forEach(b => b.classList.remove('ativo'));
            
            // Adiciona a classe ativo ao botão clicado
            this.classList.add('ativo');
            
            const filter = this.getAttribute('data-filter');
            
            projetoCards.forEach(card => {
                if (filter === 'todos' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Formulário de contato (simulação)
    const contatoForm = document.querySelector('.contato-form');
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const nome = this.querySelector('input[type="text"]').value;
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
            this.reset();
        });
    }
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de scroll para header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});