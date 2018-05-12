import { Component, OnInit } from '@angular/core';
/**
 * Serviços
 */
import { DespesaService } from '../despesa.service';
import { Router } from '@angular/router';

/**
 * classes
 */
import { Despesa } from '../despesa';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  despesas: Despesa[];
  despesaService: DespesaService;
  constructor(despesaService: DespesaService,private router: Router) 
  { 
    this.despesaService = despesaService;
    this.despesas = despesaService.getAll();

  }

  ngOnInit() {
  }

  add() {
    this.router.navigate(['/add']);
  }

  delete(despesaId: number){
    this.despesaService.delete(despesaId);
    
    
  }
}
