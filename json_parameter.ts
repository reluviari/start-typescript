/** 
Parâmetros no formato JSON

Umas das maiores facilidades do Javascript é repassar parâmetros no formato JSON. Com TypeScript é possível utilizar este mesmo comportamento, conforme o exemplo a seguir.
*/

class Ponto {
	private _x: number = 0;
	private _y: number = 0;
	private _z: number = 0;

	constructor(p: { x: number; y: number; z?: number }) {
		this._x = p.x;
		this._y = p.y;
		if (p.z) this._z = p.z;
	}

	is3d(): boolean {
		return this._z != 0;
	}
}

var p1 = new Ponto({ x: 10, y: 20 });

console.log(p1.is3d());

/**
Observe que no construtor da classe Ponto criamos o parâmetro p e na definição do seu tipo repassamos um objeto anônimo com três parâmetros, sendo que o parâmetro z é opcional.
*/
