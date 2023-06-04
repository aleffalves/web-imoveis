import { Component, OnInit } from '@angular/core';
import { Imovel } from 'src/app/models/imovel.model';
import { ImovelService } from 'src/app/services/imovel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  imoveis : Imovel[] = new Array();

  constructor(
    private imovelService : ImovelService
  ){ }

  ngOnInit(): void {
    this.buscarImoveis()
  }

  buscarImoveis(){
    this.imovelService.buscarImoveis().subscribe({
      next : (imoveis) => imoveis = imoveis,
      error : (error) => console.error(error)
    })
  }

}
