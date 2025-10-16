// Interface para representar um artigo/submódulo
interface IArtigo {
    id: string;
    titulo: string;
    nivel: string;
    progresso: string;
    autor: {
        nome: string;
        username: string;
        avatarUrl: string;
    };
    xp: number;
}

// Interface para representar um módulo principal
export interface IModulo {
    id: number;
    titulo: string;
    artigos: IArtigo[];
}

// Data Mock - Exemplo de estrutura hierárquica
export const modulos: IModulo[] = [
    {
        id: 1,
        titulo: 'Funções',
        artigos: [
            {
                id: 'funcoes-afins',
                titulo: 'Funções Afins',
                nivel: 'Intermediário',
                progresso: '70% concluído',
                autor: {
                    nome: 'George Lucas',
                    username: '@georgelucas',
                    avatarUrl: 'https://i.pravatar.cc/150?img=1'
                },
                xp: 50
            },
            {
                id: 'funcoes-quadraticas',
                titulo: 'Funções Quadráticas',
                nivel: 'Avançado',
                progresso: '45% concluído',
                autor: {
                    nome: 'Matheus Oliveira',
                    username: '@matheusoliveira',
                    avatarUrl: 'https://i.pravatar.cc/150?img=2'
                },
                xp: 75
            },
            {
                id: 'funcoes-exponenciais',
                titulo: 'Funções Exponenciais',
                nivel: 'Intermediário',
                progresso: '30% concluído',
                autor: {
                    nome: 'Ana Carla',
                    username: '@anacarla',
                    avatarUrl: 'https://i.pravatar.cc/150?img=3'
                },
                xp: 50
            },
        ],
    },
    {
        id: 2,
        titulo: 'Estatística',
        artigos: [
            {
                id: 'estatistica-descritiva',
                titulo: 'Estatística Descritiva',
                nivel: 'Básico',
                progresso: '90% concluído',
                autor: {
                    nome: 'Roberto Carlos',
                    username: '@robertocarlos',
                    avatarUrl: 'https://i.pravatar.cc/150?img=4'
                },
                xp: 25
            },
            {
                id: 'probabilidade',
                titulo: 'Probabilidade',
                nivel: 'Intermediário',
                progresso: '60% concluído',
                autor: {
                    nome: 'Larissa Santos',
                    username: '@larissasantos',
                    avatarUrl: 'https://i.pravatar.cc/150?img=5'
                },
                xp: 50
            },
        ],
    },
    {
        id: 3,
        titulo: 'Geometria',
        artigos: [
            {
                id: 'geometria-plana',
                titulo: 'Geometria Plana',
                nivel: 'Básico',
                progresso: '25% concluído',
                autor: {
                    nome: 'Pedro Almeida',
                    username: '@pedroalmeida',
                    avatarUrl: 'https://i.pravatar.cc/150?img=6'
                },
                xp: 25
            },
            {
                id: 'geometria-espacial',
                titulo: 'Geometria Espacial',
                nivel: 'Avançado',
                progresso: '10% concluído',
                autor: {
                    nome: 'Juliana Martins',
                    username: '@julianamartins',
                    avatarUrl: 'https://i.pravatar.cc/150?img=7'
                },
                xp: 75
            },
        ],
    },
];