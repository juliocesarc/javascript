function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);

            if (el.classList.contains('btn-clear')) this.limpaInput();

            if (el.classList.contains('btn-del')) this.apagaUm();

            if (el.classList.contains('btn-eq')) this.btnResult();

            this.display.focus();

        })
    };

    this.pressionaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13){
                this.btnResult();
            }
        })
    };

    this.btnResult = () => {
        try{
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    this.limpaInput = () => this.display.value = '';
    this.addNumDisplay = (el) => this.display.value += el.innerText;

 
}

const calculadora = new Calculadora();
calculadora.inicia();