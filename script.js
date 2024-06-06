const caixaPrincipal = document.querySelectot(".caixa-principal");
const caixaPerguntas = document.querySelectot(".caixa-perguntas");
const caixaAlternativa = document.querySelectot(".caixa-alternativas");
const caixaResultado = document.querySelectot(".caixa-resultado");
const textoResultado = document.querySelectot(".texto-resultado");

const perguntas = [
    { // primeiro objeto da lista de perguntas
        enunciado: "pergunta1",
        alternativas: ["alternativa1", "alternativa2"]
    },
    { // segundo objeto da lista de perguntas
        enunciado: "pergunta2",
        alternativas: ["alternativa1", "alternativa2"]
    }
];