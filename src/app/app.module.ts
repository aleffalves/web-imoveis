import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ImovelComponent } from './components/imovel/imovel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListagemImoveisComponent } from './components/listagem-imoveis/listagem-imoveis.component';
import { MatTableModule } from '@angular/material/table';
import { ModalConfirmacaoComponent } from './components/modais/modal-confirmacao/modal-confirmacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalImovelDetalhesComponent } from './components/modais/modal-imovel-detalhes/modal-imovel-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImovelComponent,
    ListagemImoveisComponent,
    ModalConfirmacaoComponent,
    ModalImovelDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
