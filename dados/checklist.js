/* =========================================================
   CHECKLIST DO EVENTO — edite este arquivo para mudar as tarefas.
   Não é preciso mexer em nenhum HTML.

   Cada lista (casamento, infantil) tem grupos por prazo.
   Cada item:
     t → a tarefa
     d → uma dica curta (opcional)

   O que o visitante marca fica salvo no navegador dele. Se você
   reordenar ou apagar itens, as marcações antigas podem cair em
   outra tarefa — nesse caso, peça para clicar em "Recomeçar".
   ========================================================= */
window.CHECKLIST = {
  casamento: {
    nome: "Casamento",
    grupos: [
      {
        quando: "12 meses antes", titulo: "As grandes decisões",
        itens: [
          { t: "Definir o orçamento total e quem contribui com o quê" },
          { t: "Escolher o estilo do casamento", d: "Clássico, rústico, pé na areia… ele guia todas as outras escolhas." },
          { t: "Fazer a primeira lista de convidados", d: "O número de convidados define o espaço, não o contrário." },
          { t: "Escolher a data e reservar o espaço" },
          { t: "Contratar a assessoria e o cerimonial" },
          { t: "Reservar a igreja ou o celebrante" }
        ]
      },
      {
        quando: "8 a 10 meses antes", titulo: "Fornecedores principais",
        itens: [
          { t: "Contratar buffet e fazer a degustação" },
          { t: "Contratar fotografia e vídeo" },
          { t: "Contratar decoração e flores" },
          { t: "Contratar banda ou DJ, som e iluminação" },
          { t: "Escolher o vestido e marcar as provas" },
          { t: "Enviar o save the date", d: "Principalmente para quem vem de outra cidade." }
        ]
      },
      {
        quando: "6 meses antes", titulo: "Detalhes que dão cara à festa",
        itens: [
          { t: "Escolher padrinhos, madrinhas, pajens e daminhas" },
          { t: "Definir traje dos noivos e alinhar o dos padrinhos" },
          { t: "Contratar bolo, doces e bem-casados" },
          { t: "Escolher a papelaria: convite, menu e lugar marcado" },
          { t: "Contratar cabelo e maquiagem, com teste marcado" },
          { t: "Reservar a lua de mel" }
        ]
      },
      {
        quando: "3 meses antes", titulo: "Papéis e convites",
        itens: [
          { t: "Dar entrada na habilitação do casamento civil no cartório" },
          { t: "Enviar os convites" },
          { t: "Comprar as alianças" },
          { t: "Definir as músicas da cerimônia e da festa" },
          { t: "Montar a lista de presentes" },
          { t: "Fazer a visita técnica ao espaço com a assessoria" }
        ]
      },
      {
        quando: "1 mês antes", titulo: "Tudo confirmado",
        itens: [
          { t: "Confirmar presença dos convidados", d: "O número final vai para o buffet e para o mapa de mesas." },
          { t: "Fechar o mapa de mesas" },
          { t: "Última prova do vestido e do terno" },
          { t: "Aprovar o roteiro do dia com a assessoria" },
          { t: "Confirmar horários com todos os fornecedores" },
          { t: "Escrever os votos, se houver" }
        ]
      },
      {
        quando: "Semana do casamento", titulo: "Reta final",
        itens: [
          { t: "Ensaio da cerimônia com padrinhos e famílias" },
          { t: "Separar pagamentos finais dos fornecedores" },
          { t: "Entregar à assessoria alianças, votos e itens da cerimônia" },
          { t: "Arrumar a mala da lua de mel" },
          { t: "Dormir cedo na véspera", d: "Sério. A partir daqui, quem cuida do relógio é a assessoria." }
        ]
      }
    ]
  },

  infantil: {
    nome: "Aniversário infantil",
    grupos: [
      {
        quando: "3 a 6 meses antes", titulo: "O começo de tudo",
        itens: [
          { t: "Definir o orçamento da festa" },
          { t: "Escolher o tema com a criança", d: "A partir dos quatro anos, a opinião dela faz toda a diferença." },
          { t: "Fazer a primeira lista de convidados, crianças e adultos" },
          { t: "Escolher a data e o horário pensando na rotina da criança" },
          { t: "Reservar o espaço ou confirmar as regras do salão do condomínio" },
          { t: "Contratar a assessoria da festa" }
        ]
      },
      {
        quando: "2 meses antes", titulo: "Fornecedores",
        itens: [
          { t: "Contratar buffet ou definir o cardápio", d: "Opções para crianças com alergia ou restrição alimentar." },
          { t: "Contratar decoração e mesa do bolo" },
          { t: "Contratar recreação e brinquedos", d: "Um monitor para cada oito a dez crianças é uma boa referência." },
          { t: "Contratar foto e vídeo" },
          { t: "Encomendar bolo e doces" }
        ]
      },
      {
        quando: "1 mês antes", titulo: "Convites e lembranças",
        itens: [
          { t: "Enviar os convites" },
          { t: "Escolher e encomendar as lembrancinhas" },
          { t: "Definir a roupa da criança, com uma troca extra" },
          { t: "Montar a playlist da festa" },
          { t: "Fazer a visita técnica ao espaço" }
        ]
      },
      {
        quando: "1 semana antes", titulo: "Confirmações",
        itens: [
          { t: "Confirmar presença dos convidados" },
          { t: "Passar o número final para buffet e recreação" },
          { t: "Aprovar o cronograma com a assessoria", d: "Com o horário do parabéns bem definido." },
          { t: "Confirmar horários de chegada de cada fornecedor" },
          { t: "Separar velas, vela de número e faca do bolo" }
        ]
      },
      {
        quando: "No dia", titulo: "Aproveitar",
        itens: [
          { t: "Garantir que a criança durma e coma bem antes da festa" },
          { t: "Chegar cedo para as fotos em família" },
          { t: "Deixar a bolsa da criança com o que ela pode precisar" },
          { t: "Entregar à assessoria a lista de convidados e as lembrancinhas" },
          { t: "Curtir a festa", d: "O resto fica comigo." }
        ]
      }
    ]
  }
};
