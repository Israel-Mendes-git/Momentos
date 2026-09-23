/* =========================================================
   GALERIA — edite este arquivo para acrescentar fotos.
   Não é preciso mexer em nenhum HTML.

   Cada item:
     arquivo  → caminho da imagem dentro de assets/img/
     alt      → descrição da foto para leitores de tela (obrigatório)
     tipo     → "casamento" | "infantil"  (usado no filtro da galeria)
     destaque → true aparece também na home (use 6 fotos)
     proporcao→ "1:1", "4:5", "3:2", "16:9"
   ========================================================= */
window.GALERIA = [
  { arquivo: "assets/img/galeria-01.jpg", alt: "Cerimônia de casamento ao ar livre com arco floral em tons nude.", tipo: "casamento", destaque: true,  proporcao: "1:1" },
  { arquivo: "assets/img/galeria-02.jpg", alt: "Mesa de convidados posta com louça clara e arranjo baixo de flores.", tipo: "casamento", destaque: true,  proporcao: "1:1" },
  { arquivo: "assets/img/galeria-03.jpg", alt: "Detalhe da papelaria do casamento: menu, lugar marcado e guardanapo.", tipo: "casamento", destaque: true,  proporcao: "1:1" },
  { arquivo: "assets/img/galeria-04.jpg", alt: "Mesa do bolo de aniversário infantil com balões e doces.", tipo: "infantil",  destaque: true,  proporcao: "1:1" },
  { arquivo: "assets/img/galeria-05.jpg", alt: "Primeira dança dos noivos na pista iluminada por luz quente.", tipo: "casamento", destaque: true,  proporcao: "1:1" },
  { arquivo: "assets/img/galeria-06.jpg", alt: "Criança soprando as velas do bolo cercada pelos convidados.", tipo: "infantil",  destaque: true,  proporcao: "1:1" },

  // A partir daqui, fotos que aparecem apenas na página Galeria.
  { arquivo: "assets/img/galeria-07.jpg", alt: "Entrada da noiva no corredor decorado com pétalas.", tipo: "casamento", destaque: false, proporcao: "4:5" },
  { arquivo: "assets/img/galeria-08.jpg", alt: "Área de recepção montada com lounge e iluminação suave.", tipo: "casamento", destaque: false, proporcao: "4:5" },
  { arquivo: "assets/img/galeria-09.jpg", alt: "Painel temático da festa infantil com o nome da criança.", tipo: "infantil",  destaque: false, proporcao: "4:5" }
];
