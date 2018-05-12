import { Injectable } from '@angular/core';
import { Despesa } from './despesa';
import { LocalStorageService} from 'angular-2-local-storage';


@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private despesas = new Array<Despesa>()
  private localStorage: LocalStorageService
  constructor(localStorage: LocalStorageService) {
    this.localStorage = localStorage;
  }

  getDb(){
    let tmpDespesa = this.localStorage.get("despesas") as string
    if ( tmpDespesa.indexOf("null") != 1){
      this.despesas = JSON.parse(<string> tmpDespesa) as Despesa[]
    }
  }

  public getAll() : Despesa[] {
    this.getDb()
    /**
    this.despesas =
    [new Despesa(1,'mercado',new Date(),'Dia',298.2),
    new Despesa(2,'padaria',new Date(),'Dona Panela',223.3),
    new Despesa(3,'farmácia',new Date(),'Droga+',123.3)];
 */
    return this.despesas
  }

  public save(despesa: Despesa){
    this.getDb()
    this.despesas.push(despesa)
    this.localStorage.set("despesas", JSON.stringify(this.despesas))
  }

  public delete(despesaId: number){
    this.despesas = this.despesas.map(function(despesa){
      if(despesa.id != despesaId){
        return despesa
      }
    });
    this.localStorage.set("despesas", JSON.stringify(this.despesas));
  }
}
