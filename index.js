const tipoDeAtaqueHeroi = {
    mago:"magia",
    guerreiro:"espada",
    monge:"artes marciais",
    ninja:"shuriken"
};

class Heroi {
    constructor(nome, idade, tipoHeroi) {
        this.nome = nome;
        this.idade = idade;
        this.tipoHeroi = tipoHeroi;
    }

    atacar() {
        let ataque = tipoDeAtaqueHeroi[this.tipoHeroi];
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`);
    }
}

let maguinho = new Heroi("Maguinho", 20, "mago");
maguinho.atacar();