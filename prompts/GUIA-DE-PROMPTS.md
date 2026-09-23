# Guia de prompts de imagem

Uso interno. Esta pasta **não vai para a hospedagem**.

---

## Como usar no dia a dia

1. Abra `prompts/index.html` no navegador (duplo clique resolve).
2. Filtre pelo que falta: **Estado → Só pendentes**.
3. Clique em **Copiar para ChatGPT / Gemini** no card desejado.
4. Cole no gerador, gere a imagem e escolha a melhor.
5. Salve em `assets/img/` **com exatamente o nome que aparece no card**.
6. Recarregue o site: o placeholder some sozinho, sem editar código.
7. Recarregue o índice de prompts: o card passa de *pendente* para *✓ imagem gerada*.

Para acrescentar um prompt novo, edite `prompts.js`. As variações de sintaxe por
ferramenta são montadas automaticamente a partir do prompt, do negative e da
proporção — você só escreve o texto uma vez.

---

## A estrutura do prompt

Todos os prompts do arquivo seguem a mesma ordem. É ela que garante que as
imagens combinem entre si:

```
[assunto e cena] + [tipo de cerimônia] + [elementos-chave] + [estilo de decoração]
+ [paleta de cores] + [ambiente e horário] + [iluminação] + [enquadramento e lente]
+ [estilo fotográfico] + [qualidade]
```

Exemplo desmontado (o hero da home):

| Bloco | Trecho |
|---|---|
| Assunto e cena | *A Brazilian bride and groom holding hands* |
| Tipo de cerimônia | *during an outdoor wedding ceremony* |
| Elementos-chave | *a floral arch of white roses and eucalyptus behind them, guests seated out of focus* |
| Estilo de decoração | *classic elegant decoration* |
| Paleta | *warm nude palette of linen, sand, taupe and dusty rose* |
| Ambiente e horário | *open-air venue in the late afternoon* |
| Iluminação | *soft golden backlight with gentle rim light on the veil* |
| Enquadramento e lente | *vertical medium shot, 85mm lens at f/1.8, shallow depth of field* |
| Estilo fotográfico | *editorial wedding photography, natural skin tones* |
| Qualidade | *fine detail, photorealistic* |

### Por que os prompts estão em inglês

Praticamente todos os geradores foram treinados majoritariamente em inglês e
respondem melhor a termos técnicos de fotografia nesse idioma. O conteúdo do
site é em português; só o prompt é em inglês.

### Por que todos pedem a mesma paleta

A paleta do site é nude terroso com rosé antigo (`#F7F3EE`, `#E8DDD2`, `#A98E7C`,
`#8A7263`, `#B0756E`). Pedir *"warm nude palette of linen, sand, taupe and dusty
rose"* em todos os prompts faz as imagens parecerem do mesmo ensaio, e não um
apanhado de fotos avulsas. Se mudar a paleta do site, mude essa frase nos prompts.

---

## Negative prompt

O negative diz o que **não** deve aparecer. Os erros mais comuns em imagem de
evento são sempre os mesmos:

| Problema | O que colocar no negative |
|---|---|
| Mãos e dedos deformados | `extra fingers, deformed hands` |
| Rostos distorcidos ao fundo | `distorted faces` |
| Texto inventado em convites e placas | `text, lettering, watermark, logo` |
| Cor saturada demais, cara de filtro | `oversaturated, neon colors` |
| Luz dura de flash | `harsh direct flash` |
| Pele de plástico | `plastic skin` |
| Cena entulhada | `cluttered background` |

**Midjourney não tem campo de negative.** O botão de copiar já converte para o
parâmetro `--no`, que aceita poucos termos: por isso ele usa só os oito primeiros.

**Ideogram é o melhor para papelaria com texto.** Se quiser que o convite tenha
palavras legíveis, tire `text` e `lettering` do negative e escreva no prompt o
texto exato entre aspas.

---

## Proporções usadas no site

| Proporção | Onde aparece |
|---|---|
| `4:5` | Hero das páginas, retratos, fotos verticais de galeria |
| `3:2` | Cards de serviço e cards de elementos visuais |
| `3:4` | Cards de variação de estilo |
| `1:1` | Grade quadrada da galeria e fotos de depoimento |
| `16:9` | Fundos dos blocos escuros de chamada |

Os fundos `16:9` pedem **espaço vazio no centro** de propósito: é onde o texto
branco vai por cima. Se a imagem gerada tiver o assunto bem no meio, gere de novo.

---

## Parâmetros por ferramenta

### ChatGPT / Gemini / DALL·E
Linguagem natural, sem parâmetros. O botão principal já monta o texto com a
proporção e a lista do que evitar em português corrido no fim.

### Midjourney
```
<prompt> --ar 4:5 --style raw --v 7 --no text, watermark, logo, ...
```
- `--style raw` reduz a estilização automática e aproxima de fotografia real.
- `--ar` define a proporção.
- Use `--s 50` se estiver artístico demais.

### Flux
Linguagem natural longa, sem parâmetros. É o mais forte em realismo fotográfico
e o único que costuma acertar texto sem ajuda. Descreva a proporção por escrito.

### Stable Diffusion / Ideogram
Aceita negative prompt de verdade. Ponto de partida:
```
Steps: 30 | CFG: 6 | Sampler: DPM++ 2M Karras
```
- CFG acima de 8 costuma queimar a cor e endurecer a pele.
- Para papelaria com texto, Ideogram entrega muito acima dos outros.

---

## Regras de conteúdo que valem a pena manter

- **Pessoas brasileiras.** Os prompts pedem *Brazilian* de propósito. Sem isso,
  os geradores puxam para um padrão europeu que não parece o público real da
  Adeline em Cascavel.
- **Nada de personagem licenciado na festa infantil.** Além do problema de
  direitos, os geradores produzem versões deformadas de personagens conhecidos.
  Os prompts infantis pedem decoração sem personagens.
- **Nenhum retrato de IA passando por cliente real.** Os depoimentos do site
  estão sem foto justamente por isso. Foto de depoimento só com foto de verdade,
  e com autorização de quem aparece.
- **A foto da Adeline deve ser real.** Existe um prompt de retrato de
  cerimonialista para não deixar o espaço vazio, mas ele é um substituto
  temporário: o site ganha muito com a foto real dela.
