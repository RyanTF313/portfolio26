export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 'sports-api-explorer',
    title: 'Sports API Explorer',
    description:
      'A developer-focused web application for exploring public sports data APIs with a documentation-first, usability-driven experience.',
    image:
      'https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://github.com/RyanTF313/sports-api-explorer',
  },
  {
    id: 'next-move',
    title: 'Next Move',
    description:
      'NextMove is a lightweight job application tracker with a built-in resume analyzer designed to help candidates apply more intentionally.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://github.com/RyanTF313/nextmove',
  },
  {
    id: 'git-the-point',
    title: 'Git The Point',
    description:
      'Git The Point is a Next.js app that ingests a public GitHub repository, converts its code into vector embeddings, and stores them in ChromaDB for retrieval. It then uses OpenAI models to generate architecture summaries and answer natural-language questions about the codebase with source-aware context.',
    image:
      'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://github.com/RyanTF313/gitthepoint',
  },
  {
    id: 'multilingual-ai-document-assistant',
    title: 'Multilingual AI Document Assistantr',
    description:
      "Privacy-first document assistant with zero-retention architecture. Documents are processed but never stored on servers. All persistent data lives in the user's browser (EntityDB). Backend is stateless.",
    image:
      'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://github.com/Resilient-Labs/multilingual-ai-document-assistant',
  },
  {
    id: 'portfolio-builder',
    title: 'PIP Buster',
    description:
      'A app designed to destroy PIPs and push your engineering career forward. (Coming Soon)',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    url: 'https://github.com/RyanTF313/pipbuster',
  },
  // {
  //   id: 'chat-interface',
  //   title: 'Real-Time Chat',
  //   description:
  //     'A modern messaging interface with typing indicators, read receipts, and emoji reactions.',
  //   image:
  //     'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
  //   url: '#',
  // },
];
