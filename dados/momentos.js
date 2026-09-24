/* =========================================================
   MOMENTOS — o carrossel da seção "Momentos que já aconteceram".

   Um momento por vez: a foto do evento ocupa o fundo inteiro e,
   na frente, aparece o texto contando o que aconteceu ali. A troca
   é automática a cada 7 segundos, com passagem suave entre as fotos.

   ATENÇÃO: os textos abaixo são genéricos, escritos para dar
   forma ao layout. Troque por eventos REAIS assim que tiver as
   fotos — é isso que faz a seção valer. Se for citar o nome dos
   noivos ou da criança, peça autorização antes de publicar.

   Cada item:
     foto   → caminho da imagem dentro de assets/img/. Use uma foto
              horizontal e de boa resolução (1600px de largura ou
              mais): ela vai ocupar a tela toda no fundo.
     alt    → descrição da foto para leitores de tela (obrigatório)
     titulo → nome curto do momento. Vira a linha em itálico.
              Ex.: "Casamento da Ana e do Pedro"
     evento → tipo e quando foi, em letra pequena.
              Ex.: "Casamento · Praia de Cumbuco · março de 2025"
     frase  → uma ou duas frases contando o que aconteceu ali.
              Deixe curto: são lidas em poucos segundos.

   Para acrescentar um momento, copie um bloco inteiro (das chaves
   de abrir às de fechar), cole antes do `];` e edite. Não esqueça
   a vírgula entre um bloco e outro.
   ========================================================= */
window.MOMENTOS = [
  {
    foto: "assets/img/galeria-01.jpg",
    alt: "Cerimônia de casamento ao ar livre com arco floral em tons nude.",
    titulo: "Cerimônia ao ar livre",
    evento: "Casamento · Cascavel, Ceará",
    frase: "O arco montado antes do pôr do sol, o cortejo ensaiado na véspera e a noiva entrando no horário combinado. Ninguém percebeu a contagem regressiva nos bastidores."
  },
  {
    foto: "assets/img/galeria-02.jpg",
    alt: "Mesa de convidados posta com louça clara e arranjo baixo de flores.",
    titulo: "A recepção posta",
    evento: "Casamento · região metropolitana de Fortaleza",
    frase: "Mesas conferidas uma a uma, lounge montado e buffet alinhado com o cronograma. Os convidados sentaram e o serviço já estava de pé."
  },
  {
    foto: "assets/img/galeria-03.jpg",
    alt: "Detalhe da papelaria do casamento: menu, lugar marcado e guardanapo.",
    titulo: "Papelaria e lugar marcado",
    evento: "Casamento · detalhes da mesa",
    frase: "Menu, nome de cada convidado e guardanapo posicionados na noite anterior, para que a manhã do evento fosse só de ajuste fino."
  },
  {
    foto: "assets/img/galeria-05.jpg",
    alt: "Primeira dança dos noivos na pista iluminada por luz quente.",
    titulo: "A pista depois do brinde",
    evento: "Casamento · primeira dança",
    frase: "Luz quente, música na deixa certa e os noivos entrando na pista sem precisar olhar para o relógio nenhuma vez."
  },
  {
    foto: "assets/img/galeria-04.jpg",
    alt: "Mesa do bolo de aniversário infantil com balões e doces.",
    titulo: "Festa de aniversário",
    evento: "Aniversário infantil · 5 anos",
    frase: "Painel, mesa do bolo e o parabéns no horário que a família pediu — antes do cansaço chegar e com todo mundo ainda por perto."
  },
  {
    foto: "assets/img/galeria-11.jpg",
    alt: "Crianças brincando em roda com a recreação no jardim da festa.",
    titulo: "Recreação e despedida",
    evento: "Aniversário infantil · encerramento",
    frase: "Brincadeira conduzida no jardim enquanto os adultos comiam em paz, e lembrancinhas entregues na saída, uma para cada criança."
  }
];
