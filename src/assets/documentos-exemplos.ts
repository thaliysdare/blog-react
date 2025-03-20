import { Documento, TipoDocumento } from "../interfaces/documento";

const documentos: Documento[] = [
  {
    imagemSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "Carreira",
    titulo: "Como se Tornar um Desenvolvedor Sênior Mais Rápido",
    subtitulo: "O caminho para se tornar um desenvolvedor sênior pode ser mais rápido do que você imagina. Descubra quais habilidades técnicas e comportamentais fazem a diferença.",
    autor: "Mariana Rocha",
    data: "01 MAR 2025",
    tempoLeitura: "12",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    destaque: true,
    tipo: TipoDocumento.Artigo,
    id: 1
  },
  {
    imagemSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "Tecnologia",
    titulo: "Inteligência Artificial e o Futuro do Desenvolvimento",
    subtitulo: "A IA está revolucionando a forma como desenvolvemos software. Neste artigo, exploramos como ela pode impactar a produtividade e quais desafios ainda precisamos superar.",
    autor: "Alice Silva",
    data: "27 FEV 2025",
    tempoLeitura: "10",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    destaque: false,
    tipo: TipoDocumento.Artigo,
    id: 2
  },
  {
    imagemSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "Produtividade",
    titulo: "5 Hábitos que Todo Dev Deveria Ter para Crescer na Carreira",
    subtitulo: "Trabalhar de forma inteligente pode transformar sua carreira. Conheça 5 hábitos essenciais que podem impulsionar seu crescimento como desenvolvedor.",
    autor: "Carlos Mendes",
    data: "28 FEV 2025",
    tempoLeitura: "8",
    avatar: "https://randomuser.me/api/portraits/men/58.jpg",
    destaque: false,
    tipo: TipoDocumento.Artigo,
    id: 3
  },
  {
    imagemSrc: "https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "Desenvolvimento Pessoal",
    titulo: "Como Lidar com a Ansiedade de Entrevistas Técnicas",
    subtitulo: "Entrevistas técnicas podem ser estressantes, mas com a preparação certa você pode reduzir a ansiedade. Descubra como se preparar mentalmente para entrevistas de emprego.",
    autor: "Ricardo Souza",
    data: "02 MAR 2025",
    tempoLeitura: "6",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    destaque: false,
    tipo: TipoDocumento.Artigo,
    id: 4
  },
  {
    imagemSrc: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "TypeScript",
    titulo: "Guia Completo de TypeScript para Iniciantes",
    subtitulo: "Aprenda os conceitos fundamentais do TypeScript e como ele pode melhorar seu código JavaScript. Inclui exemplos práticos e dicas para produtividade.",
    autor: "Lucas Almeida",
    data: "05 MAR 2025",
    tempoLeitura: "15",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    destaque: false,
    tipo: TipoDocumento.Tutorial,
    id : 5
  },
  {
    imagemSrc: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "React",
    titulo: "Criando um Projeto React do Zero com Vite",
    subtitulo: "React é uma das bibliotecas mais populares do mundo. Neste tutorial, você aprenderá a configurar um projeto do zero usando Vite e boas práticas modernas.",
    autor: "Juliana Costa",
    data: "07 MAR 2025",
    tempoLeitura: "12",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    destaque: true,
    tipo: TipoDocumento.Tutorial,
    id: 6
  },
  {
    imagemSrc: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "API REST",
    titulo: "Construindo uma API REST com Node.js e Express",
    subtitulo: "APIs REST são essenciais para o desenvolvimento web moderno. Aprenda a criar uma API robusta com Node.js, Express e autenticação JWT.",
    autor: "Fernando Ribeiro",
    data: "10 MAR 2025",
    tempoLeitura: "18",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    destaque: false,
    tipo: TipoDocumento.Tutorial,
    id: 7
  },
  {
    imagemSrc: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    etiqueta: "Banco de Dados",
    titulo: "Dominando Banco de Dados SQL e NoSQL",
    subtitulo: "Qual a diferença entre SQL e NoSQL? Como escolher o melhor banco para seu projeto? Este artigo explica os conceitos, vantagens e casos de uso.",
    autor: "Beatriz Nunes",
    data: "12 MAR 2025",
    tempoLeitura: "14",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    destaque: false,
    tipo: TipoDocumento.Tutorial,
    id: 8
  }
];

export default documentos;