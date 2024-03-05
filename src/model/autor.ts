import { IBaseModel } from "./baseModel";
import { IsEmail, IsInt, IsNotEmpty, IsString, isNotEmpty, isString, Length } from 'class-validator';

export class Autor implements IBaseModel {
    @IsString()
    @IsNotEmpty({message: 'O Nome do autor não deve ser vazio'})
    nome: string;
    @IsEmail()
    @IsNotEmpty({message: 'O e-mail deve ser preenchido'})
    email: string;
    @IsString()
    @Length(20, 50)
    biografia: string;
    dataCadastro: Date;
}