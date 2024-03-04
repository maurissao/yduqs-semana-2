import { BaseModel } from "./baseModel"

export class Autor extends BaseModel {
    nome: string;
    email: string;
    biografia: string;
    dataCadastro: Date;
}