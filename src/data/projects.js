// Dados editoriais: revise status e URLs antes da publicação. Somente sites explicitamente confirmados estão aqui.
export const projects = [
  {
    id:'nexo',slug:'nexo',name:'NEXO',monogram:'NX',categories:['Aplicativos','Pessoal','Experimentos'],
    short:'Um multiverso pessoal para visualizar decisões, possibilidades e linhas do tempo.',
    description:'Uma linha do tempo interativa e local-first para registrar a trajetória real e explorar ramificações hipotéticas. O objetivo é tornar relações de causa e efeito mais fáceis de visualizar.',
    problem:'É difícil comparar experiências reais com caminhos que poderiam ter acontecido.',
    features:['Linha do tempo principal e realidades alternativas','Ramificações originadas de eventos','Exploração visual de escolhas e possibilidades'],
    technologies:['HTML','JavaScript'],status:'Experimental',featured:true,updated:'2026-10-23',version:'',
    liveUrl:'https://danielrosajr.github.io/nexo-personal-multiverse/',
    repoUrl:'https://github.com/danielrosajr/nexo-personal-multiverse',
    challenges:['Representar linhas do tempo que se ramificam sem perder legibilidade'],
    learnings:['Prototipagem de interfaces interativas e experiência local-first']
  },
  {
    id:'hidrocondo',slug:'hidrocondo',name:'HidroCondo',monogram:'HC',categories:['Aplicativos','Utilidades'],
    short:'Acompanhamento de leituras de água para a rotina de condomínios.',
    description:'Aplicativo voltado ao registro e acompanhamento de leituras de hidrômetros, com organização do histórico e recursos para facilitar o compartilhamento das informações.',
    problem:'Leituras periódicas de água podem ficar espalhadas em anotações e mensagens.',
    features:['Registro de leituras','Histórico de medições','Fluxos pensados para a rotina de condomínios'],
    technologies:['JavaScript','Supabase'],status:'Em desenvolvimento',featured:true,updated:'2026-10-20',version:'',
    liveUrl:'',repoUrl:'https://github.com/danielrosajr/HidroCondo',
    challenges:['Modelagem de permissões e organização de leituras'],learnings:['Interfaces guiadas por tarefas reais']
  },
  {
    id:'civica',slug:'civica',name:'Cívica',monogram:'CV',categories:['Aplicativos','Educação','Código aberto'],
    short:'Educação política e cidadania acessível, gratuita e independente.',
    description:'Uma plataforma de educação cívica criada para tornar temas de cidadania mais compreensíveis, especialmente para quem está começando ou utiliza o celular como dispositivo principal.',
    problem:'Assuntos importantes de cidadania costumam ser apresentados com linguagem complicada.',
    features:['Conteúdo introdutório acessível','Experiência focada em celulares','Abordagem apartidária e gratuita'],
    technologies:['JavaScript'],status:'Experimental',featured:true,updated:'2026-10-21',version:'',
    liveUrl:'',repoUrl:'https://github.com/danielrosajr/civica',
    challenges:['Tornar conteúdo complexo compreensível sem distorcer informações'],
    learnings:['Acessibilidade e comunicação educativa']
  }
]
