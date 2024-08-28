const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Você fica bilionário, porém você só pode usar um salário mínimo por mês",
                afirmacao: "Você gastou tudo... ficou o resto do mês com fome...",
            },
            {
                texto: "Você acaba com a fome do mundo, mas o canibalismo agora é a solução",
                afirmacao: "Você tá sendo perseguidor pelo mendigo da esquina...",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Você acaba com o desmatamento, mas não existe mais macaco (reflorestamento manual)",
                afirmacao: "Estão todos exaustos, agora ninguémtem tempo de platar comida",
            },
            {
                texto: "agricultura se torna menos agressiva ao ambiente e mais lucrativa, mas ovelhas são os novos deuses e existe uma supremacia em volta delas",
                afirmacao: "Queimaram udo de lã... Tá frio... E o seu vizinho quer te dar de oferenda...",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "A humanidade teria um super avanço tecnológico, mas a revolução das máquinas começa em 5 anos 4 meses 1 dia 8 horas…(start running…)",
                afirmacao: "Amigo... corre...",
            },
            {
                texto: "Você tem a armadura do homem de ferro, mas será caçado por um xenomorfo para sempre",
                afirmacao: "... preciso mesmo te dizer?",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.afirmacao;
    historiaFinal += afirmacoes + "vc morreu de fome, lamentável";
    atual++;
    mostraPerguntas();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();
