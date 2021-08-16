class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = " ";
        this.valorAnterior = " ";
        this.signos = {
            sumar: "+",
            restar: "-",
            multipluicar: "X",
            dividir: "/",
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.inmprimirValores();
    }

    borrarTodo() {
        this.valorActual = " ";
        this.valorAnterior = " ";
        this.tipoOperacion = undefined;
        this.inmprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = " ";
        this.inmprimirValores();
    }

    agregarNumero(numero) {
        if (numero == "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.inmprimirValores();
    }

    inmprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

    calcular() {
        const valorAnterior = parsefloat(this.valorAnterior);
        const valorActual = parsefloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorAnterior);
    }
}