import { Component, OnInit } from '@angular/core';
import { ConversorService } from './conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  par: {
    val: number,
    uni: string
  }
  para = 'm'
  resultado: number
  unidades: string[]

  constructor(private conversorService: ConversorService) { }
// a primeira execução é pra pegar as unidades
  ngOnInit() {
    this.unidades = this.conversorService.getUnidades()
  }
// aqui ele tá checando se é válido pra depois entrar na função de formatação de unidade
  formatarUnidade(unidade) {
    this.resultado = null
    if (unidade.valid) {
      this.par = this.conversorService.formatarUnidade(unidade.value)
    }
  }
// verificação do formulário e da unidade e valor
  verificacaoSubmit(verificar){
    return verificar.valid && !!this.par
  }
// usando a última função do service de conversão
  converter(){
    this.resultado = this.conversorService.converterParaUnidade(this.par.val, this.par.uni, this.para)
  }

}
