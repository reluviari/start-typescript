/**
 * Cria um estudante
 */
class Student {
	private fullName: string;
	constructor(
		public firstName: string,
		public middleName: string,
		public lastName: string
	) {
		this.fullName = firstName + " " + middleName + " " + lastName;
	}
	public message() {
		return "Ola, " + this.fullName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

/**
 * Usando a function externa greeter
 */

// function greeter(person: Person) {
// 	return "Ola " + person.firstName + " " + person.lastName;
// }

// var user = new Student("Danilo", "", "Silva");
// document.body.textContent = greeter(user);

/**
 * Usando o retorno da classe
 */
var estudante = new Student("Danilo", "Dias", "Silva");
document.body.textContent = estudante.message();
