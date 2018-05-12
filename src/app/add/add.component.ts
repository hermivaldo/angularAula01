import { Component, OnInit } from '@angular/core';
import { DespesaService } from '../despesa.service';
import { Router } from '@angular/router';

/**
 * classes
 */
import { Despesa } from '../despesa';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  despesa: Despesa;
  despesaService: DespesaService;
  router: Router
  constructor(despesaService: DespesaService, router: Router) 
  {
    this.despesaService = despesaService
    this.router = router
   }

  ngOnInit() {
    this.despesa = new Despesa(new Date().getTime(),
    '',new Date(), '', 0);
  }

  save(): void {
    this.despesaService.save(this.despesa);
    this.router.navigate(["/list"]);
  }



}
