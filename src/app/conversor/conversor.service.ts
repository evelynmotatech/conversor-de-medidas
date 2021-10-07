import { Injectable } from "@angular/core";
import { Unidades } from "./unidades";


@Injectable()
export class ConversorService {
    constructor() { }

    getUnidades() {
        return Unidades.map((unidade) => unidade.unidade)
    }

    //Verifica se o valor digitado é do tipo number e se é finito
    isNumber(n: any) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    /**
     * Método para dividar a informação digitada no input em 2 componentes: valor e unidade.
     * Verifica se o valor é do tipo number;
     * Verifica se a unidade digitada é identica a alguma das unidades declaradas na Array do model.
     * @returns (val, uni)
    */
    formatarUnidade(unidadeString: string) {
        const partes = unidadeString.split(' ')
        const valor = parseFloat(partes[0])

        if (!this.isNumber(valor)) {
            return null 
        }
        const unidade = Unidades.filter((unidade) => partes[1].toLowerCase() === unidade.unidade)

        if (!unidade[0]) {
            return null
        }

        return {
            val: valor,
            uni: unidade[0].unidade
        }
    }

    /**
     * Método para converter unidade 
     * @param valor 
     * @param recebido 
     * @param tratado 
     * @returns número com até 6 casas positivas ou negativas
     */
    converterParaUnidade(valor: number, recebido: string, tratado: string) {
        var conversao;
        conversao = valor / Unidades.find((unidade) => unidade.unidade === recebido).paraMetros
        conversao *= Unidades.find((unidade) => unidade.unidade === tratado).paraMetros
        return parseFloat(conversao.toFixed(6));
    }

}