import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Imovel } from 'src/app/models/imovel.model';
import { ImovelService } from 'src/app/services/imovel.service';
import { ModalConfirmacaoComponent } from '../modais/modal-confirmacao/modal-confirmacao.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalImovelDetalhesComponent } from '../modais/modal-imovel-detalhes/modal-imovel-detalhes.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-imoveis',
  templateUrl: './listagem-imoveis.component.html',
  styleUrls: ['./listagem-imoveis.component.css']
})
export class ListagemImoveisComponent implements OnInit{
  imoveis : Imovel[] = new Array();
  imoveisOriginal : Imovel[] = new Array();
  displayedColumns: string[] = ['acoes', 'nome', 'tipo', 'valor', 'condominio', 'quartos', 'banheiros', 'mobiliado'];
  filtro: string = '';

  constructor(
    private imovelService : ImovelService,
    public dialog : MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router : Router
  ){ }

  ngOnInit(): void {
    this.buscarImoveis()
  }

  buscarImoveis(){
    this.imovelService.buscarImoveis().subscribe({
      next : (imoveis) => {
        this.imoveis = imoveis
        this.imoveisOriginal = imoveis
      },
      error : (error) => console.error(error)
    })
  }

  onChangeToggle(){
    if(this.filtro.includes('comprar')){
      this.imoveis = this.imoveisOriginal.filter(imovel => imovel.venda == true)
    }else{
      this.imoveis = this.imoveisOriginal.filter(imovel => imovel.aluguel == true)
    }
  }

  deletar(imovel : Imovel, index : number){
    let modal = this.dialog.open(ModalConfirmacaoComponent,{
      data : {}
    })

    modal.afterClosed().subscribe({
      next : (res) => {
        if(res){
          this.deletarImovel(imovel, index)
        }
      }
    })
  }

  deletarImovel(imovel : Imovel, index : number){
    this.imovelService.excluirImovel(imovel).subscribe({
      next : () => {
        this._snackBar.open('Imovel deletado com sucesso', 'OK')
        this.imoveis = this.imoveis.splice(index,1)
      },
      error : () => this._snackBar.open('Erro ao tentar deletar imovel.', 'ERROR')
    })
  }

  detalhes(imovel : Imovel){
    this.dialog.open(ModalImovelDetalhesComponent,{
      data : {
        imovel : imovel
      }
    })
  }

  editar(imovel : Imovel){
        this.router.navigate([`imovel`, {imovel: JSON.stringify(imovel)}]);
  }
}
