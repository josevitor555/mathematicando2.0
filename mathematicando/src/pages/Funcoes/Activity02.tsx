import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGlobe, faHashtag, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { InlineMath, BlockMath } from 'react-katex';

// Dados do autor (exemplo)
const authorData = {
    name: "Matheus Oliveira",
    degree: "Mestre em Matemática Aplicada pelo IMPA, Bacharel em Matemática pela UFRJ",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    postDate: "26 de Setembro de 2025",
    socialLinks: {
        website: "https://matheusoliveira.com",
        twitter: "@matheusoliveira_math",
        linkedin: "linkedin.com/in/matheusoliveira",
        github: "github.com/matheusoliveira"
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
                            Funções Quadráticas: Uma Abordagem Completa
                        </h1>
                    </header>

                    <p className="lead mb-4 text-lg">
                        As funções quadráticas são polinômios de segundo grau que desempenham um papel fundamental
                        na matemática e em suas aplicações. Neste artigo, exploraremos suas propriedades, formas
                        de representação e aplicações práticas.
                    </p>

                    <p className="mb-4 text-lg">
                        Uma função quadrática é uma função polinomial de grau 2, que pode ser escrita na forma:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="f(x) = ax^2 + bx + c" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>a, b e c são números reais chamados coeficientes</li>
                            <li>a \neq 0 (caso contrário, não seria uma função quadrática)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Formas de Representação</h2>

                    <p className="mb-4 text-lg">
                        As funções quadráticas podem ser representadas de três formas equivalentes:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Forma Geral</h3>

                    <div className="mb-4 text-lg">
                        <BlockMath math="f(x) = ax^2 + bx + c" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Forma Canônica (Vértice)</h3>

                    <div className="mb-4 text-lg">
                        <BlockMath math="f(x) = a(x - x_v)^2 + y_v" />
                    </div>

                    <p className="mb-4 text-lg">
                        Onde (x<sub>v</sub>, y<sub>v</sub>) é o vértice da parábola.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Forma Fatorada</h3>

                    <div className="mb-4 text-lg">
                        <BlockMath math="f(x) = a(x - x_1)(x - x_2)" />
                    </div>

                    <p className="mb-4 text-lg">
                        Onde x<sub>1</sub> e x<sub>2</sub> são as raízes da função (se existirem).
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Gráfico: A Parábola</h2>

                    <p className="mb-4 text-lg">
                        O gráfico de uma função quadrática é uma parábola, que pode ter a concavidade voltada para cima
                        (quando a <InlineMath math=" > 0" />) ou para baixo (quando a <InlineMath math=" < 0" />).
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Concavidade</h3>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Se <strong className="text-white">a <InlineMath math=" > 0" /></strong>, a parábola tem concavidade para cima</li>
                        <li>Se <strong className="text-white">a <InlineMath math=" < 0" /></strong>, a parábola tem concavidade para baixo</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Vértice</h3>

                    <p className="mb-4 text-lg">
                        O vértice da parábola é o ponto mais alto (máximo) ou mais baixo (mínimo) da função:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="x_v = -\frac{b}{2a}" />
                        <BlockMath math="y_v = f(x_v) = -\frac{\Delta}{4a}" />
                        <p>Onde <InlineMath math="\Delta = b^2 - 4ac" /> (discriminante)</p>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Raízes da Função Quadrática</h2>

                    <p className="mb-4 text-lg">
                        As raízes (ou zeros) da função quadrática são os valores de x para os quais f(x) = 0.
                        Elas podem ser encontradas pela fórmula de Bhaskara:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="x = \frac{-b \pm \sqrt{\Delta}}{2a}" />
                        <p>Onde <InlineMath math="\Delta = b^2 - 4ac" /></p>
                    </div>

                    <p className="mb-4 text-lg">
                        O discriminante (Δ) determina a natureza das raízes:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Se <strong className="text-white"><InlineMath math="\Delta > 0" /></strong>: duas raízes reais e distintas</li>
                        <li>Se <strong className="text-white"><InlineMath math="\Delta = 0" /></strong>: uma raiz real (dupla)</li>
                        <li>Se <strong className="text-white"><InlineMath math="\Delta < 0" /></strong>: duas raízes complexas conjugadas</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Sinal da Função Quadrática</h2>

                    <p className="mb-4 text-lg">
                        O sinal da função quadrática depende do coeficiente a e das raízes:
                    </p>

                    <ul className="list-disc list-inside mb-4 space-y-2 text-lg">
                        <li>Se <strong className="text-white">a <InlineMath math=" > 0" /></strong> e <InlineMath math="\Delta \geq 0" />:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>f(x) <InlineMath math=" > 0" /> para x <InlineMath math=" < x_1" /> ou x <InlineMath math=" > x_2" /></li>
                                <li>f(x) <InlineMath math=" < 0" /> para <InlineMath math="x_1 < x < x_2" /></li>
                                <li>f(x) = 0 para x = x<sub>1</sub> ou x = x<sub>2</sub></li>
                            </ul>
                        </li>
                        <li>Se <strong className="text-white">a <InlineMath math=" < 0" /></strong> e <InlineMath math="\Delta \geq 0" />:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>f(x) <InlineMath math=" < 0" /> para x <InlineMath math=" < x_1" /> ou x <InlineMath math=" > x_2" /></li>
                                <li>f(x) <InlineMath math=" > 0" /> para <InlineMath math="x_1 < x < x_2" /></li>
                                <li>f(x) = 0 para x = x<sub>1</sub> ou x = x<sub>2</sub></li>
                            </ul>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Aplicações Práticas</h2>

                    <p className="mb-4 text-lg">
                        As funções quadráticas aparecem em diversas situações do cotidiano:
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Lançamento Oblíquo</h3>

                    <p className="mb-4 text-lg">
                        A altura de um projétil lançado obliquamente em função do tempo segue uma função quadrática:
                    </p>

                    <div className="bg-gray-200/10 text-gray-200 p-4 rounded-lg overflow-x-auto mb-4 text-lg">
                        <BlockMath math="h(t) = h_0 + v_0\sin(\theta)t - \frac{1}{2}gt^2" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>h₀ é a altura inicial</li>
                            <li>v₀ é a velocidade inicial</li>
                            <li>θ é o ângulo de lançamento</li>
                            <li>g é a aceleração da gravidade</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-6 mb-2">Área de um Retângulo</h3>

                    <p className="mb-4 text-lg">
                        Se quisermos maximizar a área de um retângulo com perímetro fixo, obtemos uma função quadrática.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exemplo Resolvido</h2>

                    <p className="mb-4 text-lg">
                        Vamos analisar a função f(x) = x² - 4x + 3:
                    </p>

                    <ol className="list-decimal list-inside mb-4 space-y-2 text-lg">
                        <li><strong className="text-white">Forma geral</strong>: a = 1, b = -4, c = 3</li>
                        <li><strong className="text-white">Concavidade</strong>: Para cima (a = 1 <InlineMath math=" > 0" />)</li>
                        <li><strong className="text-white">Raízes</strong>:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li><InlineMath math="\Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4" /></li>
                                <li><InlineMath math="x = \frac{4 \pm \sqrt{4}}{2} = \frac{4 \pm 2}{2}" /></li>
                                <li>x<sub>1</sub> = 1 e x<sub>2</sub> = 3</li>
                            </ul>
                        </li>
                        <li><strong className="text-white">Vértice</strong>:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li><InlineMath math="x_v = -\frac{(-4)}{2 \times 1} = 2" /></li>
                                <li>y<sub>v</sub> = f(2) = 4 - 8 + 3 = -1</li>
                                <li>Vértice: (2, -1)</li>
                            </ul>
                        </li>
                    </ol>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exemplos Interativos</h2>

                    <p className="mb-4 text-lg">
                        Vamos explorar alguns exemplos interativos para entender melhor como as funções quadráticas se comportam:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo 1: Função com Concavidade para Baixo</h3>
                        <p>Considere f(x) = -2x² + 4x + 1</p>
                        <BlockMath math="f(x) = -2x^2 + 4x + 1" />
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                            <li>Coeficiente a = -2 (negativo, concavidade para baixo)</li>
                            <li>Coeficiente b = 4</li>
                            <li>Coeficiente c = 1</li>
                            <li>Vértice: x<sub>v</sub> = -4/(2×(-2)) = 1; y<sub>v</sub> = f(1) = -2 + 4 + 1 = 3</li>
                            <li>Vértice: (1, 3) - ponto de máximo</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo 2: Função com Discriminante Zero</h3>
                        <p>Considere g(x) = x² - 4x + 4</p>
                        <BlockMath math="g(x) = x^2 - 4x + 4" />
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                            <li>Coeficiente a = 1 (positivo, concavidade para cima)</li>
                            <li>Coeficiente b = -4</li>
                            <li>Coeficiente c = 4</li>
                            <li>Discriminante: Δ = (-4)² - 4(1)(4) = 16 - 16 = 0</li>
                            <li>Raiz dupla: x = 4/2 = 2</li>
                            <li>Vértice: (2, 0) - toca o eixo x em um único ponto</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Exercícios Práticos</h2>

                    <p className="mb-4 text-lg">
                        Tente resolver os seguintes exercícios para fixar o aprendizado:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exercício 1</h3>
                        <p>Determine o vértice e as raízes da função f(x) = 2x² - 8x + 6. Classifique a concavidade.</p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p>Solução:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Coeficientes: a = 2, b = -8, c = 6</li>
                                    <li>Concavidade: para cima (a = 2 <InlineMath math=" > 0" />)</li>
                                    <li>Vértice: x<sub>v</sub> = -(-8)/(2×2) = 8/4 = 2</li>
                                    <li>y<sub>v</sub> = f(2) = 2(4) - 8(2) + 6 = 8 - 16 + 6 = -2</li>
                                    <li>Vértice: (2, -2)</li>
                                    <li>Discriminante: Δ = (-8)² - 4(2)(6) = 64 - 48 = 16</li>
                                    <li>Raízes: x = (8 ± √16)/4 = (8 ± 4)/4</li>
                                    <li>x<sub>1</sub> = 1 e x<sub>2</sub> = 3</li>
                                </ul>
                            </div>
                        </details>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exercício 2</h3>
                        <p>Uma empresa determinou que seu lucro L(x) em função da quantidade x de produtos vendidos é dado por L(x) = -x² + 100x - 1600. Determine a quantidade de produtos que maximiza o lucro e qual é esse lucro máximo.</p>
                        <details className="mt-2">
                            <summary className="cursor-pointer text-blue-300 hover:text-blue-200">Ver solução</summary>
                            <div className="mt-2 p-2 bg-gray-200/10 rounded">
                                <p>Solução:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Função: L(x) = -x² + 100x - 1600</li>
                                    <li>Coeficientes: a = -1, b = 100, c = -1600</li>
                                    <li>Concavidade: para baixo (a = -1 <InlineMath math=" < 0" />) - ponto de máximo</li>
                                    <li>Quantidade que maximiza: x<sub>v</sub> = -100/(2×(-1)) = 50 produtos</li>
                                    <li>Lucro máximo: L(50) = -(50)² + 100(50) - 1600 = -2500 + 5000 - 1600 = 900</li>
                                    <li>Lucro máximo: R$ 900,00 com 50 produtos vendidos</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Aplicações em Economia</h2>

                    <p className="mb-4 text-lg">
                        As funções quadráticas têm ampla aplicação em modelos econômicos:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Custo, Receita e Lucro</h3>
                        <p>Em microeconomia, funções quadráticas modelam relações não lineares:</p>
                        <BlockMath math="\text{Custo: } C(x) = ax^2 + bx + c" />
                        <BlockMath math="\text{Receita: } R(x) = px - qx^2" />
                        <BlockMath math="\text{Lucro: } L(x) = R(x) - C(x)" />
                        <p>Onde:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>x é a quantidade produzida/vendida</li>
                            <li>a, b, c, p, q são constantes positivas</li>
                            <li>O custo pode aumentar quadraticamente com a produção (dificuldades logísticas)</li>
                            <li>A receita pode ter um termo quadrático negativo (diminuição do preço com maior oferta)</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Maximização de Lucro</h3>
                        <p>O lucro máximo ocorre no vértice da parábola do lucro:</p>
                        <BlockMath math="L(x) = (p - b)x - (q + a)x^2 - c" />
                        <BlockMath math="x_{max} = \frac{p - b}{2(q + a)}" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Funções Quadráticas com Parâmetros</h2>

                    <p className="mb-4 text-lg">
                        Estudar como os coeficientes afetam o gráfico da função quadrática:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Variação do Coeficiente "a"</h3>
                        <p>Na função f(x) = ax²:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Quanto maior |a|, mais "fechada" é a parábola</li>
                            <li>Quanto menor |a|, mais "aberta" é a parábola</li>
                            <li>Sinal de a determina a concavidade</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Variação do Coeficiente "b"</h3>
                        <p>Na função f(x) = x² + bx:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>O coeficiente b afeta a posição horizontal do vértice</li>
                            <li>Vértice em x<sub>v</sub> = -b/2</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Variação do Coeficiente "c"</h3>
                        <p>Na função f(x) = x² + c:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>O coeficiente c representa o deslocamento vertical</li>
                            <li>É o ponto onde a parábola intersecta o eixo y</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Transformações de Gráficos</h2>

                    <p className="mb-4 text-lg">
                        A partir da função básica f(x) = x², podemos obter outras parábolas através de transformações:
                    </p>

                    <div className="bg-gray-200/10 rounded-lg text-gray-200 p-4 overflow-x-auto mb-4 text-lg">
                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Translações</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong className="text-white">Vertical</strong>: f(x) = x² + k desloca k unidades para cima (k <InlineMath math=" > 0" />) ou para baixo (k <InlineMath math=" < 0" />)</li>
                            <li><strong className="text-white">Horizontal</strong>: f(x) = (x - h)² desloca h unidades para a direita (h <InlineMath math=" > 0" />) ou para a esquerda (h <InlineMath math=" < 0" />)</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Dilatações e Compressões</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong className="text-white">Vertical</strong>: f(x) = ax²</li>
                            <li>Se |a| <InlineMath math=" > 1" />: dilatação vertical</li>
                            <li>Se 0 <InlineMath math=" < |a| < 1" />: compressão vertical</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Reflexões</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong className="text-white">Em relação ao eixo x</strong>: f(x) = -x²</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mt-4 mb-2">Exemplo Composto</h3>
                        <p>A função f(x) = 2(x - 3)² + 1 representa uma parábola:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Deslocada 3 unidades para a direita</li>
                            <li>Deslocada 1 unidade para cima</li>
                            <li>Comprimida verticalmente (fator 2)</li>
                            <li>Com concavidade para cima</li>
                            <li>Vértice em (3, 1)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-white mt-8 mb-4">Conclusão</h2>

                    <p className="mb-4 text-lg">
                        As funções quadráticas são ferramentas matemáticas essenciais com aplicações em física,
                        engenharia, economia e muitas outras áreas. Dominar seus conceitos é fundamental para
                        compreender fenômenos do mundo real que envolvem relações não lineares.
                    </p>

                    <p className="text-lg">
                        No próximo artigo, exploraremos as funções exponenciais e logarítmicas.
                    </p>
                </motion.article>
            </div>
        </div>
    );
};

export default Activity02;