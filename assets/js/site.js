/* =========================================================
   Adeline Mendes Cerimonial — comportamentos do site
   Sem dependências. Funciona abrindo o arquivo direto no
   navegador (file://) ou publicado na hospedagem.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Menu em telas pequenas ---------- */
  function iniciarMenu() {
    var botao = document.querySelector('.abre-menu');
    var nav = document.querySelector('.topo__nav');
    if (!botao || !nav) return;

    function alternar(abrir) {
      var vaiAbrir = abrir !== undefined ? abrir : nav.dataset.aberto !== 'true';
      nav.dataset.aberto = vaiAbrir ? 'true' : 'false';
      botao.setAttribute('aria-expanded', vaiAbrir ? 'true' : 'false');
      document.body.style.overflow = vaiAbrir && window.innerWidth <= 960 ? 'hidden' : '';
    }

    botao.addEventListener('click', function () { alternar(); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) alternar(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') alternar(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 960) alternar(false); });
  }

  /* ---------- Sombra no cabeçalho ao rolar ---------- */
  function iniciarTopo() {
    var topo = document.querySelector('.topo');
    if (!topo) return;
    var marcar = function () { topo.classList.toggle('rolou', window.scrollY > 12); };
    marcar();
    window.addEventListener('scroll', marcar, { passive: true });
  }

  /* ---------- Placeholders de foto ----------
     Cada .foto aponta para um arquivo via --img: url(...).
     Enquanto o arquivo não existir, mostramos o nome esperado.
     Assim que a imagem for salva com aquele nome, o aviso some. */
  function iniciarFotos() {
    document.querySelectorAll('.foto[data-arquivo]').forEach(function (fig) {
      var caminho = fig.dataset.arquivo;
      fig.style.setProperty('--img', "url('" + caminho + "')");

      var teste = new Image();
      teste.onload = function () { fig.classList.remove('sem-foto'); };
      teste.onerror = function () {
        fig.classList.add('sem-foto');
        if (fig.querySelector('.foto__aviso')) return;
        var aviso = document.createElement('span');
        aviso.className = 'foto__aviso';
        aviso.setAttribute('aria-hidden', 'true');
        aviso.innerHTML = '<b>' + caminho.split('/').pop() + '</b>' +
                          '<span>' + (fig.dataset.proporcao || '') + '</span>';
        fig.appendChild(aviso);
      };
      teste.src = caminho;
    });
  }

  /* ---------- Monta uma figura de foto com placeholder ---------- */
  function criarFoto(item, classeProporcao) {
    var fig = document.createElement('figure');
    fig.className = 'foto ' + (classeProporcao || 'foto--1x1');
    fig.setAttribute('role', 'img');
    fig.setAttribute('aria-label', item.alt || '');
    fig.dataset.arquivo = item.arquivo;
    fig.dataset.proporcao = item.proporcao || '';
    return fig;
  }

  /* ---------- Galeria resumida da home (dados/galeria.js) ---------- */
  function iniciarGaleriaHome() {
    var alvo = document.getElementById('galeria-home');
    if (!alvo || !window.GALERIA) return;

    window.GALERIA
      .filter(function (item) { return item.destaque; })
      .slice(0, 6)
      .forEach(function (item) { alvo.appendChild(criarFoto(item, 'foto--1x1')); });
  }

  /* ---------- Depoimentos (dados/depoimentos.js) ---------- */
  function iniciarDepoimentos() {
    var alvo = document.getElementById('depoimentos-lista');
    if (!alvo || !window.DEPOIMENTOS) return;

    window.DEPOIMENTOS.forEach(function (dep) {
      var bloco = document.createElement('article');
      bloco.className = 'depoimento';

      var aspas = document.createElement('p');
      aspas.className = 'depoimento__aspas';
      aspas.setAttribute('aria-hidden', 'true');
      aspas.textContent = '“';

      var citacao = document.createElement('blockquote');
      citacao.textContent = dep.texto;

      var autor = document.createElement('div');
      autor.className = 'depoimento__autor';
      if (dep.foto) {
        autor.appendChild(criarFoto({ arquivo: dep.foto, alt: 'Foto de ' + dep.nome }, 'foto--mini'));
      }
      var identificacao = document.createElement('div');
      identificacao.innerHTML = '<b></b><span></span>';
      identificacao.querySelector('b').textContent = dep.nome;
      identificacao.querySelector('span').textContent = dep.evento || '';
      autor.appendChild(identificacao);

      bloco.appendChild(aspas);
      bloco.appendChild(citacao);
      bloco.appendChild(autor);
      alvo.appendChild(bloco);
    });
  }

  /* ---------- Foto de fundo dos blocos de chamada ---------- */
  function iniciarFundos() {
    document.querySelectorAll('[data-fundo]').forEach(function (el) {
      var caminho = el.dataset.fundo;
      el.style.setProperty('--img', "url('" + caminho + "')");

      var teste = new Image();
      teste.onerror = function () {
        var aviso = document.createElement('span');
        aviso.className = 'fundo__aviso';
        aviso.setAttribute('aria-hidden', 'true');
        aviso.textContent = caminho.split('/').pop() + (el.dataset.proporcao ? ' · ' + el.dataset.proporcao : '');
        el.appendChild(aviso);
      };
      teste.src = caminho;
    });
  }

  /* ---------- Ano corrente no rodapé ---------- */
  function iniciarAno() {
    document.querySelectorAll('[data-ano]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Revelar seções ao rolar ---------- */
  function iniciarRevelar() {
    var alvos = document.querySelectorAll('[data-revelar]');
    if (!alvos.length) return;

    var prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefereMenosMovimento || !('IntersectionObserver' in window)) {
      alvos.forEach(function (el) { el.style.opacity = 1; });
      return;
    }

    alvos.forEach(function (el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .7s ease, transform .7s ease';
    });

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.style.opacity = 1;
        entrada.target.style.transform = 'none';
        observador.unobserve(entrada.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

    alvos.forEach(function (el) { observador.observe(el); });
  }

  function iniciar() {
    iniciarMenu();
    iniciarTopo();
    iniciarGaleriaHome();
    iniciarDepoimentos();
    iniciarFundos();
    iniciarFotos();   // depois dos blocos montados por JS
    iniciarAno();
    iniciarRevelar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
