/* =========================================================
   BANCO DE PROMPTS — Adeline Mendes Cerimonial

   Cada item aqui corresponde a UM slot de imagem do site.
   Gere a imagem, salve em assets/img/ com o nome indicado em
   "arquivo" e o placeholder some sozinho.

   Campos:
     id        identificador interno
     titulo    nome amigável
     destino   em que página e seção a imagem aparece
     arquivo   onde salvar (o nome precisa ser exatamente este)
     proporcao proporção da imagem
     cerimonia casamento | infantil | geral
     elemento  cerimonia | mesa | flores | iluminacao | papelaria |
               traje | retrato | ambiente | bolo
     estilo    classico | rustico | minimalista | boho | praia |
               tropical | atemporal
     paleta    nude | nude-rose | colorido
     ambiente  interno | externo
     horario   manha | tarde | fim-de-tarde | noite
     prompt    o prompt principal, em inglês
     negative  o que evitar
     tags      palavras para a busca

   As variações de sintaxe por ferramenta (Midjourney, Flux,
   Stable Diffusion/Ideogram) são montadas automaticamente pelo
   índice em index.html a partir do prompt, do negative e da
   proporção. Você só precisa editar o texto do prompt.

   A paleta do site é nude terroso com rosé antigo. Todos os
   prompts pedem essa paleta de propósito, para que as imagens
   combinem entre si e com o layout.
   ========================================================= */

