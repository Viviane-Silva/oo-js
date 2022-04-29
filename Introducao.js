// herança - baseada em prototipos, prototype, __proto__

function Pessoa(name){
    this.name = name;
}

const p = new Pessoa(`Vivi`);
console.log(p)// retorna o nome `Vivi`

function Pessoa(name){
    this.name = name;

    return{
        name: `Teste`
    };
}
const p2 = new Pessoa(`Rui`);
console.log(p2);// ele vai retornar o `Teste` , por causa do return definido