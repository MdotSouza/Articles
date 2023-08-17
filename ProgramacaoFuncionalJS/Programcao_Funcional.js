//Função de Primeira Ordem
const calcular = function (numero1,numero2,operacao) {
    return `Resultado: ${operacao(numero1,numero2)}`
}

//Arrow Function Expression
const soma = (a,b) => a + b;
const subtracao = (a,b) => a - b;
const multiplicacao = (a,b) => a * b;
const divisao = (a,b) => a / b

//Verificação dos Resultados
console.log(calcular(1,2,soma));
console.log(calcular(9,7,subtracao));
console.log(calcular(4,3,multiplicacao));
console.log(calcular(18,9,divisao))

/*Exemplo de Alta Ordem Map*/
//Criando um array de base
const baseArray = [20.1, 0.56, 1.7, 4.2, 0.7, 6.3];

// Definindo um arrow function para Map
const funcMap = x => x * 60.0;

//Aplicando Map para cricação de novo array
const newArray = baseArray.map(funcMap);

//Verificação dos Resultados
console.log(newArray);

//Aplicando Map Alternativa 1
const newArray1 = baseArray.map( x => x * 60.0);
console.log(newArray1);

//Aplicando Map Alternativa 2
function funcMap2(x) {
    return x * 60.0;
}
const newArray2 = baseArray.map(funcMap2);
console.log(newArray2);

//Aplicando Map Alternativa 3
const newArray3 = baseArray.map(funcMap3 = x => x * 60.0);
console.log(newArray3);

//Aplicando Map Alternativa 4
const newArray4 = baseArray.map(function (x){
    return x * 60.0
});
console.log(newArray4);

/*Aplicação da Função Map - Cenário 1*/
const orcamentosTecnicos = [200.0,300.0,550.0,200.0,930.00]

const orcamentosFinais = orcamentosTecnicos.map(function (x){
                    let tax = 0.17
                    return x * (1+tax)
                    })
            .map(x => Math.ceil(x))
console.log(orcamentosFinais);

/*Aplicação da Função Map - Cenário 2*/
const dispositivos = [
    {id: "IMP0027", tipo: "Impressora", operacional: true, horasIndisponivel: 20.1},
    {id: "MNT0301", tipo: "Monitor", operacional: true, horasIndisponivel: 0.56},
    {id: "CPU0004", tipo: "CPU", operacional: false, horasIndisponivel: 1.7},
    {id: "CPU0002", tipo: "CPU", operacional: true, horasIndisponivel: 4.2},
    {id: "IMP1049", tipo: "Impressora", operacional: false, horasIndisponivel: 0.7},
    {id: "MNT0022", tipo: "Monitor", operacional: false, horasIndisponivel: 6.3}
]
const mapHorasMin = x => x.horasIndisponivel * 60.0
 minIndisponivel = dispositivos.map(mapHorasMin)
console.log(minIndisponivel)

/*Aplicação da Função Map - Cenário 3*/
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const clienteNotas = [];
for (let i = 0 ; i < 20 ; i++){
    clienteNotas.push(getRandom(0,100));
}
console.log(clienteNotas);

const clienteNPS = clienteNotas.map(
    function(x){
        if (x > 80) {
            return "Promotor"
        } else if (x > 50){
            return "Neutro"
        } else {
            return "Detrator"
        }
    }
)
console.log(clienteNPS);