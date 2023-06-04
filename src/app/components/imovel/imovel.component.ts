import { ImovelService } from 'src/app/services/imovel.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Tipo } from 'src/app/enums/tipo-enum.enum';
import { Endereco } from 'src/app/models/endereco.model';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css'],
})
export class ImovelComponent implements OnInit {

  imovelForm!: FormGroup;
  proprietarioForm!: FormGroup;
  tipos  = Object.values(Tipo)
  endereco : Endereco = new Endereco;
  screen : number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private imovelService : ImovelService,
    private proprietarioService : ProprietarioService,
    private _snackBar: MatSnackBar,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.imovelForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      valor: ['', Validators.required],
      condominio: [],
      quartos: [],
      banheiros: [],
      mobiliado: [false],
      area: [],
      venda: [false, Validators.required],
      aluguel: [false, Validators.required],
      dataAnuncio: [new Date()],
      endereco: this.formBuilder.group({
        id: [],
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        uf: ['', Validators.required],
        cep: ['', Validators.required],
      }),
      proprietarioId: [],
    });

    this.proprietarioForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      imovelId: []
    })
  }

  submitFormProprietario(){
    if(!this.proprietarioForm.valid){
      this._snackBar.open('Preencher campos requeridos', 'OK');
    }else{
      this.proprietarioService.salvarProprietario(this.proprietarioForm.value).subscribe({
        next : (proprietario) => {
          this.proprietarioForm.setValue(proprietario)
          this.imovelForm.get('proprietarioId')?.setValue(proprietario.id)
          this.screen = 2
        },
        error : (error) => console.error(error)
      })
    }

  }

  submitFormImovel(){
    if(!this.imovelForm.valid){
      this._snackBar.open('Preencher campos requeridos', 'OK');
    }else{
      this.imovelService.salvarImovel(this.imovelForm.value).subscribe({
        next : (imovel) => {
          this._snackBar.open('Cadastro realizado com sucesso.', 'OK');
          this.proprietarioForm.get('imovelId')?.setValue(imovel.id)
          this.atualizarProprietario()
          this.goToHome()
        },
        error : (error) => console.error(error)
      })
    }
  }

  onChangeToggle(event: MatButtonToggleChange){
    if(event.value.includes('aluguel')){
      this.imovelForm.get('aluguel')?.setValue(true)
      this.imovelForm.get('venda')?.setValue(false)
    }else{
      this.imovelForm.get('aluguel')?.setValue(false)
      this.imovelForm.get('venda')?.setValue(true)
    }
  }

  buscarCep(){
    let cep : string = this.imovelForm.value.endereco.cep
    if(cep.length == 8){
      this.imovelService.buscarCep(cep).subscribe({
        next : (endereco) => {
          this.imovelForm.get('endereco.rua')?.setValue(endereco.logradouro ? endereco.logradouro : '')
          this.imovelForm.get('endereco.bairro')?.setValue(endereco.bairro ? endereco.bairro : '')
          this.imovelForm.get('endereco.cidade')?.setValue(endereco.localidade ? endereco.localidade : '')
          this.imovelForm.get('endereco.uf')?.setValue(endereco.localidade ? endereco.localidade : '')
        },
        error : (error) => console.error(error)
      })
    }
  }

  atualizarProprietario(){
    this.proprietarioService.atualizarProprietario(this.proprietarioForm.value).subscribe({
      next : (proprietario) =>  this.proprietarioForm.setValue(proprietario)
    })
  }

  cancel(){
    this.proprietarioService.deletarProprietario(this.proprietarioForm.value).subscribe();
  }

  goToHome() {
    this.router.navigate(['home']);
  }


}
