const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: “No social, TU QUER...”,
        alternativa: [
            {
                texto: “alternativa1”,
                afirmacao: “afirmação1”,
            },
            {
                texto:  “alternativa2”,
                afirmacao: “afirmação2”,
            },
        ]
    },

    {
        enunciado: “Na tec, TU QUER...”,
        alternativa: [
            {
                texto: “alternativa3”,
                afirmacao: “afirmação3”,
            },
            {
                texto: “alternativa4”,
                afirmacao: “afirmação4”,
            },
        ]
    },

    {
        enunciado: “No social, TU QUER...”,
        alternativa: [
            {
                texto: “alternativa5”,
                afirmacao: “afirmação5”,
            },
            {
                texto: “alternativa6”,
                afirmacao: “afirmação6”,
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPerguntas (){
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = “ ”;
}

function mostrarAlternativas (){
    for (const opcao of perguntaAtual.alternativa){
        const botaoAlternativa = documento.createElement('button');
        botaoAlternativa.textContent = opcao.texto:
        caixaAlternativa.appendChild(botaoAlternativa)
    }
}

mostrarPerguntas();
