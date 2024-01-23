const frmMedias = document.getElementById('frmMedias');
const imgFeliz = '<img src="img/aprovado.png" alt="Emoji Festejando">';
const imgTriste = '<img src="img/reprovado.png" alt="Emoji Triste">';
var notaMinima = parseFloat(prompt('Qual a média para aprovação?'));

while (isNaN(notaMinima)){
    notaMinima = parseFloat(prompt('Qual a média para aprovação?'));
}

const arrAtivi = [];
const arrNotas = [];
let linhas = '';

frmMedias.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    //console.log('Média Final: '+updMediaFinal());
    document.getElementById('mediaFinal').innerHTML = updMediaFinal()
    updTable();
})

function addLinha(){
    let linha = `<tr><td>${document.getElementById('txtAtividade').value}</td><td>${document.getElementById('txtNota').value}</td><td>${document.getElementById('txtNota').value >= notaMinima ? imgFeliz : imgTriste}</td></tr>`;

    if (arrAtivi.includes(document.getElementById('txtAtividade').value)){
        alert('Não é permitida atividade duplicada!!!');
    }else{
        arrAtivi.push(document.getElementById('txtAtividade').value);
        arrNotas.push(parseFloat(document.getElementById('txtNota').value));

        linhas += linha;
    }
    document.getElementById('txtAtividade').value = '';
    document.getElementById('txtNota').value = '';
}

function updTable(){
    document.getElementById('dados').innerHTML = linhas;
}

function calculaMediaFinal(){
    let total = 0;
    
    for (let i in arrNotas){
        total += arrNotas[i];
    }
    return (total/arrNotas.length);
}

function updMediaFinal(){
    let media = calculaMediaFinal();
    return `<tr><td><b>Média Final</b></td><td><b>${media.toFixed(2)}</b></td><td><span class="resultado ${media >= notaMinima ? 'aprovado' : 'reprovado'}">${media >= notaMinima ? 'Aprovado' : 'Reprovado'}</span></td></tr>`;
}

