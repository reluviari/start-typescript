/**
Parâmetros no formato JSON

Umas das maiores facilidades do Javascript é repassar parâmetros no formato JSON. Com TypeScript é possível utilizar este mesmo comportamento, conforme o exemplo a seguir.
*/
var Ponto = /** @class */ (function () {
    function Ponto(p) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._x = p.x;
        this._y = p.y;
        if (p.z)
            this._z = p.z;
    }
    Ponto.prototype.is3d = function () {
        return this._z != 0;
    };
    return Ponto;
}());
var p1 = new Ponto({ x: 10, y: 20, z: 30 });
console.log(p1.is3d());
/**
Observe que no construtor da classe Ponto criamos o parâmetro p e na definição do seu tipo repassamos um objeto anônimo com três parâmetros, sendo que o parâmetro z é opcional.
*/
