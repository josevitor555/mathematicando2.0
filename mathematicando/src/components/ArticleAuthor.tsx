interface ArticleAuthorProps {
  autor: {
    nome: string;
    username: string;
    avatarUrl: string;
  };
}

export function ArticleAuthor({ autor }: ArticleAuthorProps) {
  // Mapeamento de usernames para cada autor
  const authorUsernames: Record<string, string> = {
    'George Lucas': '@georgelucas',
    'Matheus Oliveira': '@matheusoliveira',
    'Ana Carla': '@anacarla',
    'Roberto Carlos': '@robertocarlos',
    'Larissa Santos': '@larissasantos',
    'Pedro Almeida': '@pedroalmeida',
    'Juliana Martins': '@julianamartins'
  };

  const username = authorUsernames[autor.nome] || '@professor';

  return (
    <div className="flex items-center">
      <div className="w-8 h-8 mr-3 rounded-full overflow-hidden">
        <img
          src={autor.avatarUrl}
          alt={autor.nome}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-white">Prof. {autor.nome}</span>
        <span className="text-sm text-gray-200">{username}</span>
      </div>
    </div>
  );
}