/**
 * Button
 * Implementa um botão
 */
var Button = /** @class */ (function () {
    function Button() {
    }
    /**
     * Retona o id do componente
     */
    Button.prototype.getId = function () {
        return this.id;
    };
    return Button;
}());
var botao = new Button();
var botaoId = botao.getId;
console.log(botaoId);
