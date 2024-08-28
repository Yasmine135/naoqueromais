const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No social tu escolhe:",
        alternativa: [
            {
                texto: "alternativa1",
                afirmacao: "afirmação1",
            },
            {
                texto:  "alternativa2",
                afirmacao: "afirmação2",
            },
        ]
    },

    {
        enunciado: "Na amb tu escolhe:",
        alternativa: [
            {
                texto: "alternativa3",
                afirmacao: "afirmação3",
            },
            {
                texto: "alternativa4",
                afirmacao: "afirmação4",
            },
        ]
    },

    {
        enunciado: "No tec tu escolhe:",
        alternativa: [
            {
                texto: "alternativa5",
                afirmacao: "afirmação5",
            },
            {
                texto: "alternativa6",
                afirmacao: "afirmação6",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal;

function mostraPerguntas(){
    if(atual >= alternativas.length);
        return;
}

function mostraPerguntas (){
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas ();
}

function mostrarAlternativas (){
    for (const opcao of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.alternativas;
    historiaFinal += afirmacoes = "";
    atual++;
    mostraPerguntas;
}

function mostraResultado (){
    caixaPerguntas.textContent = "tu quis";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas = "";
}
mostraPerguntas();
