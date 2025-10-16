import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import { ArrowLeft, Globe, Twitter, Linkedin, Github } from 'lucide-react';

// Dados do autor (exemplo)
const authorData = {
    name: "Larissa Santos",
    degree: "Doutora em Probabilidade e Estatística, Mestre em Matemática Aplicada",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    postDate: "29 de Setembro de 2025",
    socialLinks: {
        website: "https://larissasantos.com",
        twitter: "@larissasantos_stats",
        linkedin: "linkedin.com/in/larissasantos",
        github: "github.com/larissasantos"
    }
};

const Activity02 = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <div className="min-h-screen bg-accent-foreground p-4 md:p-6">
            {/* Botão de voltar */}
            <button
                onClick={handleGoBack}
                className="mb-4 flex items-center text-white hover:text-gray-300 transition-colors"
            >
                <ArrowLeft className="mr-2 w-5 h-5" />
                <span>Voltar</span>
            </button>

            <div className="max-w-4xl mx-auto">
                {/* Banner do Blog Post */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-200/10 rounded-2xl p-6 mb-8"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Imagem do autor */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex-shrink-0"
                        >
                            <img
                                src={authorData.avatarUrl}
                                alt={authorData.name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200/20"
                            />
                        </motion.div>

                        {/* Informações do autor */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center md:text-left flex-1"
                        >
                            <h1 className="text-2xl font-bold text-white mb-2">{authorData.name}</h1>
                            <p className="text-gray-100 mb-3">{authorData.degree}</p>

                            {/* Links sociais */}
                            <div className="flex justify-center md:justify-start space-x-4 mb-3">
                                <a href={authorData.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <Globe className="w-5 h-5" />
                                </a>
                                <a href={`https://twitter.com/${authorData.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href={`https://linkedin.com/in/${authorData.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href={`https://github.com/${authorData.socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-center justify-center md:justify-start"
                            >
                                <span className="bg-gray-200/20 text-gray-300 px-3 py-1 rounded-full text-sm">
                                    Postado em: {authorData.postDate}
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Conteúdo do Artigo */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 mb-8 text-gray-100"
                >
                    <header className="mb-8">
                        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl">
                            Probabilidade: Fundamentos e Aplicações
                        </h1>
                    </header>

                    <p className="lead mb-4 text-lg">
                        A probabilidade é um ramo da matemática que estuda a chance ou a possibilidade de ocorrência de eventos.
                        É uma ferramenta essencial em estatística, ciência de dados, finanças e muitas outras áreas.
                        Neste artigo, exploraremos os conceitos fundamentais de probabilidade e suas aplicações práticas.
                    </p>

                    <p className="mb-4 text-lg">
                        A probabilidade de um evento é um número entre 0 e 1 que expressa a chance de esse evento ocorrer:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="0 \leq P(A) \leq 1" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>P(A) = 0 significa que o evento A é impossível</li>
                            <li>P(A) = 1 significa que o evento A é certo</li>
                            <li>Valores intermediários indicam diferentes graus de possibilidade</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conceitos Fundamentais</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Experimento Aleatório</h3>

                    <p className="mb-4 text-lg">
                        É um processo cujo resultado não pode ser previsto com certeza. Exemplos:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Lançar um dado</li>
                        <li>Retirar uma carta de um baralho</li>
                        <li>Medir a temperatura em um determinado dia</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Espaço Amostral</h3>

                    <p className="mb-4 text-lg">
                        É o conjunto de todos os resultados possíveis de um experimento aleatório. Representado por Ω.
                    </p>

                    <p className="mb-4 text-lg">
                        Exemplo: No lançamento de um dado, Ω = <InlineMath math="\{1, 2, 3, 4, 5, 6\}" />
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Evento</h3>

                    <p className="mb-4 text-lg">
                        É qualquer subconjunto do espaço amostral. Representado por letras maiúsculas.
                    </p>

                    <p className="mb-4 text-lg">
                        Exemplo: No lançamento de um dado, o evento "número par" é A = <InlineMath math="\{2, 4, 6\}" />
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Definições de Probabilidade</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Definição Clássica</h3>

                    <p className="mb-4 text-lg">
                        Quando todos os resultados são igualmente prováveis:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="P(A) = \frac{n(A)}{n(\Omega)}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>n(A) é o número de elementos favoráveis ao evento A</li>
                            <li>n(Ω) é o número total de elementos do espaço amostral</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Definição Frequentista</h3>

                    <p className="mb-4 text-lg">
                        Baseada na frequência relativa de ocorrência do evento em um grande número de repetições:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="P(A) = \lim_{n \to \infty} \frac{f(A)}{n}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>f(A) é a frequência do evento A</li>
                            <li>n é o número de repetições do experimento</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Definição Axiomática</h3>

                    <p className="mb-4 text-lg">
                        Baseada em axiomas fundamentais:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Axioma 1</strong>: P(A) <InlineMath math="\geq 0" /> para qualquer evento A</li>
                        <li><strong className="text-white">Axioma 2</strong>: P(Ω) = 1</li>
                        <li><strong className="text-white">Axioma 3</strong>: Se A e B são mutuamente exclusivos, então P(A <InlineMath math="\cup" /> B) = P(A) + P(B)</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Probabilidade Condicional</h2>

                    <p className="mb-4 text-lg">
                        A probabilidade condicional de A dado B é a probabilidade de A ocorrer, sabendo que B ocorreu:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="P(A|B) = \frac{P(A \cap B)}{P(B)}" />
                        <p>Onde P(B) <InlineMath math=" > 0" /></p>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Teorema de Bayes</h2>

                    <p className="mb-4 text-lg">
                        Relaciona a probabilidade condicional de um evento com a probabilidade condicional inversa:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}" />
                        <p>Onde P(B) <InlineMath math=" > 0" /></p>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Eventos Independentes</h2>

                    <p className="mb-4 text-lg">
                        Dois eventos A e B são independentes se:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="P(A \cap B) = P(A) \times P(B)" />
                        <p>Ou equivalentemente:</p>
                        <BlockMath math="P(A|B) = P(A) \quad \text{e} \quad P(B|A) = P(B)" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Variáveis Aleatórias</h2>

                    <p className="mb-4 text-lg">
                        Uma variável aleatória é uma função que associa a cada resultado de um experimento
                        aleatório um número real.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Variáveis Aleatórias Discretas</h3>

                    <p className="mb-4 text-lg">
                        Assumem valores em um conjunto enumerável. Exemplos:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Número de caras em 10 lançamentos de moeda</li>
                        <li>Número de clientes em uma fila</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Variáveis Aleatórias Contínuas</h3>

                    <p className="mb-4 text-lg">
                        Assumem valores em um intervalo contínuo. Exemplos:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Altura de pessoas</li>
                        <li>Tempo de espera em uma fila</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Distribuições de Probabilidade</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Distribuição Binomial</h3>

                    <p className="mb-4 text-lg">
                        Modela o número de sucessos em n ensaios independentes com probabilidade constante p:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="P(X = k) = C(n,k) \times p^k \times (1-p)^{n-k}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>C(n,k) é o coeficiente binomial</li>
                            <li><InlineMath math="0 \leq k \leq n" /></li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Distribuição Normal</h3>

                    <p className="mb-4 text-lg">
                        Também conhecida como distribuição gaussiana, é uma distribuição contínua simétrica:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="f(x) = \frac{1}{\sigma\sqrt{2\pi}} \times e^{-\frac{(x-\mu)^2}{2\sigma^2}}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>μ é a média</li>
                            <li>σ é o desvio padrão</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Aplicações Práticas</h2>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Seguros</h3>

                    <p className="mb-4 text-lg">
                        As seguradoras usam probabilidade para calcular prêmios com base na chance de sinistros.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Medicina</h3>

                    <p className="mb-4 text-lg">
                        Probabilidade é usada para interpretar resultados de testes diagnósticos e eficácia de tratamentos.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Finanças</h3>

                    <p className="mb-4 text-lg">
                        Análise de risco e precificação de opções financeiras utilizam modelos probabilísticos.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conclusão</h2>

                    <p className="mb-4 text-lg">
                        A probabilidade é uma ferramenta matemática poderosa para lidar com a incerteza.
                        Compreender seus conceitos fundamentais é essencial para tomar decisões informadas
                        em um mundo cheio de variáveis imprevisíveis.
                    </p>

                    <p className="text-lg">
                        No próximo artigo, exploraremos técnicas avançadas de inferência estatística.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exemplos Interativos</h2>

                    <p className="mb-4 text-lg">
                        Vamos explorar alguns exemplos interativos para entender melhor os conceitos de probabilidade:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo 1: Lançamento de Dados</h3>
                        <p>No lançamento de dois dados, qual a probabilidade de obter soma 7?</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                            <li>Espaço amostral: 36 resultados possíveis (6 × 6)</li>
                            <li>Resultados favoráveis: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 resultados</li>
                            <li>Probabilidade: P(soma 7) = 6/36 = 1/6 ≈ 0.1667 ou 16.67%</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo 2: Probabilidade Condicional</h3>
                        <p>Em uma turma de 30 alunos, 18 são mulheres e 12 são homens. Entre as mulheres, 12 estudam inglês. Entre os homens, 8 estudam inglês. Se escolhemos um aluno aleatoriamente e ele estuda inglês, qual a probabilidade de ser mulher?</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                            <li>Total que estuda inglês: 12 + 8 = 20 alunos</li>
                            <li>Mulheres que estudam inglês: 12</li>
                            <li>P(mulher | estuda inglês) = 12/20 = 0.6 ou 60%</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exercícios Práticos</h2>

                    <p className="mb-4 text-lg">
                        Tente resolver os seguintes exercícios para fixar o aprendizado:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exercício 1</h3>
                        <p>Uma urna contém 5 bolas vermelhas, 3 azuis e 2 verdes. Retirando uma bola ao acaso, qual a probabilidade de ser vermelha ou azul?</p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p>Solução:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Total de bolas: 5 + 3 + 2 = 10</li>
                                    <li>Bolas vermelhas ou azuis: 5 + 3 = 8</li>
                                    <li>Probabilidade: P(vermelha ou azul) = 8/10 = 0.8 ou 80%</li>
                                </ul>
                            </div>
                        </details>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exercício 2</h3>
                        <p>Dois eventos A e B têm probabilidades P(A) = 0.6, P(B) = 0.4 e P(A ∩ B) = 0.2. Calcule P(A ∪ B) e determine se A e B são independentes.</p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p>Solução:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.6 + 0.4 - 0.2 = 0.8</li>
                                    <li>Para independência: P(A ∩ B) = P(A) × P(B)</li>
                                    <li>P(A) × P(B) = 0.6 × 0.4 = 0.24</li>
                                    <li>Como 0.2 ≠ 0.24, os eventos A e B não são independentes</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Aplicações em Ciência de Dados</h2>

                    <p className="mb-4 text-lg">
                        A probabilidade é fundamental em ciência de dados para diversos propósitos:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Classificação</h3>
                        <p>Algoritmos de classificação como Naive Bayes utilizam probabilidade:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Calculam P(classe | características) para cada classe possível</li>
                            <li>Atribuem o objeto à classe com maior probabilidade</li>
                            <li>Assumem independência entre características (daí "Naive")</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Aprendizado de Máquina</h3>
                        <p>Muitos algoritmos de machine learning são baseados em modelos probabilísticos:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Redes Bayesianas para representar dependências entre variáveis</li>
                            <li>Modelos de Mistura para agrupamento (clustering)</li>
                            <li>Processos Gaussianos para regressão</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Avaliação de Modelos</h3>
                        <p>Métricas de avaliação utilizam conceitos probabilísticos:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Curva ROC e AUC (Area Under Curve)</li>
                            <li>Entropia e informação mútua</li>
                            <li>Intervalos de confiança para métricas</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Processos Estocásticos</h2>

                    <p className="mb-4 text-lg">
                        Sequências de eventos aleatórios que evoluem ao longo do tempo:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Cadeias de Markov</h3>
                        <p>Processos onde o futuro depende apenas do estado atual:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Matriz de transição define probabilidades entre estados</li>
                            <li>Aplicações: previsão do tempo, análise de texto, PageRank do Google</li>
                            <li>Propriedade markoviana: P(Xₙ₊₁ | X₀, X₁, ..., Xₙ) = P(Xₙ₊₁ | Xₙ)</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Processo de Poisson</h3>
                        <p>Modela eventos raros que ocorrem aleatoriamente no tempo:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Número de chamadas em uma central telefônica</li>
                            <li>Chegada de clientes em uma fila</li>
                            <li>Falhas em equipamentos</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Movimento Browniano</h3>
                        <p>Modela o movimento aleatório de partículas suspensas em fluido:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Base para modelagem de preços de ações em finanças</li>
                            <li>Processo gaussiano com incrementos independentes</li>
                            <li>Aplicações em física, biologia e economia</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Teorema do Limite Central</h2>

                    <p className="mb-4 text-lg">
                        Um dos teoremas mais importantes da probabilidade e estatística:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Enunciado</h3>
                        <p>A soma de um grande número de variáveis aleatórias independentes e identicamente distribuídas tende a seguir uma distribuição normal, independentemente da distribuição original das variáveis.</p>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Implicações</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Justifica o uso da distribuição normal em muitas situações</li>
                            <li>Base para muitos testes estatísticos</li>
                            <li>Explica por que a distribuição normal aparece frequentemente na natureza</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo Prático</h3>
                        <p>Lançando um dado 100 vezes e somando os resultados:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Cada lançamento segue uma distribuição uniforme discreta</li>
                            <li>A soma dos 100 lançamentos segue aproximadamente uma distribuição normal</li>
                            <li>Média da soma: 100 × 3.5 = 350</li>
                            <li>Variância da soma: 100 × (35/12) ≈ 291.67</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conclusão Final</h2>

                    <p className="mb-4 text-lg">
                        A probabilidade é uma ferramenta matemática poderosa para lidar com a incerteza.
                        Compreender seus conceitos fundamentais é essencial para tomar decisões informadas
                        em um mundo cheio de variáveis imprevisíveis. As aplicações da probabilidade são vastas
                        e abrangem desde ciência de dados até física e finanças.
                    </p>

                    <p className="text-lg">
                        No próximo artigo, exploraremos técnicas avançadas de inferência estatística.
                    </p>
                </motion.article>
            </div>
        </div>
    );
};

export default Activity02;