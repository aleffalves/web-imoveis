import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Imovel } from 'src/app/models/imovel.model';

@Component({
  selector: 'app-modal-imovel-detalhes',
  templateUrl: './modal-imovel-detalhes.component.html',
  styleUrls: ['./modal-imovel-detalhes.component.css']
})
export class ModalImovelDetalhesComponent implements OnInit {

  imovel : Imovel = new Imovel()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<any>) { }
  ngOnInit(): void {
    this.imovel = this.data.imovel
  }



}
