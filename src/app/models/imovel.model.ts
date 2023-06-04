import { Tipo } from "../enums/tipo-enum.enum";
import { Endereco } from "./endereco.model";

export class Imovel{

  id? : number;
  nome? : string;
  tipo? : Tipo;
  valor? : number;
  condominio? : number;
  quartos? : number;
  banheiros? : number;
  mobiliado? : boolean;
  area? : number;
  venda? : boolean;
  aluguel? : boolean;
  dataAnuncio? : Date;
  endereco? : Endereco;
  proprietarioId? : number;

}
