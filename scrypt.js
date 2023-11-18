
var Gabriel = {
    nome:'Gabriel',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var Ohana = {
    nome:'Ohana',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var elementoTabela = document.getElementById('tabelaJogadores');

exibirNaTela( )

function exibirNaTela() {
elementoTabela.innerHTML = `
      <tr>
        <td>${gabriel.nome}</td>
        <td>${gabriel.vitoria}</td>
        <td>${gabriel.empate}</td>
        <td>${gabriel.derrota}</td>
        <td>${gabriel.pontos}</td>
        <td><button onClick="adicionarVitoria(gabriel)">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
      </tr>
      <tr>
        <td>Ohana</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button onClick="adicionarVitoria()">Vitória</button></td>
        <td><button onClick="adicionarEmpate()">Empate</button></td>
        <td><button onClick="adicionarDerrota()">Derrota</button></td>
     </tr>
`;
}
function adicionarVitoria(jogador) {
   jogador.vitoria++
   jogador.pontos = jogador.pontos + 3;
   exibirNaTela();
}

function adicionarEmpate(jogador) {
   jogador.empate++
   jogador.pontos++
   exibirNaTela()
}

function adicionarDerrota(jogador) {
   jogador.derrota++
   exibirNaTela()
}