window.PROMPTS = [

  /* ============ HOME ============ */
  {
    id: "home-hero",
    titulo: "Hero da home",
    destino: "index.html — hero principal",
    arquivo: "assets/img/home-hero.jpg",
    proporcao: "4:5",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "classico",
    paleta: "nude-rose", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "A Brazilian bride and groom holding hands during an outdoor wedding ceremony, a floral arch of white roses and eucalyptus behind them, guests seated out of focus, classic elegant decoration, warm nude palette of linen, sand, taupe and dusty rose, open-air venue in the late afternoon, soft golden backlight with gentle rim light on the veil, vertical medium shot, 85mm lens at f/1.8, shallow depth of field, editorial wedding photography, natural skin tones, fine detail, photorealistic",
    negative: "text, watermark, logo, signature, extra fingers, deformed hands, distorted faces, blurry, oversaturated, neon colors, harsh direct flash, cluttered background, plastic skin, cartoon, illustration, low resolution",
    tags: ["noivos", "arco", "cerimônia", "pôr do sol", "capa"]
  },
  {
    id: "home-sobre",
    titulo: "Retrato da cerimonialista",
    destino: "index.html — seção Sobre mim",
    arquivo: "assets/img/home-sobre.jpg",
    proporcao: "4:5",
    cerimonia: "geral", elemento: "retrato", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "A Brazilian woman in her forties working as a wedding planner, elegant and composed, holding a clipboard with the event schedule and wearing a discreet earpiece, checking the reception setup behind her, tables being arranged out of focus, warm nude palette of linen, sand and taupe, indoor venue in the afternoon, soft diffused natural light from a large window, vertical three-quarter portrait, 50mm lens at f/2, editorial documentary photography, natural skin tones, calm confident expression, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted face, blurry, oversaturated, harsh flash, messy background, plastic skin, cartoon, stock-photo smile, low resolution",
    tags: ["retrato", "cerimonialista", "bastidores", "prancheta"],
    observacao: "Esta foto representa a Adeline. O ideal é substituí-la por uma foto real dela assim que possível."
  },
  {
    id: "servico-casamento",
    titulo: "Card do serviço Casamento",
    destino: "index.html — cards de serviços",
    arquivo: "assets/img/servico-casamento.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "classico",
    paleta: "nude-rose", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Wedding ceremony aisle seen from behind the last row of chairs, white wooden chairs aligned on both sides, floral arch at the end of the aisle with white and blush roses, petals scattered on the ground, classic elegant decoration, warm nude palette of linen, sand, taupe and dusty rose, garden venue in the late afternoon, soft warm sunlight filtering through trees, horizontal wide shot, 35mm lens at f/4, editorial wedding photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people in focus, distorted faces, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, illustration, low resolution",
    tags: ["corredor", "cadeiras", "arco", "serviço"]
  },
  {
    id: "servico-infantil",
    titulo: "Card do serviço Aniversário infantil",
    destino: "index.html — cards de serviços",
    arquivo: "assets/img/servico-infantil.jpg",
    proporcao: "3:2",
    cerimonia: "infantil", elemento: "bolo", estilo: "minimalista",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Children's birthday party dessert table styled with restraint, a two-tier cake with smooth buttercream finish, small jars of sweets, a few balloons in muted tones arranged in an organic arch, no cartoon characters, warm nude palette of cream, sand and dusty rose with soft terracotta accents, indoor venue in the afternoon, soft diffused daylight, horizontal medium shot, 35mm lens at f/2.8, editorial event photography, clean composition, fine detail, photorealistic",
    negative: "text, watermark, logo, licensed characters, cartoon mascots, garish primary colors, plastic toys clutter, distorted shapes, blurry, oversaturated, harsh flash, low resolution",
    tags: ["bolo", "mesa de doces", "balões", "infantil"]
  },
  {
    id: "servico-assessoria",
    titulo: "Card do serviço Assessoria do dia",
    destino: "index.html — cards de serviços",
    arquivo: "assets/img/servico-assessoria.jpg",
    proporcao: "3:2",
    cerimonia: "geral", elemento: "ambiente", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Close-up of hands holding a printed event run-of-show schedule on a clipboard, a pen and a small radio earpiece resting on a linen tablecloth beside it, event setup blurred in the background, warm nude palette of linen, sand and taupe, indoor venue in the afternoon, soft natural side light, horizontal detail shot, 50mm lens at f/2.2, shallow depth of field, editorial documentary photography, fine detail, photorealistic",
    negative: "text legible on paper, watermark, logo, extra fingers, deformed hands, blurry subject, oversaturated, harsh flash, cluttered, cartoon, low resolution",
    tags: ["roteiro", "prancheta", "bastidores", "detalhe"]
  },
  {
    id: "galeria-01",
    titulo: "Galeria 01 — cerimônia ao ar livre",
    destino: "index.html e galeria.html",
    arquivo: "assets/img/galeria-01.jpg",
    proporcao: "1:1",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "classico",
    paleta: "nude-rose", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Outdoor wedding ceremony seen from the side, the couple standing under a floral arch of white roses and dried pampas, officiant in front of them, guests seated on white chairs, classic elegant decoration, warm nude palette of linen, sand, taupe and dusty rose, garden venue at golden hour, warm low sunlight with long soft shadows, square composition, 50mm lens at f/2.8, editorial wedding photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted faces, blurry, oversaturated, neon colors, harsh flash, cluttered background, cartoon, low resolution",
    tags: ["cerimônia", "arco", "golden hour"]
  },
  {
    id: "galeria-02",
    titulo: "Galeria 02 — mesa posta",
    destino: "index.html e galeria.html",
    arquivo: "assets/img/galeria-02.jpg",
    proporcao: "1:1",
    cerimonia: "casamento", elemento: "mesa", estilo: "classico",
    paleta: "nude", ambiente: "interno", horario: "noite",
    prompt: "Wedding guest table set for dinner, off-white plates, gold-rimmed glassware, linen napkins with a small dried flower sprig, a low centerpiece of white and blush roses, lit taper candles, classic elegant table setting, warm nude palette of linen, sand, taupe and soft gold, indoor reception at night, warm candlelight with soft ambient fill, square overhead-angled shot, 35mm lens at f/3.5, editorial wedding photography, fine detail, photorealistic",
    negative: "text, watermark, logo, hands in frame, distorted glassware, blurry, oversaturated, neon colors, harsh flash, cluttered table, cartoon, low resolution",
    tags: ["mesa", "posta", "velas", "flores"]
  },
  {
    id: "galeria-03",
    titulo: "Galeria 03 — papelaria",
    destino: "index.html e galeria.html",
    arquivo: "assets/img/galeria-03.jpg",
    proporcao: "1:1",
    cerimonia: "casamento", elemento: "papelaria", estilo: "minimalista",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Wedding stationery flat lay on a textured linen surface, an invitation card in cream paper with deckled edges, a folded menu, a place card, a silk ribbon in dusty rose and a sprig of dried eucalyptus, no readable text on the paper, minimalist styling, warm nude palette of cream, sand and dusty rose, indoor in the afternoon, soft diffused daylight with gentle shadows, square top-down shot, 50mm lens at f/4, editorial product photography, fine paper texture, photorealistic",
    negative: "readable text, lettering, calligraphy words, watermark, logo, hands, blurry, oversaturated, harsh flash, cluttered, cartoon, low resolution",
    tags: ["papelaria", "convite", "flat lay", "detalhe"]
  },
  {
    id: "galeria-04",
    titulo: "Galeria 04 — mesa do bolo infantil",
    destino: "index.html e galeria.html",
    arquivo: "assets/img/galeria-04.jpg",
    proporcao: "1:1",
    cerimonia: "infantil", elemento: "bolo", estilo: "minimalista",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Children's birthday cake table, a single-tier cake with smooth buttercream and fresh flowers on top, a small stand of cupcakes, an organic balloon arch in muted cream, sand and dusty rose tones, no cartoon characters, warm nude palette, indoor venue in the afternoon, soft diffused daylight, square medium shot, 35mm lens at f/2.8, editorial event photography, clean composition, photorealistic",
    negative: "text, watermark, logo, licensed characters, cartoon mascots, garish primary colors, plastic clutter, blurry, oversaturated, harsh flash, low resolution",
    tags: ["bolo", "balões", "infantil", "mesa"]
  },
  {
    id: "galeria-05",
    titulo: "Galeria 05 — primeira dança",
    destino: "index.html e galeria.html",
    arquivo: "assets/img/galeria-05.jpg",
    proporcao: "1:1",
    cerimonia: "casamento", elemento: "iluminacao", estilo: "classico",
    paleta: "nude", ambiente: "interno", horario: "noite",
    prompt: "Bride and groom dancing their first dance on an empty dance floor, guests watching from the edges in soft focus, warm string lights hanging above, classic elegant reception, warm nude palette of linen, sand and taupe with amber light, indoor venue at night, warm backlight creating a soft halo around the couple, square medium shot, 85mm lens at f/1.8, shallow depth of field, editorial wedding photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted faces, blurry subject, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["dança", "pista", "luz quente", "noite"]
  },
  {
    id: "galeria-06",
    titulo: "Galeria 06 — parabéns infantil",
    destino: "index.html e galeria.html",
    arquivo: "assets/img/galeria-06.jpg",
    proporcao: "1:1",
    cerimonia: "infantil", elemento: "cerimonia", estilo: "minimalista",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "A young Brazilian child about to blow out the candles on a birthday cake, family gathered around clapping in soft focus, warm and joyful atmosphere, muted balloon decoration in cream and dusty rose, warm nude palette, indoor venue in the late afternoon, warm candlelight on the child's face with soft ambient fill, square medium shot, 50mm lens at f/2, editorial event photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted faces, blurry subject, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["parabéns", "vela", "criança", "família"]
  },
  {
    id: "galeria-07",
    titulo: "Galeria 07 — entrada da noiva",
    destino: "galeria.html",
    arquivo: "assets/img/galeria-07.jpg",
    proporcao: "4:5",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "classico",
    paleta: "nude-rose", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Bride walking down the aisle with her father, seen from behind, long veil trailing, rose petals scattered on the aisle runner, guests standing on both sides, classic elegant decoration, warm nude palette of linen, sand, taupe and dusty rose, garden venue at golden hour, warm backlight through the veil, vertical medium shot, 70mm lens at f/2.2, editorial wedding photography, photorealistic",
    negative: "text, watermark, logo, distorted faces, extra limbs, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["entrada", "noiva", "corredor", "véu"]
  },
  {
    id: "galeria-08",
    titulo: "Galeria 08 — lounge da recepção",
    destino: "galeria.html",
    arquivo: "assets/img/galeria-08.jpg",
    proporcao: "4:5",
    cerimonia: "casamento", elemento: "ambiente", estilo: "boho",
    paleta: "nude", ambiente: "externo", horario: "noite",
    prompt: "Outdoor wedding reception lounge area, low linen sofas with textured cushions, a woven rug, side tables with candles and dried arrangements, string lights overhead, boho elegant styling, warm nude palette of linen, sand, taupe and terracotta, garden venue at night, warm ambient light from candles and string lights, vertical wide shot, 24mm lens at f/2.8, editorial event photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, distorted furniture, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["lounge", "recepção", "boho", "luz"]
  },
  {
    id: "galeria-09",
    titulo: "Galeria 09 — painel da festa infantil",
    destino: "galeria.html",
    arquivo: "assets/img/galeria-09.jpg",
    proporcao: "4:5",
    cerimonia: "infantil", elemento: "ambiente", estilo: "minimalista",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Children's party backdrop panel, an arched fabric panel in cream with an organic balloon garland in muted cream, sand and dusty rose, dried pampas accents, a small table with a cake in front, no characters and no readable text, minimalist styling, warm nude palette, indoor venue in the afternoon, soft diffused daylight, vertical medium shot, 35mm lens at f/3.2, editorial event photography, photorealistic",
    negative: "readable text, letters, numbers, watermark, logo, licensed characters, cartoon mascots, garish colors, plastic clutter, blurry, oversaturated, harsh flash, low resolution",
    tags: ["painel", "balões", "infantil", "cenário"]
  },
  {
    id: "home-chamada",
    titulo: "Fundo da chamada final da home",
    destino: "index.html — bloco escuro de chamada",
    arquivo: "assets/img/home-chamada.jpg",
    proporcao: "16:9",
    cerimonia: "casamento", elemento: "ambiente", estilo: "classico",
    paleta: "nude", ambiente: "externo", horario: "noite",
    prompt: "Wide view of an outdoor wedding reception at night, long tables with candles running down the middle, string lights crossing above, guests blurred in movement, classic elegant decoration, warm nude palette of linen, sand and taupe with amber light, garden venue at night, warm ambient candlelight, horizontal cinematic wide shot with plenty of empty space in the center for text overlay, 24mm lens at f/2.8, editorial wedding photography, photorealistic",
    negative: "text, watermark, logo, faces in focus, distorted faces, busy center of frame, blurry, oversaturated, neon colors, harsh flash, cartoon, low resolution",
    tags: ["fundo", "noite", "recepção", "espaço para texto"]
  },

  /* ============ CASAMENTO ============ */
  {
    id: "casamento-hero",
    titulo: "Hero da página de casamento",
    destino: "casamento.html — hero",
    arquivo: "assets/img/casamento-hero.jpg",
    proporcao: "4:5",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "classico",
    paleta: "nude-rose", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Close view of a Brazilian bride and groom exchanging rings during the ceremony, hands in the foreground, floral arch softly blurred behind, classic elegant decoration, warm nude palette of linen, sand, taupe and dusty rose, open-air venue in the late afternoon, soft golden light from the side, vertical medium close-up, 85mm lens at f/2, shallow depth of field, editorial wedding photography, natural skin tones, fine detail, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted faces, blurry subject, oversaturated, neon colors, harsh flash, cluttered background, cartoon, low resolution",
    tags: ["alianças", "mãos", "cerimônia", "capa"]
  },
  {
    id: "casamento-incluso",
    titulo: "Bastidores da assessoria",
    destino: "casamento.html — seção O que está incluso",
    arquivo: "assets/img/casamento-incluso.jpg",
    proporcao: "4:5",
    cerimonia: "casamento", elemento: "retrato", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Wedding planner adjusting the bride's veil moments before the entrance, seen from behind the planner, soft natural light from a window, quiet backstage atmosphere, warm nude palette of linen, sand and taupe, indoor venue in the afternoon, soft diffused side light, vertical medium shot, 50mm lens at f/2, editorial documentary photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted faces, blurry subject, oversaturated, harsh flash, cluttered, cartoon, low resolution",
    tags: ["bastidores", "véu", "preparação"]
  },
  {
    id: "casamento-altar",
    titulo: "Elemento: cerimônia e altar",
    destino: "casamento.html — elementos visuais",
    arquivo: "assets/img/casamento-altar.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "classico",
    paleta: "nude-rose", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Empty wedding ceremony altar ready for the couple, a circular floral arch with white roses, dried pampas and eucalyptus, an aisle runner in natural linen with scattered petals, white wooden chairs on both sides, classic elegant decoration, warm nude palette of linen, sand, taupe and dusty rose, garden venue in the late afternoon, soft warm sunlight, horizontal wide shot, 35mm lens at f/4, editorial wedding photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, distorted structures, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["altar", "arco", "corredor", "cadeiras"]
  },
  {
    id: "casamento-mesas",
    titulo: "Elemento: mesas e posta",
    destino: "casamento.html — elementos visuais",
    arquivo: "assets/img/casamento-mesas.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "mesa", estilo: "classico",
    paleta: "nude", ambiente: "interno", horario: "noite",
    prompt: "Long wedding banquet table seen at an angle, linen tablecloth, off-white plates, gold cutlery, taper candles in brass holders, low arrangements of white and blush roses running along the center, classic elegant table setting, warm nude palette of linen, sand, taupe and soft gold, indoor reception at night, warm candlelight with soft ambient fill, horizontal medium shot, 35mm lens at f/3.5, editorial wedding photography, fine detail, photorealistic",
    negative: "text, watermark, logo, hands, people, distorted glassware and cutlery, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["mesa", "banquete", "velas", "posta"]
  },
  {
    id: "casamento-flores",
    titulo: "Elemento: flores e folhagem",
    destino: "casamento.html — elementos visuais",
    arquivo: "assets/img/casamento-flores.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "flores", estilo: "classico",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Bridal bouquet resting on a linen surface next to loose stems, white and blush garden roses, ranunculus, dried pampas and eucalyptus, a silk ribbon in dusty rose trailing to the side, warm nude palette of cream, sand and dusty rose, indoor in the afternoon, soft diffused daylight with gentle shadows, horizontal detail shot, 50mm lens at f/2.8, editorial floral photography, fine petal texture, photorealistic",
    negative: "text, watermark, logo, hands, plastic flowers, distorted petals, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["buquê", "flores", "folhagem", "detalhe"]
  },
  {
    id: "casamento-iluminacao",
    titulo: "Elemento: iluminação",
    destino: "casamento.html — elementos visuais",
    arquivo: "assets/img/casamento-iluminacao.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "iluminacao", estilo: "classico",
    paleta: "nude", ambiente: "externo", horario: "noite",
    prompt: "Warm string lights crossing above an outdoor wedding dance floor, glowing bulbs in the foreground out of focus, tables with candles below, silhouettes of guests dancing, classic elegant reception, warm nude palette with amber light, garden venue at night, warm ambient lighting with visible bokeh, horizontal wide shot, 35mm lens at f/1.8, editorial wedding photography, photorealistic",
    negative: "text, watermark, logo, faces in focus, distorted faces, blurry subject, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["iluminação", "varal de luz", "pista", "bokeh"]
  },
  {
    id: "casamento-papelaria",
    titulo: "Elemento: papelaria",
    destino: "casamento.html — elementos visuais",
    arquivo: "assets/img/casamento-papelaria.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "papelaria", estilo: "minimalista",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Wedding stationery suite arranged on textured linen, an invitation in cream deckled-edge paper, a vellum overlay, a folded menu, a place card and a wax seal in dusty rose, dried flower sprigs beside them, no readable text on the paper, minimalist styling, warm nude palette of cream, sand and dusty rose, indoor in the afternoon, soft diffused daylight, horizontal top-down shot, 50mm lens at f/4, editorial product photography, fine paper texture, photorealistic",
    negative: "readable text, lettering, calligraphy words, watermark, logo, hands, blurry, oversaturated, harsh flash, cluttered, cartoon, low resolution",
    tags: ["papelaria", "convite", "lacre", "flat lay"]
  },
  {
    id: "casamento-trajes",
    titulo: "Elemento: trajes",
    destino: "casamento.html — elementos visuais",
    arquivo: "assets/img/casamento-trajes.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "traje", estilo: "classico",
    paleta: "nude", ambiente: "interno", horario: "manha",
    prompt: "Wedding attire hanging side by side in a bright room, a long ivory bridal gown on a wooden hanger and a beige groom suit beside it, shoes and accessories arranged on a bench below, warm nude palette of ivory, linen and taupe, indoor in the morning, soft natural light from a large window, horizontal medium shot, 35mm lens at f/3.5, editorial wedding photography, fine fabric texture, photorealistic",
    negative: "text, watermark, logo, people, distorted fabric, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["vestido", "terno", "traje", "preparação"]
  },
  {
    id: "casamento-estilo-classico",
    titulo: "Estilo: clássico",
    destino: "casamento.html — variações de estilo",
    arquivo: "assets/img/casamento-estilo-classico.jpg",
    proporcao: "3:4",
    cerimonia: "casamento", elemento: "ambiente", estilo: "classico",
    paleta: "nude", ambiente: "interno", horario: "noite",
    prompt: "Classic formal wedding reception, symmetrical round tables with white linen, tall candelabras with taper candles, white roses and marble surfaces, gold accents, an elegant ballroom with high ceilings, warm nude palette of white, cream and soft gold, indoor venue at night, warm candlelight and soft chandelier glow, vertical wide shot, 24mm lens at f/3.5, editorial wedding photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, distorted architecture, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["clássico", "velas", "salão", "formal"]
  },
  {
    id: "casamento-estilo-rustico",
    titulo: "Estilo: rústico",
    destino: "casamento.html — variações de estilo",
    arquivo: "assets/img/casamento-estilo-rustico.jpg",
    proporcao: "3:4",
    cerimonia: "casamento", elemento: "ambiente", estilo: "rustico",
    paleta: "nude", ambiente: "interno", horario: "noite",
    prompt: "Rustic barn wedding reception, long wooden tables without tablecloths, linen runners, mason jars with wildflowers, string lights hanging from exposed wooden beams, hay bales and lanterns at the edges, warm nude palette of wood, linen and sand, indoor barn venue at night, warm amber string lighting, vertical wide shot, 24mm lens at f/2.8, editorial wedding photography, fine wood texture, photorealistic",
    negative: "text, watermark, logo, people, distorted architecture, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["rústico", "madeira", "celeiro", "luz quente"]
  },
  {
    id: "casamento-estilo-minimalista",
    titulo: "Estilo: minimalista",
    destino: "casamento.html — variações de estilo",
    arquivo: "assets/img/casamento-estilo-minimalista.jpg",
    proporcao: "3:4",
    cerimonia: "casamento", elemento: "ambiente", estilo: "minimalista",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Minimalist wedding reception, a clean space with few elements, one long table with a plain linen runner, single-stem flowers in slim vases, unadorned white chairs, large empty walls and generous negative space, warm nude palette of white, linen and pale sand, indoor venue in the afternoon, soft diffused natural light, vertical wide shot, 35mm lens at f/4, editorial architectural photography, clean composition, photorealistic",
    negative: "text, watermark, logo, people, clutter, excessive decoration, distorted architecture, blurry, oversaturated, neon colors, harsh flash, cartoon, low resolution",
    tags: ["minimalista", "limpo", "poucas peças"]
  },
  {
    id: "casamento-estilo-boho",
    titulo: "Estilo: boho",
    destino: "casamento.html — variações de estilo",
    arquivo: "assets/img/casamento-estilo-boho.jpg",
    proporcao: "3:4",
    cerimonia: "casamento", elemento: "ambiente", estilo: "boho",
    paleta: "nude", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Boho wedding setting outdoors, layered vintage rugs on the ground, floor cushions around a low wooden table, macramé hangings and dried pampas arrangements, a fabric canopy above, warm nude palette of sand, terracotta, cream and taupe, open-air venue in the late afternoon, warm golden light with soft shadows, vertical wide shot, 24mm lens at f/2.8, editorial wedding photography, fine textile texture, photorealistic",
    negative: "text, watermark, logo, people, distorted objects, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["boho", "pampas", "macramê", "tapete"]
  },
  {
    id: "casamento-estilo-praia",
    titulo: "Estilo: pé na areia",
    destino: "casamento.html — variações de estilo",
    arquivo: "assets/img/casamento-estilo-praia.jpg",
    proporcao: "3:4",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "praia",
    paleta: "nude", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Beach wedding ceremony setup on the sand, a simple wooden arch draped with flowing sheer fabric moving in the wind, a few white chairs, a path of shells and petals, ocean and sky in the background, warm nude palette of sand, ivory and pale blue-grey, beach venue at sunset, warm low sunlight with soft haze, vertical wide shot, 35mm lens at f/4, editorial wedding photography, photorealistic",
    negative: "text, watermark, logo, people, distorted horizon, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["praia", "areia", "pôr do sol", "tecido"]
  },
  {
    id: "casamento-estilo-tropical",
    titulo: "Estilo: tropical brasileiro",
    destino: "casamento.html — variações de estilo",
    arquivo: "assets/img/casamento-estilo-tropical.jpg",
    proporcao: "3:4",
    cerimonia: "casamento", elemento: "mesa", estilo: "tropical",
    paleta: "nude", ambiente: "externo", horario: "tarde",
    prompt: "Tropical Brazilian wedding table under palm trees, large green monstera and banana leaves as table runners, arrangements of local fruits and white orchids, woven natural fiber placemats, ceramic tableware, warm nude palette of linen and sand with deep green and terracotta accents, open-air venue in the afternoon, dappled warm sunlight filtering through leaves, vertical medium shot, 35mm lens at f/3.2, editorial wedding photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, plastic plants, distorted fruit, blurry, oversaturated, neon colors, harsh flash, cluttered, cartoon, low resolution",
    tags: ["tropical", "folhagem", "frutas", "brasileiro"]
  },
  {
    id: "casamento-chamada",
    titulo: "Fundo da chamada final de casamento",
    destino: "casamento.html — bloco escuro de chamada",
    arquivo: "assets/img/casamento-chamada.jpg",
    proporcao: "16:9",
    cerimonia: "casamento", elemento: "ambiente", estilo: "classico",
    paleta: "nude", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Wide cinematic view of an outdoor wedding venue just before the ceremony, empty chairs aligned facing a floral arch, warm late afternoon light across the lawn, classic elegant decoration, warm nude palette of linen, sand and taupe, garden venue at golden hour, warm low sunlight with long shadows, horizontal cinematic wide shot with plenty of empty space in the center for text overlay, 24mm lens at f/4, editorial wedding photography, photorealistic",
    negative: "text, watermark, logo, people, busy center of frame, distorted structures, blurry, oversaturated, neon colors, harsh flash, cartoon, low resolution",
    tags: ["fundo", "espaço para texto", "golden hour", "cerimônia"]
  },

  /* ============ ANIVERSÁRIO INFANTIL ============ */
  {
    id: "infantil-hero",
    titulo: "Hero da página de aniversário infantil",
    destino: "aniversario-infantil.html — hero (foto em arco)",
    arquivo: "assets/img/infantil-hero.jpg",
    proporcao: "4:5",
    cerimonia: "infantil", elemento: "bolo", estilo: "minimalista",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "A small Brazilian child around three years old smiling in front of a styled birthday cake table, seen slightly from the side, a two-tier cake with smooth buttercream, an organic balloon garland in muted cream, sand and dusty rose behind, a few dried flowers, no cartoon characters, warm nude palette of cream, sand and dusty rose, indoor venue in the afternoon, soft diffused window light, vertical medium shot with the child in the lower third and space above for the arched crop, 85mm lens at f/2, shallow depth of field, editorial event photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, licensed characters, cartoon mascots, garish primary colors, distorted face, extra fingers, deformed hands, blurry subject, oversaturated, harsh flash, plastic clutter, low resolution",
    tags: ["criança", "bolo", "balões", "capa"],
    observacao: "A foto recebe recorte em arco no topo: deixe espaço acima da criança."
  },
  {
    id: "infantil-incluso",
    titulo: "Bastidores da festa infantil",
    destino: "aniversario-infantil.html — seção O que está incluso",
    arquivo: "assets/img/infantil-incluso.jpg",
    proporcao: "4:5",
    cerimonia: "infantil", elemento: "retrato", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Event planner seen from behind and slightly to the side, adjusting a small sign on a children's party dessert table before guests arrive, holding a clipboard in the other hand, jars of sweets and a simple cake on the table, balloons in muted tones in the background, quiet backstage atmosphere, warm nude palette of cream, sand and dusty rose, indoor venue in the afternoon, soft diffused side light, vertical medium shot, 50mm lens at f/2, editorial documentary photography, photorealistic",
    negative: "readable text, watermark, logo, licensed characters, cartoon mascots, extra fingers, deformed hands, distorted face, blurry, oversaturated, harsh flash, clutter, low resolution",
    tags: ["bastidores", "mesa de doces", "cerimonialista"]
  },
  {
    id: "infantil-tema-jardim",
    titulo: "Tema: jardim encantado",
    destino: "aniversario-infantil.html — temas",
    arquivo: "assets/img/infantil-tema-jardim.jpg",
    proporcao: "3:4",
    cerimonia: "infantil", elemento: "ambiente", estilo: "atemporal",
    paleta: "nude-rose", ambiente: "externo", horario: "tarde",
    prompt: "Enchanted garden themed children's birthday party table outdoors, pastel flowers in low arrangements, paper butterflies on thin wires, a cake decorated with pressed flowers, a wooden table with a linen runner, greenery and a garden in the background, warm nude palette of cream, blush, sage and dusty rose, garden venue in the afternoon, soft warm dappled sunlight, vertical medium shot, 35mm lens at f/2.8, editorial event photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, licensed characters, cartoon mascots, garish colors, plastic flowers, distorted objects, blurry, oversaturated, harsh flash, low resolution",
    tags: ["jardim", "borboletas", "flores", "tema"]
  },
  {
    id: "infantil-tema-safari",
    titulo: "Tema: safári",
    destino: "aniversario-infantil.html — temas",
    arquivo: "assets/img/infantil-tema-safari.jpg",
    proporcao: "3:4",
    cerimonia: "infantil", elemento: "ambiente", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Safari themed children's birthday party table, tropical leaves and pampas grass, woven straw baskets, soft plush toy animals like a lion and a giraffe in natural beige tones, a cake with a simple leaf decoration, balloons in sand, olive and cream, warm nude palette of sand, olive green and caramel, indoor venue in the afternoon, soft diffused daylight, vertical medium shot, 35mm lens at f/2.8, editorial event photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, licensed characters, cartoon mascots, garish colors, plastic clutter, distorted animals, blurry, oversaturated, harsh flash, low resolution",
    tags: ["safári", "folhagem", "bichos", "tema"]
  },
  {
    id: "infantil-tema-circo",
    titulo: "Tema: circo vintage",
    destino: "aniversario-infantil.html — temas",
    arquivo: "assets/img/infantil-tema-circo.jpg",
    proporcao: "3:4",
    cerimonia: "infantil", elemento: "ambiente", estilo: "atemporal",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Vintage circus themed children's birthday party table, a striped fabric tent backdrop in cream and muted terracotta, popcorn in striped paper boxes, a small carousel cake topper, pennant garlands without letters, wooden toys, warm nude palette of cream, sand, muted terracotta and dusty rose, indoor venue in the afternoon, soft warm diffused light, vertical medium shot, 35mm lens at f/2.8, editorial event photography, fine detail, photorealistic",
    negative: "readable text, letters, watermark, logo, people, clowns, licensed characters, garish primary colors, plastic clutter, distorted objects, blurry, oversaturated, harsh flash, low resolution",
    tags: ["circo", "listras", "pipoca", "tema"]
  },
  {
    id: "infantil-tema-mar",
    titulo: "Tema: fundo do mar",
    destino: "aniversario-infantil.html — temas",
    arquivo: "assets/img/infantil-tema-mar.jpg",
    proporcao: "3:4",
    cerimonia: "infantil", elemento: "ambiente", estilo: "atemporal",
    paleta: "colorido", ambiente: "interno", horario: "tarde",
    prompt: "Under the sea themed children's birthday party table, an organic balloon garland in dusty blue, seafoam and sand, seashells and starfish scattered on a linen tablecloth, a cake with a soft wave pattern in pale blue buttercream, fishing net draped at the side, calm muted coastal palette of sand, dusty blue and cream, indoor venue in the afternoon, soft diffused daylight, vertical medium shot, 35mm lens at f/2.8, editorial event photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, licensed characters, cartoon mascots, neon blue, garish colors, plastic clutter, distorted objects, blurry, oversaturated, harsh flash, low resolution",
    tags: ["fundo do mar", "conchas", "azul", "tema"]
  },
  {
    id: "infantil-tema-confeitaria",
    titulo: "Tema: confeitaria",
    destino: "aniversario-infantil.html — temas",
    arquivo: "assets/img/infantil-tema-confeitaria.jpg",
    proporcao: "3:4",
    cerimonia: "infantil", elemento: "bolo", estilo: "atemporal",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Sweet shop themed children's birthday party table, a tiered cake with pastel drip icing, glass jars of colorful candies in soft tones, macarons on a cake stand, tiny aprons and chef hats folded for the children, a scalloped awning backdrop in blush and cream stripes, warm pastel palette of cream, blush, pistachio and dusty rose, indoor venue in the afternoon, soft diffused daylight, vertical medium shot, 35mm lens at f/2.8, editorial food and event photography, fine detail, photorealistic",
    negative: "readable text, watermark, logo, people, licensed characters, cartoon mascots, garish neon colors, plastic clutter, distorted food, blurry, oversaturated, harsh flash, low resolution",
    tags: ["confeitaria", "doces", "pastel", "tema"]
  },
  {
    id: "infantil-tema-espaco",
    titulo: "Tema: espaço sideral",
    destino: "aniversario-infantil.html — temas",
    arquivo: "assets/img/infantil-tema-espaco.jpg",
    proporcao: "3:4",
    cerimonia: "infantil", elemento: "ambiente", estilo: "atemporal",
    paleta: "colorido", ambiente: "interno", horario: "noite",
    prompt: "Outer space themed children's birthday party table, a deep navy fabric backdrop with tiny warm fairy lights like stars, planets made of matte balloons in sand, terracotta and cream, a small wooden rocket, a cake with a gold crescent moon, warm muted palette of navy, sand, terracotta and soft gold, indoor venue in the evening, warm soft ambient lighting with gentle glow, vertical medium shot, 35mm lens at f/2.8, editorial event photography, fine detail, photorealistic",
    negative: "text, watermark, logo, people, licensed characters, cartoon mascots, neon colors, plastic clutter, distorted objects, blurry, oversaturated, harsh flash, low resolution",
    tags: ["espaço", "planetas", "estrelas", "tema"]
  },
  {
    id: "infantil-chamada",
    titulo: "Fundo da chamada final infantil",
    destino: "aniversario-infantil.html — bloco escuro de chamada",
    arquivo: "assets/img/infantil-chamada.jpg",
    proporcao: "16:9",
    cerimonia: "infantil", elemento: "ambiente", estilo: "minimalista",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Wide cinematic view of a children's party venue ready before guests arrive, a styled dessert table at one side, balloon garlands in muted cream and dusty rose, small tables and chairs for children, soft late afternoon light entering through tall windows, warm nude palette of cream, sand and dusty rose, indoor venue in the late afternoon, warm diffused light, horizontal cinematic wide shot with plenty of empty space in the center for text overlay, 24mm lens at f/4, editorial event photography, photorealistic",
    negative: "text, watermark, logo, people, busy center of frame, licensed characters, garish colors, distorted structures, blurry, oversaturated, harsh flash, low resolution",
    tags: ["fundo", "espaço para texto", "infantil"]
  },

  /* ============ SOBRE ============ */
  {
    id: "sobre-retrato",
    titulo: "Retrato principal da Adeline",
    destino: "sobre.html — hero (foto em arco)",
    arquivo: "assets/img/sobre-retrato.jpg",
    proporcao: "4:5",
    cerimonia: "geral", elemento: "retrato", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Elegant portrait of a Brazilian woman in her forties, a wedding planner, standing relaxed with a warm confident smile, wearing a tailored beige blazer over a cream blouse, holding a leather notebook, an event venue with soft draped fabric and flowers blurred behind her, warm nude palette of linen, sand and taupe, indoor in the afternoon, soft diffused window light, vertical waist-up portrait with space above the head for an arched crop, 85mm lens at f/2, shallow depth of field, editorial portrait photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted face, plastic skin, stock-photo pose, blurry, oversaturated, harsh flash, cluttered background, cartoon, low resolution",
    tags: ["retrato", "cerimonialista", "sobre"],
    observacao: "Esta foto representa a Adeline. O ideal é substituí-la por uma foto real dela assim que possível."
  },
  {
    id: "sobre-bastidores-01",
    titulo: "Bastidores: conferindo o roteiro",
    destino: "sobre.html — mosaico Nos bastidores (foto grande)",
    arquivo: "assets/img/sobre-bastidores-01.jpg",
    proporcao: "4:5",
    cerimonia: "geral", elemento: "retrato", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Wedding planner standing in an empty reception hall before doors open, reading a printed run-of-show on a clipboard, a discreet earpiece in one ear, tables set with linen and candles blurred around her, calm focused expression, warm nude palette of linen, sand and taupe, indoor venue in the late afternoon, soft warm window light, vertical medium shot, 50mm lens at f/2, editorial documentary photography, natural skin tones, photorealistic",
    negative: "readable text, watermark, logo, extra fingers, deformed hands, distorted face, blurry subject, oversaturated, harsh flash, clutter, cartoon, low resolution",
    tags: ["bastidores", "roteiro", "prancheta"]
  },
  {
    id: "sobre-bastidores-02",
    titulo: "Bastidores: kit de emergência",
    destino: "sobre.html — mosaico Nos bastidores",
    arquivo: "assets/img/sobre-bastidores-02.jpg",
    proporcao: "1:1",
    cerimonia: "geral", elemento: "ambiente", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Top-down view of an open wedding planner emergency kit on a linen surface, a canvas pouch with sewing needles and thread spools in ivory and nude, safety pins, double-sided tape, bobby pins, a small hairspray, tissues, bandages and a folded printed schedule, neatly organized, warm nude palette of linen, sand and taupe, indoor in the afternoon, soft diffused daylight, square flat lay composition, 50mm lens at f/4, editorial product photography, fine detail, photorealistic",
    negative: "readable text, brand labels, watermark, logo, hands, messy clutter, blurry, oversaturated, harsh flash, cartoon, low resolution",
    tags: ["kit emergência", "flat lay", "detalhe"]
  },
  {
    id: "sobre-bastidores-03",
    titulo: "Bastidores: alinhando a equipe",
    destino: "sobre.html — mosaico Nos bastidores",
    arquivo: "assets/img/sobre-bastidores-03.jpg",
    proporcao: "1:1",
    cerimonia: "geral", elemento: "retrato", estilo: "atemporal",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Wedding planner briefing a small event staff team in a circle before the party begins, seen from a slight distance, staff in neat dark uniforms listening, the planner gesturing with a clipboard, reception venue with draped fabric and warm lights in the background, warm nude palette of linen, sand and taupe, indoor venue in the late afternoon, soft warm ambient light, square medium wide shot, 35mm lens at f/2.8, editorial documentary photography, natural skin tones, photorealistic",
    negative: "readable text, watermark, logo, extra fingers, deformed hands, distorted faces, blurry, oversaturated, harsh flash, clutter, cartoon, low resolution",
    tags: ["equipe", "bastidores", "reunião"]
  },
  {
    id: "sobre-chamada",
    titulo: "Fundo da chamada final da página Sobre",
    destino: "sobre.html — bloco escuro de chamada",
    arquivo: "assets/img/sobre-chamada.jpg",
    proporcao: "16:9",
    cerimonia: "geral", elemento: "mesa", estilo: "minimalista",
    paleta: "nude", ambiente: "interno", horario: "tarde",
    prompt: "Wide cinematic view of a cozy café table set for a first meeting, two cups of coffee, a leather planner open with a pen, a small vase of dried flowers, a window with soft afternoon light at one side, warm nude palette of linen, sand, taupe and coffee brown, indoor in the afternoon, warm diffused light, horizontal cinematic wide shot with plenty of empty space in the center for text overlay, 35mm lens at f/2.8, editorial lifestyle photography, photorealistic",
    negative: "readable text, watermark, logo, people, busy center of frame, blurry, oversaturated, harsh flash, clutter, cartoon, low resolution",
    tags: ["fundo", "café", "reunião", "espaço para texto"]
  },

  /* ============ GALERIA (extras) ============ */
  {
    id: "galeria-10",
    titulo: "Galeria 10 — saída sob pétalas",
    destino: "galeria.html",
    arquivo: "assets/img/galeria-10.jpg",
    proporcao: "3:2",
    cerimonia: "casamento", elemento: "cerimonia", estilo: "classico",
    paleta: "nude-rose", ambiente: "externo", horario: "fim-de-tarde",
    prompt: "Brazilian bride and groom walking down the aisle after the ceremony, laughing, guests on both sides throwing white and blush rose petals in the air, petals frozen mid-air, classic elegant decoration, warm nude palette of linen, sand, taupe and dusty rose, garden venue at golden hour, warm backlight, horizontal medium wide shot, 50mm lens at f/2.2, editorial wedding photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, extra fingers, deformed hands, distorted faces, blurry subject, oversaturated, neon colors, harsh flash, cartoon, low resolution",
    tags: ["saída", "pétalas", "noivos"]
  },
  {
    id: "galeria-11",
    titulo: "Galeria 11 — recreação no jardim",
    destino: "galeria.html",
    arquivo: "assets/img/galeria-11.jpg",
    proporcao: "3:2",
    cerimonia: "infantil", elemento: "ambiente", estilo: "atemporal",
    paleta: "nude-rose", ambiente: "externo", horario: "tarde",
    prompt: "Children playing in a circle on a lawn with a party entertainer during a birthday party, holding a large parachute play fabric in muted cream and dusty rose, candid joyful moment, balloons in muted tones in the background, warm nude palette of cream, sand, sage and dusty rose, garden venue in the afternoon, soft warm sunlight, horizontal medium wide shot, 35mm lens at f/2.8, editorial documentary event photography, natural skin tones, photorealistic",
    negative: "text, watermark, logo, licensed characters, cartoon mascots, distorted faces, extra limbs, blurry, oversaturated, garish colors, harsh flash, low resolution",
    tags: ["recreação", "crianças", "jardim"]
  },
  {
    id: "galeria-12",
    titulo: "Galeria 12 — mesa de lembrancinhas",
    destino: "galeria.html",
    arquivo: "assets/img/galeria-12.jpg",
    proporcao: "1:1",
    cerimonia: "infantil", elemento: "mesa", estilo: "minimalista",
    paleta: "nude-rose", ambiente: "interno", horario: "tarde",
    prompt: "Party favors table at the exit of a children's birthday party, small kraft paper bags tied with dusty rose ribbon, little jars of sweets and tiny potted succulents lined up neatly, a linen tablecloth, a small basket, warm nude palette of kraft, cream, sand and dusty rose, indoor venue in the afternoon, soft diffused daylight, square composition, 50mm lens at f/2.8, editorial product photography, fine detail, photorealistic",
    negative: "readable text, labels, watermark, logo, people, licensed characters, garish colors, plastic clutter, blurry, oversaturated, harsh flash, low resolution",
    tags: ["lembrancinhas", "saída", "infantil"]
  }
];
