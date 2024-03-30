export class GerarSenha {
    constructor() {
        this.caracter = document.querySelector('.caracter-input');
        this.number = document.querySelector('.number-input');
        this.upperCase = document.querySelector('.upperCase-input');
        this.lowerCase = document.querySelector('.lowerCase-input');
        this.symbol = document.querySelector('.symbol-input');
        this.result = [];
    }

    rand(min, max) { 
        return Math.floor(Math.random() * (max - min) + min)
    }

    valid() {
        
    }

    validOptions() {
        let valid = false;
        if(!((this.number.checked) || (this.upperCase.checked) || (this.lowerCase.checked))) valid = true;
        return valid;

    }

    addNumber(n) {
        this.result.push(n)
    }

    addUpper(n) {
        let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        this.result.push(letras[n])
    }

    addLower(n) {
        let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        this.result.push(letras[n])
    }


    gerador() {
        if(this.upperCase.checked) this.addUpper(this.rand(0 , 25));
        if(this.lowerCase.checked) this.addLower(this.rand(0 , 25));
        if(this.number.checked) this.addNumber(this.rand(0 , 9));
    }
}

document.addEventListener('click', (e) => {
    const gerar = new GerarSenha();
    const el = e.target;
    if(el.classList.contains('btn-gerar')) {
        const screen = document.querySelector('.password-screen')
        if(gerar.caracter.value === '') return screen.innerHTML = 'Informe a quantidade de caracteres'
        if(gerar.caracter.value > 20 || gerar.caracter.value < 1) return screen.innerHTML = 'Preencha no mínimo uma opção'
        if(gerar.validOptions()) return screen.innerHTML = 'Preencha no mínimo uma opção'
        screen.innerHTML = '';
        const rep = gerar.caracter.value;
        for(let i = 0; i < rep; i++) {
            gerar.gerador()
            screen.innerHTML += gerar.result[i];
            if(screen.innerHTML.length === 20 || screen.innerHTML.length === 40) screen.innerHTML += '</br>'
        }
    }
})