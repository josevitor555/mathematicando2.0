import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';
import { ArrowLeft, Globe, Twitter, Linkedin, Github } from 'lucide-react';

// Dados do autor (exemplo)
const authorData = {
    name: "Juliana Martins",
    degree: "Doutora em Topologia, Mestre em Geometria Diferencial pela UFRGS",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    postDate: "1 de Outubro de 2025",
    socialLinks: {
        website: "https://julianamartins.com",
        twitter: "@julianamartins_geom",
        linkedin: "linkedin.com/in/julianamartins",
        github: "github.com/julianamartins"
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 mb-8"
                >
                    <h1 className="text-3xl font-extrabold leading-tight text-white mb-6">
                        Geometria Espacial: Explorando o Mundo Tridimensional
                    </h1>

                    <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                        A Geometria Espacial é o ramo da matemática que estuda as figuras e formas no espaço tridimensional.
                        Diferente da Geometria Plana, que trabalha com figuras bidimensionais, a Geometria Espacial lida com
                        objetos que possem comprimento, largura e altura. Este campo da matemática é fundamental para diversas
                        áreas como arquitetura, engenharia, design e até mesmo na compreensão do universo ao nosso redor.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conceitos Fundamentais</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Na Geometria Espacial, trabalhamos com três dimensões: comprimento (x), largura (y) e altura (z).
                        Os principais elementos estudados são:
                    </p>

                    <ul className="list-disc pl-8 text-lg text-gray-100 mb-6 space-y-2">
                        <li><strong>Ponto:</strong> Elemento adimensional que representa uma posição no espaço</li>
                        <li><strong>Reta:</strong> Conjunto infinito de pontos que se estendem em duas direções</li>
                        <li><strong>Plano:</strong> Superfície plana que se estende infinitamente em todas as direções</li>
                        <li><strong>Sólidos Geométricos:</strong> Figuras tridimensionais limitadas por superfícies planas ou curvas</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Sólidos Geométricos Principais</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                        <div className="bg-gray-200/10 p-4 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Poliedros</h3>
                            <p className="text-gray-100 mb-3">
                                São sólidos limitados por superfícies planas (faces), como o cubo, paralelepípedo e pirâmides.
                                Os poliedros são classificados em regulares e irregulares.
                            </p>
                            <div className="text-gray-200 text-sm">
                                <p>Fórmula de Euler: <InlineMath math="V - A + F = 2" /></p>
                                <p>Onde: V = vértices, A = arestas, F = faces</p>
                            </div>
                        </div>

                        <div className="bg-gray-200/10 p-4 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Corpos Redondos</h3>
                            <p className="text-gray-100 mb-3">
                                São sólidos limitados por superfícies curvas, como cilindros, cones e esferas.
                                Estes sólidos possuem propriedades especiais de simetria e são amplamente utilizados
                                em cálculos de volume e área.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Cálculo de Volume e Área</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Um dos aspectos mais importantes da Geometria Espacial é o cálculo de volume e área superficial dos sólidos.
                        Aqui estão as principais fórmulas:
                    </p>

                    <div className="overflow-x-auto my-6">
                        <table className="min-w-full bg-gray-200/10 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-200/10">
                                    <th className="py-3 px-4 text-left text-white font-bold">Sólido</th>
                                    <th className="py-3 px-4 text-left text-white font-bold">Volume</th>
                                    <th className="py-3 px-4 text-left text-white font-bold">Área Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Cubo (aresta = a)</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="a^3" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="6a^2" /></td>
                                </tr>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Paralelepípedo</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="a \times b \times c" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="2(ab + ac + bc)" /></td>
                                </tr>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Cilindro (raio = r, altura = h)</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="\pi r^2 h" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="2\pi r(h + r)" /></td>
                                </tr>
                                <tr className="border-b border-gray-200/10">
                                    <td className="py-3 px-4 text-gray-100">Esfera (raio = r)</td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="\frac{4}{3}\pi r^3" /></td>
                                    <td className="py-3 px-4 text-gray-100"><InlineMath math="4\pi r^2" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Aplicações Práticas</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        A Geometria Espacial tem inúmeras aplicações no mundo real:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div className="bg-gray-200/10 p-4 rounded-lg border border-gray-200/10">
                            <h3 className="font-bold text-white mb-2">Arquitetura</h3>
                            <p className="text-gray-100 text-sm">
                                Cálculo de volumes em projetos de construção e análise de estruturas tridimensionais.
                            </p>
                        </div>
                        <div className="bg-gray-200/10 p-4 rounded-lg border border-gray-200/10">
                            <h3 className="font-bold text-white mb-2">Engenharia</h3>
                            <p className="text-gray-100 text-sm">
                                Desenvolvimento de peças mecânicas e análise de resistência de materiais.
                            </p>
                        </div>
                        <div className="bg-gray-200/10 p-4 rounded-lg border border-gray-200/10">
                            <h3 className="font-bold text-white mb-2">Design</h3>
                            <p className="text-gray-100 text-sm">
                                Criação de objetos tridimensionais e embalagens otimizadas.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-gray-200/10 border border-gray-200/10 rounded-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Dica de Estudo</h3>
                        <p className="text-gray-100">
                            Para dominar a Geometria Espacial, pratique visualizar mentalmente os sólidos e suas transformações.
                            Utilize modelos físicos ou softwares de visualização 3D para entender melhor as relações espaciais.
                            Comece com formas simples como cubos e cilindros antes de avançar para formas mais complexas.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Exemplos Interativos</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Vamos explorar alguns exemplos interativos para entender melhor os conceitos de geometria espacial:
                    </p>

                    <div className="bg-gray-200/10 p-4 rounded-xl my-4">
                        <h3 className="text-xl font-bold text-white mb-2">Exemplo 1: Aplicação da Fórmula de Euler</h3>
                        <p className="text-gray-100 mb-3">
                            Verificar a fórmula de Euler para um cubo:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Um cubo tem 8 vértices, 12 arestas e 6 faces</li>
                            <li>Aplicando a fórmula: V - A + F = 8 - 12 + 6 = 2 ✓</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Exemplo 2: Cálculo de Volume e Área</h3>
                        <p className="text-gray-100 mb-3">
                            Calcular o volume e área de um cilindro com raio 5 cm e altura 10 cm:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Volume = πr²h = π × 25 × 10 = 250π cm³ ≈ 785.4 cm³</li>
                            <li>Área = 2πr(h + r) = 2π × 5(10 + 5) = 150π cm² ≈ 471.2 cm²</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Exercícios Práticos</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Tente resolver os seguintes exercícios para fixar o aprendizado:
                    </p>

                    <div className="bg-gray-200/10 p-4 rounded-xl my-4">
                        <h3 className="text-xl font-bold text-white mb-2">Exercício 1</h3>
                        <p className="text-gray-100 mb-3">
                            Uma pirâmide quadrangular regular tem aresta da base medindo 6 cm e altura 8 cm. Calcule seu volume.
                        </p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p className="text-gray-100">
                                    Solução:
                                </p>
                                <ul className="list-disc pl-8 text-gray-100 space-y-1">
                                    <li>Área da base = 6² = 36 cm²</li>
                                    <li>Volume = (1/3) × Área da base × altura = (1/3) × 36 × 8 = 96 cm³</li>
                                </ul>
                            </div>
                        </details>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Exercício 2</h3>
                        <p className="text-gray-100 mb-3">
                            Uma esfera tem volume de 36π cm³. Qual é o seu raio e área superficial?
                        </p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p className="text-gray-100">
                                    Solução:
                                </p>
                                <ul className="list-disc pl-8 text-gray-100 space-y-1">
                                    <li>Volume = (4/3)πr³ = 36π</li>
                                    <li>(4/3)r³ = 36</li>
                                    <li>r³ = 27</li>
                                    <li>r = 3 cm</li>
                                    <li>Área = 4πr² = 4π × 9 = 36π cm²</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Aplicações em Computação Gráfica 3D</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        A geometria espacial é fundamental em computação gráfica para diversos propósitos:
                    </p>

                    <div className="bg-gray-200/10 p-4 rounded-xl my-4">
                        <h3 className="text-xl font-bold text-white mb-2">Modelagem 3D</h3>
                        <p className="text-gray-100 mb-3">
                            Objetos tridimensionais são representados por malhas poligonais:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Modelagem de personagens e cenários em jogos 3D</li>
                            <li>Animação e rigging de modelos</li>
                            <li>Design de produtos e prototipagem virtual</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Renderização</h3>
                        <p className="text-gray-100 mb-3">
                            Algoritmos geométricos são usados para:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Determinar visibilidade de superfícies (backface culling)</li>
                            <li>Calcular interseções entre raios e objetos</li>
                            <li>Realizar operações booleanas em sólidos</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Transformações 3D</h3>
                        <p className="text-gray-100 mb-3">
                            Matrizes 4x4 são usadas para transformações geométricas:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Translação, rotação e escala em 3D</li>
                            <li>Transformações de câmera e projeção</li>
                            <li>Transformações hierárquicas em animações</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Geometria Analítica Espacial</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Combina álgebra e geometria para estudar figuras tridimensionais:
                    </p>

                    <div className="bg-gray-200/10 p-4 rounded-xl my-4">
                        <h3 className="text-xl font-bold text-white mb-2">Sistema de Coordenadas Cartesianas 3D</h3>
                        <p className="text-gray-100 mb-3">
                            Representação de pontos no espaço tridimensional:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Ponto P(x, y, z) onde x, y e z são as coordenadas</li>
                            <li>Distância entre dois pontos: d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]</li>
                            <li>Ponto médio: M = [(x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2]</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Equações de Planos e Retas</h3>
                        <p className="text-gray-100 mb-3">
                            Formas de representar planos e retas no espaço:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Equação geral do plano: ax + by + cz + d = 0</li>
                            <li>Equação vetorial da reta: P = P₀ + t·v</li>
                            <li>Equações paramétricas da reta: x = x₀ + at, y = y₀ + bt, z = z₀ + ct</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Superfícies Quádricas</h3>
                        <p className="text-gray-100 mb-3">
                            Superfícies definidas por equações de segundo grau:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Elipsóide: x²/a² + y²/b² + z²/c² = 1</li>
                            <li>Hiperbolóide: x²/a² + y²/b² - z²/c² = 1</li>
                            <li>Paraboloide: z = x²/a² + y²/b²</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Transformações Geométricas 3D</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Operações que modificam a posição, orientação ou tamanho de figuras tridimensionais:
                    </p>

                    <div className="bg-gray-200/10 p-4 rounded-xl my-4">
                        <h3 className="text-xl font-bold text-white mb-2">Transformações Rígidas</h3>
                        <p className="text-gray-100 mb-3">
                            Preservam distâncias e ângulos:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li><strong className="text-white">Translação 3D</strong>: Deslocamento em x, y e z</li>
                            <li><strong className="text-white">Rotação 3D</strong>: Giro em torno dos eixos x, y ou z</li>
                            <li><strong className="text-white">Reflexão 3D</strong>: Espelhamento em relação a um plano</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Transformações Não-Rígidas</h3>
                        <p className="text-gray-100 mb-3">
                            Alteram o tamanho ou forma da figura:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li><strong className="text-white">Escala 3D</strong>: Ampliação ou redução proporcional nos três eixos</li>
                            <li><strong className="text-white">Cisalhamento 3D</strong>: Deformação que preserva volumes</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-2 mt-4">Composição de Transformações</h3>
                        <p className="text-gray-100 mb-3">
                            Aplicação sequencial de transformações:
                        </p>
                        <ul className="list-disc pl-8 text-gray-100 space-y-1">
                            <li>Ordem das transformações afeta o resultado final</li>
                            <li>Representação matricial 4x4 para facilitar cálculos</li>
                            <li>Aplicações em animações e modelagem 3D</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusão</h2>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        A Geometria Espacial é uma área fundamental da matemática com aplicações em praticamente todos
                        os campos do conhecimento. Dominar seus conceitos é essencial para compreender fenômenos
                        tridimensionais e resolver problemas práticos. As aplicações modernas da geometria espacial vão desde
                        a computação gráfica 3D até a navegação espacial, demonstrando sua relevância contínua.
                    </p>

                    <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                        Com o avanço da tecnologia, especialmente em áreas como realidade virtual e aumentada, a geometria espacial
                        torna-se cada vez mais importante para profissionais de diversas áreas, desde designers e engenheiros
                        até desenvolvedores de jogos e cientistas de dados.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Activity02;