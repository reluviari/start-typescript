class Pessoa {
	nome: string;
	constructor(nome: string) {
		this.nome = nome;
	}
	sayHello(): string {
		return "Olá, " + this.nome;
	}
}

var fulano = new Pessoa("Danilo");
var beltrano = new Pessoa("Thales");

var pessoas: Pessoa[] = new Array();

pessoas.push(fulano);
pessoas.push(beltrano);

pessoas.forEach((p: Pessoa) => console.log(p.sayHello()));

/**
 * Array de numeros
 */
var list: number[] = [1, 2, 3];
var lista: Array<number> = [1, 2, 3];
