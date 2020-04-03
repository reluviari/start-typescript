var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.sayHello = function () {
        return "Olá, " + this.nome;
    };
    return Pessoa;
}());
var fulano = new Pessoa("Danilo");
var beltrano = new Pessoa("Thales");
var pessoas = new Array();
pessoas.push(fulano);
pessoas.push(beltrano);
pessoas.forEach(function (p) { return console.log(p.sayHello()); });
/**
 * Array de numeros
 */
// let lista: Array<number> = [1, 2, 3];
