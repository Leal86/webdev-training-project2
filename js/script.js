// Marca o link ativo na URL do frame
function marcarAtivo() {
    const links = document.querySelectorAll('.menu-lista-item-link');
    const urlAtual = window.location.hash || localStorage.getItem('paginaAtiva');

    links.forEach(link => {
        link.classList.remove('ativo');
        if (link.href.includes(urlAtual)) {
            link.classList.add('ativo');
        }
    });
}

// Marca como ativo ao clicar + carrega no iframe e fecha o menu
document.querySelectorAll('.menu-lista-item-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // marca visualmente
        document.querySelectorAll('.menu-lista-item-link').forEach(l => l.classList.remove('ativo'));
        this.classList.add('ativo');
        localStorage.setItem('paginaAtiva', href);

        // carrega no iframe (fallback para name="frame" ou id)
        const iframe = document.getElementById('conteudo_frame') || document.querySelector('iframe[name="frame"]');
        if (iframe) {
            iframe.src = href;
        } else {
            // fallback: abre na mesma janela
            window.location.href = href;
        }

        // Fecha o menu após clicar em um link (em telas pequenas)
        const cb = document.getElementById('checkbox-menu');
        if (cb) cb.checked = false;
    });
});

// Executa ao carregar a página
marcarAtivo();



function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

