# Como publicar o site

Onde: **Cloudflare Pages**, plano grátis. O site é estático puro — não há PHP,
banco nem formulário que precise de servidor (o contato monta a mensagem e abre
o WhatsApp). Os outros sites que você pretende hospedar também são estáticos, então
o mesmo plano cobre todos: projetos ilimitados, repositório privado incluído, sem a
cláusula de uso comercial que o GitHub Pages tem nos termos, e CDN com presença no
Brasil.

Hospedagem compartilhada (HostGator/Hostinger) só vale a pena quando algum site
precisar de WordPress, PHP ou caixa de e-mail no domínio. Até lá, seria pagar
mensalidade por algo que aqui sai de graça e mais rápido.

---

## Antes de subir: o que ainda não pode ir ao ar

O site está pronto de layout, mas o conteúdo ainda é de demonstração. Publicar hoje
colocaria no ar texto inventado sobre clientes reais.

- **`dados/depoimentos.js`** — os 3 depoimentos são exemplos explícitos ("Nome da
  cliente"). Trocar por depoimentos reais ou tirar a seção do ar.
- **`dados/momentos.js`** — os 6 momentos do carrossel são textos genéricos. Se for
  citar nome de noivos ou de criança, peça autorização por escrito antes.
- **48 fotos faltando** — só existe `assets/img/compartilhar.jpg`. Sem as fotos o site
  mostra os quadros de espera com o nome do arquivo esperado.
- **`revisao-textos.html`** — é a página onde a Adeline revisa os textos do site.
  Material interno: traz as notas de produção (o que é exemplo, o que foi inventado) e não
  deve ficar público. Está com `noindex`, mas o Pages publica a raiz inteira, então ela
  continua acessível por link direto. **Apague o arquivo antes do merge na `main`**, ou
  mantenha-o só nesta branch de trabalho.
- **`teste-home.html`** — é a segunda home, de rascunho. Está com `noindex`, então não
  aparece no Google, mas fica acessível por link direto. Decida se vira a home, se sai
  ou se fica.

---

## Passo 1 — levar o trabalho para a `main`

O Cloudflare publica a partir de uma branch. Hoje o trabalho está em
`paginas-e-animacoes` e a `main` está 6 commits atrás, parada no commit inicial.

```bash
git checkout main
git merge paginas-e-animacoes
git push origin main
```

(Ou abra um Pull Request no GitHub, se preferir revisar antes.)

## Passo 2 — trazer o domínio para a Cloudflare

Hoje `momentoscerimonial.com.br` usa os servidores DNS do próprio Registro.br
(`b.sec.dns.br`, `c.sec.dns.br`). Precisa mudar, e o motivo é técnico: o domínio raiz
(sem `www`) não aceita um CNAME em DNS comum, que é como se aponta para o Pages. A
Cloudflare resolve isso internamente; o Registro.br não.

1. Crie a conta em <https://dash.cloudflare.com> (grátis).
2. **Add a site** → digite `momentoscerimonial.com.br` → plano **Free**.
3. A Cloudflare lê o DNS atual e mostra **dois servidores** no formato
   `algo.ns.cloudflare.com`. Anote os dois.
4. Entre no <https://registro.br>, abra o domínio → **Alterar servidores DNS** →
   troque os dois atuais pelos da Cloudflare → salve.
5. O Registro.br confere a zona antes de aceitar; costuma levar de alguns minutos a
   algumas horas. A Cloudflare manda um e-mail quando o domínio fica ativo.

O domínio continua registrado no Registro.br e o valor continua o mesmo (R$ 40/ano,
próxima renovação em **25/01/2028**). A Cloudflare passa a ser só quem responde o DNS.

## Passo 3 — criar o projeto no Pages

1. No painel da Cloudflare: **Workers & Pages** → **Create** → aba **Pages** →
   **Connect to Git**.
2. Autorize o GitHub e escolha o repositório `Israel-Mendes-git/Momentos`.
3. Configuração da build — o site não tem etapa de build, então tudo fica vazio:
   - **Framework preset**: `None`
   - **Build command**: deixe em branco
   - **Build output directory**: `/`
   - **Production branch**: `main`
4. **Save and Deploy**. Em menos de um minuto sai um endereço
   `momentos-xxxx.pages.dev` — confira o site por ali antes de ligar o domínio.

A partir daí, todo `git push` na `main` publica sozinho. Push em outra branch gera uma
prévia com endereço próprio, útil para mostrar à Adeline antes de valer no ar.

## Passo 4 — ligar o domínio ao projeto

1. No projeto do Pages: **Custom domains** → **Set up a domain** →
   `momentoscerimonial.com.br`.
2. Como o DNS já está na Cloudflare, ela cria o registro sozinha. O certificado HTTPS
   sai em alguns minutos, também sozinho.
3. Repita para `www.momentoscerimonial.com.br`.
4. As páginas declaram `<link rel="canonical">` **sem** `www`, então o endereço sem
   `www` é o oficial. Faça o `www` redirecionar para ele: **Rules** → **Redirect
   Rules** → de `www.momentoscerimonial.com.br/*` para
   `https://momentoscerimonial.com.br/$1`, código **301**.

## Passo 5 — conferir depois no ar

- Abrir uma página inexistente (`/qualquer-coisa`) e ver se cai na `404.html`.
- Conferir o cadeado do HTTPS e se o site sem `www` e com `www` chegam no mesmo lugar.
- Passar o endereço no <https://pagespeed.web.dev> para ter o número de partida.
- Conferir o carrossel da home e da galeria, o filtro da galeria e o lightbox.
- Mandar uma mensagem pelo formulário de contato e ver se o WhatsApp abre certo.

---

## Compressão e cache

Os dois maiores ganhos de desempenho que faltavam vêm prontos na Cloudflare:

- **Compressão**: gzip e brotli são automáticos. Na medição local, ligar o gzip levou
  o FCP de **1240 ms para 824 ms** — é o maior ganho isolado que sobrou no site, e aqui
  não custa configuração nenhuma.
- **Cache**: o arquivo **`_headers`** na raiz do projeto já traz as regras. As fontes
  ficam um ano no navegador (nome e conteúdo nunca mudam), as fotos uma semana, e
  CSS/JS/dados uma hora — curto de propósito, porque são editados à mão e uma correção
  precisa circular rápido. O HTML fica de fora, revalidado a cada visita.

O `_headers` é lido pelo Cloudflare Pages e pelo Netlify. Em hospedagem Apache ele é
ignorado: lá o equivalente seria um `.htaccess` com `mod_deflate` e `mod_expires`.

---

## Quando for publicar os outros sites

Mesmo painel, mesmo plano: **Workers & Pages** → **Create** → um projeto por
repositório. O plano grátis não limita a quantidade de projetos. Cada domínio precisa
passar pelo Passo 2 (nameservers apontando para a Cloudflare) uma vez.
