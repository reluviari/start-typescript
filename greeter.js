/**
 * Cria um estudante
 */
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    Student.prototype.message = function () {
        return "Ola, " + this.fullName;
    };
    return Student;
}());
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
