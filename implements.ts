interface IComponent {
	getId(): string;
}

/**
 * Button
 * Implementa um botão
 */
class Button implements IComponent {
	private id: string;
	/**
	 * Retona o id do componente
	 */
	getId(): string {
		return this.id;
	}
}

let botao = new Button();
let botaoId = botao.getId;

console.log(botaoId);
