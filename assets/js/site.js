/* =========================================================
   Adeline Mendes Cerimonial — comportamentos do site
   Sem dependências. Funciona abrindo o arquivo direto no
   navegador (file://) ou publicado na hospedagem.
   ========================================================= */
(function () {
  'use strict';

  var ZAP = '5585998200767';
  var menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menu em telas pequenas ---------- */
  function iniciarMenu() {
    var botao = document.querySelector('.abre-menu');
    var nav = document.querySelector('.topo__nav');
    if (!botao || !nav) return;

    nav.querySelectorAll('.menu li').forEach(function (li, i) { li.style.setProperty('--i', i); });

    function alternar(abrir) {
      var vaiAbrir = abrir !== undefined ? abrir : nav.dataset.aberto !== 'true';
      var celular = window.innerWidth <= 960;
      nav.dataset.aberto = vaiAbrir ? 'true' : 'false';
      botao.setAttribute('aria-expanded', vaiAbrir ? 'true' : 'false');
      document.documentElement.classList.toggle('menu-aberto', vaiAbrir && celular);
      document.body.style.overflow = vaiAbrir && celular ? 'hidden' : '';
    }

    botao.addEventListener('click', function () { alternar(); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) alternar(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') alternar(false); });
    document.addEventListener('click', function (e) {
      if (nav.dataset.aberto === 'true' && !nav.contains(e.target) && !botao.contains(e.target)) alternar(false);
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 960) alternar(false); });
  }

  /* ---------- Rolagem: cabeçalho, barra de leitura, parallax, WhatsApp ---------- */
  function iniciarRolagem(extras) {
    var topo = document.querySelector('.topo');
    var linhasTempo = Array.prototype.slice.call(document.querySelectorAll('.linha-tempo'));
    var zap = document.querySelector('.zap-flutuante');
    var paralaxes = menosMovimento ? [] : Array.prototype.slice.call(document.querySelectorAll('[data-parallax], .chamada'));

    var progresso = null;
    if (topo) {
      progresso = document.createElement('span');
      progresso.className = 'topo__progresso';
      progresso.setAttribute('aria-hidden', 'true');
      topo.appendChild(progresso);
    }

    var agendado = false;
    function atualizar() {
      agendado = false;
      var y = window.scrollY;
      var alturaVisivel = window.innerHeight;

      if (topo) {
        topo.classList.toggle('rolou', y > 12);
        var total = document.documentElement.scrollHeight - alturaVisivel;
        progresso.style.setProperty('--progresso', total > 0 ? Math.min(y / total, 1) : 0);
      }
      if (zap) zap.classList.toggle('aparece', y > alturaVisivel * .5);

      paralaxes.forEach(function (el) {
        var caixa = el.getBoundingClientRect();
        if (caixa.bottom < -200 || caixa.top > alturaVisivel + 200) return;
        var centro = caixa.top + caixa.height / 2 - alturaVisivel / 2;
        if (el.classList.contains('chamada')) {
          el.style.setProperty('--px', (centro * -0.12).toFixed(1) + 'px');
        } else {
          var fator = parseFloat(el.dataset.parallax) || 0.08;
          el.style.transform = 'translate3d(0,' + (centro * -fator).toFixed(1) + 'px,0)';
        }
      });

      // linha do tempo: o fio enche conforme a seção sobe na tela
      linhasTempo.forEach(function (lt) {
        var caixa = lt.getBoundingClientRect();
        var p = (alturaVisivel * .8 - caixa.top) / Math.max(caixa.height, alturaVisivel * .45);
        p = Math.min(Math.max(p, 0), 1);
        lt.style.setProperty('--p', p.toFixed(3));
        var etapas = lt.querySelectorAll('.linha-tempo__etapa');
        etapas.forEach(function (e, i) { e.classList.toggle('ativo', p >= i / Math.max(etapas.length - 1, 1) - .001); });
      });

      (extras || []).forEach(function (fn) { if (fn) fn(); });
    }
    function pedir() { if (!agendado) { agendado = true; requestAnimationFrame(atualizar); } }

    atualizar();
    window.addEventListener('scroll', pedir, { passive: true });
    window.addEventListener('resize', pedir);
  }

  /* ---------- Fotos: carregamento por aproximação ----------
     Cada .foto aponta para um arquivo via --img: url(...), e cada bloco
     com data-fundo faz o mesmo. Para a página não baixar as fotos todas
     de uma vez, o arquivo só é pedido quando o bloco chega perto da
     tela (uma tela de antecedência). Enquanto o arquivo não existir,
     mostramos o nome esperado; assim que for salvo, o aviso some. */
  var observadorFotos = null;

  function aoAproximar(el, carregar) {
    if (!('IntersectionObserver' in window)) { carregar(); return; }
    if (!observadorFotos) {
      observadorFotos = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          observadorFotos.unobserve(entrada.target);
          var fn = entrada.target._carregarFoto;
          if (fn) { delete entrada.target._carregarFoto; fn(); }
        });
      }, { rootMargin: '100% 0px' });
    }
    el._carregarFoto = carregar;
    observadorFotos.observe(el);
  }

  function prepararFoto(fig) {
    var caminho = fig.dataset.arquivo;

    aoAproximar(fig, function () {
      fig.style.setProperty('--img', "url('" + caminho + "')");

      var teste = new Image();
      teste.onload = function () {
        fig.classList.remove('sem-foto');
        var aviso = fig.querySelector('.foto__aviso');
        if (aviso) aviso.remove();
      };
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

  function iniciarFotos() {
    document.querySelectorAll('.foto[data-arquivo]').forEach(prepararFoto);
  }

  /* ---------- Monta uma figura de foto com placeholder ---------- */
  var CLASSE_PROPORCAO = { '1:1': 'foto--1x1', '4:5': 'foto--4x5', '3:4': 'foto--3x4', '3:2': 'foto--3x2', '16:9': 'foto--16x9' };

  function criarFoto(item, classeProporcao) {
    var fig = document.createElement('figure');
    fig.className = 'foto ' + (classeProporcao || CLASSE_PROPORCAO[item.proporcao] || 'foto--1x1');
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
      .forEach(function (item) {
        var link = document.createElement('a');
        link.className = 'galeria-item';
        link.href = 'galeria.html';
        link.dataset.legenda = item.alt;
        link.appendChild(criarFoto(item, 'foto--1x1'));
        alvo.appendChild(link);
      });
  }

  /* ---------- Galeria completa com filtro e lightbox ---------- */
  function iniciarGaleria() {
    var alvo = document.getElementById('galeria-grade');
    if (!alvo || !window.GALERIA) return;

    var ROTULO = { casamento: 'Casamento', infantil: 'Aniversário infantil' };
    var itens = window.GALERIA.map(function (item, i) {
      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'galeria-item';
      botao.dataset.tipo = item.tipo;
      botao.dataset.indice = i;
      botao.dataset.legenda = item.alt;
      botao.setAttribute('aria-label', 'Ampliar: ' + item.alt);
      botao.appendChild(criarFoto(item));
      alvo.appendChild(botao);
      return botao;
    });

    // contagem em cada filtro
    document.querySelectorAll('.filtro').forEach(function (f) {
      var tipo = f.dataset.filtro;
      var n = tipo === 'todos' ? itens.length : itens.filter(function (b) { return b.dataset.tipo === tipo; }).length;
      var conta = f.querySelector('small');
      if (conta) conta.textContent = n;
    });

    document.querySelectorAll('.filtro').forEach(function (f) {
      f.addEventListener('click', function () {
        document.querySelectorAll('.filtro').forEach(function (o) { o.setAttribute('aria-pressed', o === f ? 'true' : 'false'); });
        var tipo = f.dataset.filtro;
        itens.forEach(function (b) { b.classList.add('saindo'); });
        setTimeout(function () {
          itens.forEach(function (b) {
            b.classList.toggle('oculto', tipo !== 'todos' && b.dataset.tipo !== tipo);
          });
          requestAnimationFrame(function () { itens.forEach(function (b) { b.classList.remove('saindo'); }); });
        }, menosMovimento ? 0 : 280);
      });
    });

    // lightbox
    var dialogo = document.getElementById('lightbox');
    if (!dialogo || typeof dialogo.showModal !== 'function') return;
    var foto = dialogo.querySelector('.lightbox__foto');
    var legenda = dialogo.querySelector('.lightbox__legenda');
    var atual = 0;

    function visiveis() { return itens.filter(function (b) { return !b.classList.contains('oculto'); }); }

    function mostrar(indice) {
      atual = indice;
      var item = window.GALERIA[indice];
      foto.dataset.arquivo = item.arquivo;
      foto.dataset.proporcao = item.proporcao || '';
      foto.setAttribute('aria-label', item.alt);
      var aviso = foto.querySelector('.foto__aviso');
      if (aviso) aviso.remove();
      prepararFoto(foto);
      foto.classList.remove('trocando'); void foto.offsetWidth; foto.classList.add('trocando');
      legenda.innerHTML = '<b></b><span></span>';
      legenda.querySelector('b').textContent = ROTULO[item.tipo] || '';
      legenda.querySelector('span').textContent = item.alt;
    }

    function passo(direcao) {
      var lista = visiveis();
      var pos = lista.findIndex(function (b) { return +b.dataset.indice === atual; });
      var prox = lista[(pos + direcao + lista.length) % lista.length];
      if (prox) mostrar(+prox.dataset.indice);
    }

    alvo.addEventListener('click', function (e) {
      var b = e.target.closest('.galeria-item');
      if (!b) return;
      mostrar(+b.dataset.indice);
      dialogo.showModal();
    });
    dialogo.querySelector('.lightbox__fechar').addEventListener('click', function () { dialogo.close(); });
    dialogo.querySelector('.lightbox__ant').addEventListener('click', function () { passo(-1); });
    dialogo.querySelector('.lightbox__prox').addEventListener('click', function () { passo(1); });
    dialogo.addEventListener('click', function (e) { if (e.target === dialogo) dialogo.close(); });
    dialogo.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') passo(-1);
      if (e.key === 'ArrowRight') passo(1);
    });
    dialogo.addEventListener('close', function () {
      var origem = alvo.querySelector('[data-indice="' + atual + '"]');
      if (origem) origem.focus();
    });

    // deslizar no celular
    var inicioX = null;
    dialogo.addEventListener('touchstart', function (e) { inicioX = e.touches[0].clientX; }, { passive: true });
    dialogo.addEventListener('touchend', function (e) {
      if (inicioX === null) return;
      var dx = e.changedTouches[0].clientX - inicioX;
      if (Math.abs(dx) > 50) passo(dx < 0 ? 1 : -1);
      inicioX = null;
    });
  }

  /* ---------- Depoimentos (dados/depoimentos.js) ---------- */
  function iniciarDepoimentos() {
    var alvo = document.getElementById('depoimentos-lista');
    if (!alvo || !window.DEPOIMENTOS) return;

    if (alvo.hasAttribute('data-carrossel')) { montarCarrossel(alvo, window.DEPOIMENTOS); return; }

    var filtro = alvo.dataset.tipo;
    window.DEPOIMENTOS
      .filter(function (dep) { return !filtro || !dep.tipo || dep.tipo === filtro; })
      .forEach(function (dep) {
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

  /* ---------- Carrossel de depoimentos ----------
     Um depoimento por vez; troca sozinho a cada 7s, pausa com o mouse
     em cima ou com o foco dentro, e não gira com movimento reduzido. */
  function montarCarrossel(alvo, lista) {
    var trilho = alvo.querySelector('.carrossel__trilho');
    var pontos = alvo.querySelector('.carrossel__pontos');
    var INTERVALO = 7000;
    var atual = 0, timer = null;
    alvo.style.setProperty('--intervalo', INTERVALO + 'ms');

    var slides = lista.map(function (dep, i) {
      var slide = document.createElement('figure');
      slide.className = 'carrossel__slide';
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-roledescription', 'depoimento');
      slide.setAttribute('aria-label', (i + 1) + ' de ' + lista.length);
      slide.innerHTML = '<p class="carrossel__aspas" aria-hidden="true">“</p><blockquote></blockquote>' +
                        '<figcaption class="carrossel__autor"><b></b><span></span></figcaption>';
      slide.querySelector('blockquote').textContent = dep.texto;
      slide.querySelector('b').textContent = dep.nome;
      slide.querySelector('span').textContent = dep.evento || '';
      trilho.appendChild(slide);

      var ponto = document.createElement('button');
      ponto.type = 'button';
      ponto.className = 'carrossel__ponto';
      ponto.setAttribute('aria-label', 'Depoimento ' + (i + 1));
      ponto.addEventListener('click', function () { ir(i); reiniciar(); });
      pontos.appendChild(ponto);
      return slide;
    });

    function ir(i) {
      atual = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        s.classList.toggle('ativo', k === atual);
        s.setAttribute('aria-hidden', k === atual ? 'false' : 'true');
      });
      pontos.querySelectorAll('.carrossel__ponto').forEach(function (p, k) {
        p.setAttribute('aria-current', k === atual ? 'true' : 'false');
      });
      if (timer) reiniciarBarra();
    }

    // a barrinha do ponto ativo enche no tempo do intervalo; recomeça a cada troca
    function reiniciarBarra() {
      alvo.classList.remove('tocando');
      void alvo.offsetWidth;
      alvo.classList.add('tocando');
    }

    function tocar() {
      if (menosMovimento || slides.length < 2) return;
      parar();
      timer = setInterval(function () { ir(atual + 1); }, INTERVALO);
      trilho.setAttribute('aria-live', 'off');
      reiniciarBarra();
    }
    // girando sozinho, o leitor de tela não anuncia cada troca; parado, anuncia
    function parar() { clearInterval(timer); timer = null; trilho.setAttribute('aria-live', 'polite'); }
    function reiniciar() { if (!alvo.classList.contains('pausado')) tocar(); }

    alvo.querySelectorAll('.carrossel__seta').forEach(function (b) {
      b.addEventListener('click', function () { ir(atual + (+b.dataset.dir)); reiniciar(); });
    });
    alvo.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { ir(atual - 1); reiniciar(); }
      if (e.key === 'ArrowRight') { ir(atual + 1); reiniciar(); }
    });
    function pausar() { alvo.classList.add('pausado'); parar(); }
    function retomar() { alvo.classList.remove('pausado'); tocar(); }
    alvo.addEventListener('mouseenter', pausar);
    alvo.addEventListener('mouseleave', function () { if (!alvo.contains(document.activeElement)) retomar(); });
    alvo.addEventListener('focusin', pausar);
    alvo.addEventListener('focusout', function (e) { if (!alvo.contains(e.relatedTarget)) retomar(); });

    // deslizar no celular
    var inicioX = null;
    alvo.addEventListener('touchstart', function (e) { inicioX = e.touches[0].clientX; }, { passive: true });
    alvo.addEventListener('touchend', function (e) {
      if (inicioX === null) return;
      var dx = e.changedTouches[0].clientX - inicioX;
      if (Math.abs(dx) > 50) { ir(atual + (dx < 0 ? 1 : -1)); reiniciar(); }
      inicioX = null;
    });

    ir(0);
    tocar();
  }

  /* ---------- Ramos botânicos: desenham quando aparecem ---------- */
  function iniciarRamos() {
    var ramos = document.querySelectorAll('.ramo');
    if (!ramos.length) return;
    if (menosMovimento || !('IntersectionObserver' in window)) {
      ramos.forEach(function (r) { r.classList.add('desenhado'); });
      return;
    }
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('desenhado');
        observador.unobserve(entrada.target);
      });
    }, { threshold: .3 });
    ramos.forEach(function (r) { observador.observe(r); });
  }

  /* ---------- Botões magnéticos (só com mouse) ---------- */
  function iniciarMagneticos() {
    if (menosMovimento || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.querySelectorAll('.btn, .zap-flutuante, .redes a, .carrossel__seta').forEach(function (el) {
      var FORCA = el.classList.contains('btn') ? .22 : .35, MAX = 10;
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) * FORCA;
        var dy = (e.clientY - (r.top + r.height / 2)) * FORCA;
        dx = Math.max(-MAX, Math.min(MAX, dx));
        dy = Math.max(-MAX, Math.min(MAX, dy));
        el.style.translate = dx.toFixed(1) + 'px ' + dy.toFixed(1) + 'px';
      });
      el.addEventListener('mouseleave', function () { el.style.translate = ''; });
    });
  }

  /* ---------- Galeria horizontal fixada (página de teste) ---------- */
  function iniciarGaleriaHorizontal() {
    var secao = document.querySelector('[data-galeria-horizontal]');
    if (!secao || !window.GALERIA) return null;
    var trilho = secao.querySelector('.galeria-horizontal__trilho');
    var fim = secao.querySelector('.galeria-horizontal__fim');

    window.GALERIA.forEach(function (item) {
      var link = document.createElement('a');
      link.className = 'galeria-item';
      link.href = 'galeria.html';
      link.dataset.legenda = item.alt;
      link.appendChild(criarFoto(item));
      trilho.insertBefore(link, fim);
    });

    var desktop = window.matchMedia('(min-width: 861px)');
    var VELOCIDADE = 1.5;   // o trilho anda 1,5px para cada 1px rolado
    var distancia = 0;

    function medir() {
      var fixar = desktop.matches && !menosMovimento;
      secao.classList.toggle('fixada', fixar);
      if (!fixar) { secao.style.height = ''; trilho.style.transform = ''; return; }
      distancia = Math.max(trilho.scrollWidth - window.innerWidth, 0);
      secao.style.height = (distancia / VELOCIDADE + window.innerHeight) + 'px';
    }

    function atualizar() {
      if (!secao.classList.contains('fixada')) return;
      var topo = secao.getBoundingClientRect().top;
      var p = Math.min(Math.max(-topo / (secao.offsetHeight - window.innerHeight || 1), 0), 1);
      trilho.style.transform = 'translate3d(' + (-p * distancia).toFixed(1) + 'px,0,0)';
      secao.style.setProperty('--p', p.toFixed(4));
    }

    medir();
    window.addEventListener('resize', function () { medir(); atualizar(); });
    window.addEventListener('load', function () { medir(); atualizar(); });
    return atualizar;
  }

  /* ---------- Abertura com monograma (página de teste) ---------- */
  function iniciarAbertura() {
    var abertura = document.querySelector('.abertura');
    if (!abertura) return;
    var raiz = document.documentElement;
    setTimeout(function () {
      abertura.classList.add('sai');
      raiz.classList.remove('abrindo');
      abertura.addEventListener('animationend', function (e) {
        if (e.animationName === 'abertura-sai') abertura.remove();
      });
    }, menosMovimento ? 0 : 2300);
  }

  /* ---------- Foto de fundo dos blocos de chamada ---------- */
  function carregarFundo(el) {
    var caminho = el.dataset.fundo;
    if (!caminho || el.dataset.carregada) return;
    el.dataset.carregada = '1';
    el.style.setProperty('--img', "url('" + caminho + "')");

    var teste = new Image();
    teste.onerror = function () {
      if (el.querySelector('.fundo__aviso')) return;
      var aviso = document.createElement('span');
      aviso.className = 'fundo__aviso';
      aviso.setAttribute('aria-hidden', 'true');
      aviso.textContent = caminho.split('/').pop() + (el.dataset.proporcao ? ' · ' + el.dataset.proporcao : '');
      el.appendChild(aviso);
    };
    teste.src = caminho;
  }

  /* os blocos marcados com data-sob-demanda têm quem os carregue
     (o carrossel de momentos pede a foto de cada cena na hora certa) */
  function iniciarFundos() {
    document.querySelectorAll('[data-fundo]:not([data-sob-demanda])').forEach(function (el) {
      aoAproximar(el, function () { carregarFundo(el); });
    });
  }

  /* ---------- Ano corrente no rodapé ---------- */
  function iniciarAno() {
    document.querySelectorAll('[data-ano]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Revelar ao rolar ----------
     Cada seção com data-revelar tem seus blocos principais animados
     em sequência. O índice (--i) é contado entre irmãos, para que
     os cards de uma grade entrem um depois do outro. */
  var ALVOS_REVELAR = [
    '.cabeca-secao', '.grid-2 > *', '.grid-3 > *', '.grid-4 > *', '.estilos > *',
    '.roteiro__item', '.numeros > *', '.acordeao', '.valores > *', '.mosaico > *',
    '.contato-grid > *', '.canais > *', '.chamada', '.citacao-grande', '.colunas-texto',
    '.filtros', '.checklist-grupos > *', '.linha-tempo__etapas > *', '.carrossel', '[data-rv]'
  ].join(',');

  function iniciarRevelar() {
    var secoes = document.querySelectorAll('[data-revelar]');
    if (!secoes.length) return;

    var blocos = [];
    secoes.forEach(function (secao) {
      secao.querySelectorAll(ALVOS_REVELAR).forEach(function (el) {
        if (el.parentElement.closest('.rv')) return;   // já anima junto com o pai
        el.classList.add('rv');
        blocos.push(el);
      });
    });
    blocos.forEach(function (el) {
      var irmaos = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('rv'); });
      el.style.setProperty('--i', Math.min(irmaos.indexOf(el), 6));
    });

    var linhas = document.querySelectorAll('.roteiro');

    if (menosMovimento || !('IntersectionObserver' in window)) {
      blocos.forEach(function (el) { el.classList.add('visivel'); });
      linhas.forEach(function (el) { el.classList.add('visivel-linha'); });
      return;
    }

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add(entrada.target.classList.contains('roteiro') ? 'visivel-linha' : 'visivel');
        observador.unobserve(entrada.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -60px 0px' });

    blocos.forEach(function (el) { observador.observe(el); });
    linhas.forEach(function (el) { observador.observe(el); });
  }

  /* ---------- Contadores dos números ---------- */
  function iniciarContadores() {
    var numeros = document.querySelectorAll('.numero__valor');
    if (!numeros.length || menosMovimento || !('IntersectionObserver' in window)) return;

    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        observador.unobserve(entrada.target);
        var el = entrada.target;
        var partes = el.textContent.match(/^(\D*)(\d+)(\D*)$/);
        if (!partes) return;
        var alvo = +partes[2], inicio = null, duracao = 1800;
        function quadro(t) {
          if (inicio === null) inicio = t;
          var p = Math.min((t - inicio) / duracao, 1);
          var suave = 1 - Math.pow(1 - p, 4);
          el.textContent = partes[1] + Math.round(alvo * suave) + partes[3];
          if (p < 1) requestAnimationFrame(quadro);
        }
        requestAnimationFrame(quadro);
      });
    }, { threshold: .6 });

    numeros.forEach(function (el) { observador.observe(el); });
  }

  /* ---------- Formulário de contato → WhatsApp ---------- */
  function iniciarFormulario() {
    var form = document.getElementById('form-contato');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var d = new FormData(form);
      var data = d.get('data');
      if (data) data = data.split('-').reverse().join('/');

      var linhas = ['Olá, Adeline! Vim pelo site e gostaria de um orçamento.', ''];
      linhas.push('*Nome:* ' + d.get('nome'));
      linhas.push('*Evento:* ' + d.get('evento'));
      if (data) linhas.push('*Data:* ' + data);
      if (d.get('local')) linhas.push('*Local / cidade:* ' + d.get('local'));
      if (d.get('convidados')) linhas.push('*Convidados (aprox.):* ' + d.get('convidados'));
      if (d.get('mensagem')) { linhas.push(''); linhas.push(d.get('mensagem')); }

      window.open('https://wa.me/' + ZAP + '?text=' + encodeURIComponent(linhas.join('\n')), '_blank', 'noopener');
    });
  }

  /* ---------- Checklist interativo (dados/checklist.js) ---------- */
  function iniciarChecklist() {
    var alvo = document.getElementById('checklist-grupos');
    if (!alvo || !window.CHECKLIST) return;

    var CHAVE = 'am-checklist-v1';
    var marcados = {};
    try { marcados = JSON.parse(localStorage.getItem(CHAVE)) || {}; } catch (e) { marcados = {}; }
    function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify(marcados)); } catch (e) { /* navegação privada */ } }

    var abas = document.querySelectorAll('.aba');
    var anel = document.querySelector('.progresso__valor');
    var textoProg = document.querySelector('.progresso__texto');
    var CIRC = 2 * Math.PI * 21;
    if (anel) anel.style.strokeDasharray = CIRC;

    var listaAtual = null;
    var params = new URLSearchParams(location.search);
    var inicial = window.CHECKLIST[params.get('lista')] ? params.get('lista') : Object.keys(window.CHECKLIST)[0];

    function atualizarProgresso() {
      var caixas = alvo.querySelectorAll('input[type="checkbox"]');
      var feitas = alvo.querySelectorAll('input:checked').length;
      var p = caixas.length ? feitas / caixas.length : 0;
      if (anel) anel.style.strokeDashoffset = CIRC * (1 - p);
      if (textoProg) textoProg.innerHTML = '<b>' + Math.round(p * 100) + '%</b>' + feitas + ' de ' + caixas.length + ' tarefas';

      alvo.querySelectorAll('.grupo-check').forEach(function (g) {
        var total = g.querySelectorAll('input').length;
        var ok = g.querySelectorAll('input:checked').length;
        g.querySelector('.grupo-check__conta').textContent = ok + '/' + total;
        g.classList.toggle('completo', ok === total);
      });
    }

    function montar(chave) {
      listaAtual = chave;
      abas.forEach(function (a) { a.setAttribute('aria-selected', a.dataset.lista === chave ? 'true' : 'false'); });
      alvo.innerHTML = '';

      window.CHECKLIST[chave].grupos.forEach(function (grupo, gi) {
        var bloco = document.createElement('section');
        bloco.className = 'grupo-check';
        var cabeca = document.createElement('div');
        cabeca.className = 'grupo-check__cabeca';
        cabeca.innerHTML = '<h2><small></small></h2><span class="grupo-check__conta"></span>';
        cabeca.querySelector('small').textContent = grupo.quando;
        cabeca.querySelector('h2').appendChild(document.createTextNode(grupo.titulo));
        bloco.appendChild(cabeca);

        var lista = document.createElement('ul');
        grupo.itens.forEach(function (item, ii) {
          var id = chave + '-' + gi + '-' + ii;
          var li = document.createElement('li');
          var rotulo = document.createElement('label');
          rotulo.className = 'item-check';
          rotulo.innerHTML =
            '<input type="checkbox">' +
            '<span class="item-check__caixa" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m4 12.5 5 5 11-11"/></svg></span>' +
            '<span class="item-check__texto"></span>';
          var caixa = rotulo.querySelector('input');
          caixa.checked = !!marcados[id];
          caixa.addEventListener('change', function () {
            if (caixa.checked) marcados[id] = 1; else delete marcados[id];
            salvar();
            atualizarProgresso();
          });
          var texto = rotulo.querySelector('.item-check__texto');
          texto.textContent = item.t;
          if (item.d) {
            var dica = document.createElement('small');
            dica.textContent = item.d;
            texto.appendChild(dica);
          }
          li.appendChild(rotulo);
          lista.appendChild(li);
        });
        bloco.appendChild(lista);
        alvo.appendChild(bloco);

        if (!menosMovimento) {
          bloco.style.animation = 'sobe .9s var(--ease-suave) both';
          bloco.style.animationDelay = (gi * 80) + 'ms';
        }
      });
      atualizarProgresso();
    }

    abas.forEach(function (a) {
      a.addEventListener('click', function () {
        montar(a.dataset.lista);
        history.replaceState(null, '', '?lista=' + a.dataset.lista);
      });
    });

    var imprimir = document.getElementById('checklist-imprimir');
    if (imprimir) imprimir.addEventListener('click', function () { window.print(); });

    var limpar = document.getElementById('checklist-limpar');
    if (limpar) limpar.addEventListener('click', function () {
      if (!window.confirm('Desmarcar todas as tarefas desta lista?')) return;
      Object.keys(marcados).forEach(function (k) { if (k.indexOf(listaAtual + '-') === 0) delete marcados[k]; });
      salvar();
      montar(listaAtual);
    });

    montar(inicial);
  }

  function iniciar() {
    iniciarAbertura();
    iniciarMenu();
    iniciarGaleriaHome();
    var atualizarHorizontal = iniciarGaleriaHorizontal();
    iniciarGaleria();
    iniciarDepoimentos();
    iniciarChecklist();
    iniciarFundos();
    iniciarFotos();   // depois dos blocos montados por JS
    iniciarAno();
    iniciarRevelar();
    iniciarContadores();
    iniciarFormulario();
    iniciarRamos();
    iniciarMagneticos();
    iniciarRolagem([atualizarHorizontal]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
