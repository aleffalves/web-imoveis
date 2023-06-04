import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css']
})
export class ModalConfirmacaoComponent implements OnInit {

  txtEnunciado?: string;
  txtPositivo?: string;
  txtNegativo?: string;
  txtSmall?: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialogRef<any>) { }

  ngOnInit() {
    this.txtEnunciado = this.data?.txtEnunciado || "Tem certeza que deseja realizar esta ação ?"
    this.txtPositivo = this.data?.txtPositivo || "Sim"
    this.txtNegativo = this.data?.txtNegativo || "Não"
    this.txtSmall     = this.data?.small || null;
  }

  retornar(resposta: boolean) {
    this.dialog.close(resposta);
  }

}
