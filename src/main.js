import './assets/css/style.css';

import { GerarSenha} from './modules/geradorSEN.js';

import { GeraCPF } from './modules/geradorCPF.js';

import { ValidaCPF } from './modules/validaCPF.js';

const geraSenha = new GerarSenha;

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('geraCpf')) {
        let geraCpf = new GeraCPF;
        let inputCpf = document.querySelector('.cpf-screen');
        inputCpf.innerHTML = geraCpf.geraNovoCpf();
        
    }

    if(el.classList.contains('validCPF')) {
        let inputCpf = document.querySelector('.inputValid').value;
        let h2result = document.querySelector('h2');
        let validCpf = new ValidaCPF(inputCpf);
        if(validCpf.valida()) {
          h2result.innerText = 'Cpf correto'
          h2result.style.color = 'green' 
        } else {
          h2result.innerHTML = "Cpf incorreto"
          h2result.style.color = 'red' 
        }

            

    }
})

