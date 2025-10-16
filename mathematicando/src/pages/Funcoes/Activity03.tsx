import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';

// Dados do autor (exemplo)
const authorData = {
    name: "Ana Carla",
    degree: "Especialista em Ensino de Matemática, Licenciada em Matemática pela UFPI",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    postDate: "27 de Setembro de 2025",
    socialLinks: {
        website: "https://anacarla.com",
        twitter: "@anacarla_math",
        linkedin: "linkedin.com/in/anacarla",
        github: "github.com/anacarla"
    }
};

const Activity03 = () => {
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
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
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
                                    <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                                </a>
                                <a href={`https://twitter.com/${authorData.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faHashtag} className="w-5 h-5" />
                                </a>
                                <a href={`https://linkedin.com/in/${authorData.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                                </a>
                                <a href={`https://github.com/${authorData.socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
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
                            Funções Exponenciais: Conceitos e Aplicações
                        </h1>
                    </header>

                    <p className="lead mb-4 text-lg">
                        As funções exponenciais são fundamentais na matemática e possuem aplicações em diversas áreas,
                        como biologia, economia, física e química. Neste artigo, exploraremos suas propriedades,
                        gráficos e aplicações práticas.
                    </p>

                    <p className="mb-4 text-lg">
                        Uma função exponencial é uma função da forma:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="f(x) = a^x" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>a é um número real positivo e diferente de 1 (a <InlineMath math=" > 0" /> e a \neq 1)</li>
                            <li>x é o expoente (variável independente)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Tipos de Funções Exponenciais</h2>

                    <p className="mb-4 text-lg">
                        As funções exponenciais podem ser classificadas em dois tipos, dependendo da base:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Função Exponencial Crescente</h3>

                    <p className="mb-4 text-lg">
                        Ocorre quando a <InlineMath math=" > 1" />. Nesse caso, à medida que x aumenta, f(x) também aumenta.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Função Exponencial Decrescente</h3>

                    <p className="mb-4 text-lg">
                        Ocorre quando <InlineMath math="0 < a < 1" />. Nesse caso, à medida que x aumenta, f(x) diminui.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Propriedades das Funções Exponenciais</h2>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Domínio</strong>: ℝ (todos os números reais)</li>
                        <li><strong className="text-white">Contradomínio</strong>: ℝ*₊ (números reais positivos)</li>
                        <li><strong className="text-white">Injetora</strong>: Cada valor de x corresponde a um único valor de f(x)</li>
                        <li><strong className="text-white">Sobrejetora</strong>: Todo número real positivo é imagem de algum número real</li>
                        <li><strong className="text-white">Bijetora</strong>: Por ser injetora e sobrejetora</li>
                        <li><strong className="text-white">Gráfico</strong>: Uma curva chamada exponencial</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Gráfico das Funções Exponenciais</h2>

                    <p className="mb-4 text-lg">
                        O gráfico de uma função exponencial apresenta características específicas:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Nunca toca o eixo x (assíntota horizontal em y = 0)</li>
                        <li>Intercepta o eixo y no ponto (0, 1)</li>
                        <li>É sempre positivo (f(x) <InlineMath math=" > 0" /> para todo x)</li>
                        <li>Não possui máximos ou mínimos</li>
                        <li>Não possui simetria</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Equações Exponenciais</h2>

                    <p className="mb-4 text-lg">
                        Equações exponenciais são aquelas em que a incógnita aparece no expoente. Para resolvê-las,
                        utilizamos a propriedade:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <p>Se <InlineMath math="a^m = a^n" />, então m = n (com a <InlineMath math=" > 0" /> e a \neq 1)</p>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Exemplo</h3>

                    <p className="mb-4 text-lg">
                        Resolver a equação: 2ˣ⁺¹ = 8
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="2^{x+1} = 8" />
                        <BlockMath math="2^{x+1} = 2^3" />
                        <BlockMath math="x + 1 = 3" />
                        <BlockMath math="x = 2" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Inequações Exponenciais</h2>

                    <p className="mb-4 text-lg">
                        Para resolver inequações exponenciais, consideramos a base:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Se <strong className="text-white">a &gt; 1</strong>: <InlineMath math="a^m > a^n \Leftrightarrow m > n" /></li>
                        <li>Se <strong className="text-white">0 &lt; a &lt; 1</strong>: <InlineMath math="a^m > a^n \Leftrightarrow m < n" /></li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exemplos Interativos</h2>

                    <p className="mb-4 text-lg">
                        Vamos explorar alguns exemplos interativos para entender melhor como as funções exponenciais se comportam:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo 1: Função Exponencial Crescente</h3>
                        <p>Considere f(x) = 2ˣ</p>
                        <BlockMath math="f(x) = 2^x" />
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                            <li>Base a = 2 (&gt; 1), função crescente</li>
                            <li>Domínio: ℝ</li>
                            <li>Contradomínio: ℝ*₊</li>
                            <li>Pontos importantes: f(0) = 1, f(1) = 2, f(2) = 4</li>
                            <li>Assíntota horizontal: y = 0</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo 2: Função Exponencial Decrescente</h3>
                        <p>Considere g(x) = (1/2)ˣ</p>
                        <BlockMath math="g(x) = \left(\frac{1}{2}\right)^x" />
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                            <li>Base a = 1/2 (0 &lt; a &lt; 1), função decrescente</li>
                            <li>Domínio: ℝ</li>
                            <li>Contradomínio: ℝ*₊</li>
                            <li>Pontos importantes: g(0) = 1, g(1) = 1/2, g(2) = 1/4</li>
                            <li>Assíntota horizontal: y = 0</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exercícios Práticos</h2>

                    <p className="mb-4 text-lg">
                        Tente resolver os seguintes exercícios para fixar o aprendizado:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exercício 1</h3>
                        <p>Resolva a equação exponencial: 3ˣ⁺² = 27</p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p>Solução:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Expressar ambos os lados com a mesma base: 27 = 3³</li>
                                    <li>3ˣ⁺² = 3³</li>
                                    <li>Igualar os expoentes: x + 2 = 3</li>
                                    <li>x = 1</li>
                                </ul>
                            </div>
                        </details>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exercício 2</h3>
                        <p>Uma população de bactérias dobra a cada hora. Se inicialmente há 1000 bactérias, quantas haverá após 5 horas?</p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p>Solução:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Modelo: P(t) = P₀ · 2ᵗ</li>
                                    <li>P₀ = 1000 bactérias</li>
                                    <li>t = 5 horas</li>
                                    <li>P(5) = 1000 · 2⁵ = 1000 · 32 = 32000</li>
                                    <li>Após 5 horas, haverá 32.000 bactérias</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Aplicações em Biologia</h2>

                    <p className="mb-4 text-lg">
                        As funções exponenciais são amplamente utilizadas em biologia para modelar diversos fenômenos:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Crescimento Bacteriano</h3>
                        <p>Sob condições ideais, bactérias se reproduzem por fissão binária:</p>
                        <BlockMath math="N(t) = N_0 \cdot 2^{t/T}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>N(t) é o número de bactérias no tempo t</li>
                            <li>N₀ é o número inicial de bactérias</li>
                            <li>T é o tempo de geração (tempo para dobrar)</li>
                            <li>t é o tempo decorrido</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Difusão de Medicamentos</h3>
                        <p>A concentração de um medicamento no sangue diminui exponencialmente:</p>
                        <BlockMath math="C(t) = C_0 \cdot e^{-kt}" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>C(t) é a concentração no tempo t</li>
                            <li>C₀ é a concentração inicial</li>
                            <li>k é a constante de eliminação</li>
                            <li>t é o tempo</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Funções Exponenciais com Base "e"</h2>

                    <p className="mb-4 text-lg">
                        A função exponencial natural com base e tem propriedades especiais:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Propriedades Importantes</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>A derivada de eˣ é eˣ</li>
                            <li>A integral de eˣ é eˣ + C</li>
                            <li>e⁰ = 1</li>
                            <li>e¹ = e ≈ 2,718</li>
                            <li>eˣ &gt; 0 para todo x real</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Relação com Outras Bases</h3>
                        <p>Qualquer função exponencial aˣ pode ser escrita em termos de e:</p>
                        <BlockMath math="a^x = e^{x \ln a}" />
                        <p>Isso é útil para cálculos e análises matemáticas.</p>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo Prático</h3>
                        <p>Converter 2ˣ para base e:</p>
                        <BlockMath math="2^x = e^{x \ln 2} = e^{0{,}693x}" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Transformações de Gráficos Exponenciais</h2>

                    <p className="mb-4 text-lg">
                        A partir da função básica f(x) = aˣ, podemos obter outras funções através de transformações:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Translações</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong className="text-white">Vertical</strong>: f(x) = aˣ + k desloca k unidades para cima (k &gt; 0) ou para baixo (k &lt; 0)</li>
                            <li><strong className="text-white">Horizontal</strong>: f(x) = aˣ⁺ʰ desloca h unidades para a esquerda (h &gt; 0) ou para a direita (h &lt; 0)</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Reflexões</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong className="text-white">Em relação ao eixo x</strong>: f(x) = -aˣ</li>
                            <li><strong className="text-white">Em relação ao eixo y</strong>: f(x) = a⁻ˣ</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Dilatações e Compressões</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong className="text-white">Vertical</strong>: f(x) = c·aˣ</li>
                            <li><strong className="text-white">Horizontal</strong>: f(x) = aᶜˣ</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo Composto</h3>
                        <p>A função f(x) = 2·3ˣ⁻¹ + 1 representa uma função exponencial:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Deslocada 1 unidade para a direita</li>
                            <li>Deslocada 1 unidade para cima</li>
                            <li>Dilatada verticalmente por um fator de 2</li>
                            <li>Com base 3 (função crescente)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conclusão</h2>

                    <p className="mb-4 text-lg">
                        As funções exponenciais são ferramentas matemáticas poderosas para modelar fenômenos
                        que envolvem crescimento ou decrescimento acelerado. Compreender suas propriedades
                        e aplicações é essencial em diversas áreas do conhecimento.
                    </p>

                    <p className="text-lg">
                        No próximo artigo, exploraremos as funções logarítmicas, que são as inversas das funções exponenciais.
                    </p>
                </motion.article>
            </div>
        </div>
    );
};

export default Activity03;