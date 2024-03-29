import { IBaseModel } from "./baseModel";
import { IsEmail,  IsNotEmpty, IsString, Length, Validate } from 'class-validator';
import { IsAutoGeneratedID, UniqueConstraint } from "../infra/repositories/repositoryDecorator";

export class Autor implements IBaseModel {
    @Validate(UniqueConstraint)
    @IsString()
    @IsNotEmpty({message: 'O ID autor não deve ser vazio'})
    @IsAutoGeneratedID()
    id: string;
    @IsString()
    @IsNotEmpty({message: 'O Nome do autor não deve ser vazio'})
    nome: string;
    @IsEmail()
    @IsNotEmpty({message: 'O e-mail deve ser preenchido'})
    @Validate(UniqueConstraint)
    email: string;
    @IsString()
    @Length(20, 50)
    biografia: string;
    public dataCadastro: Date;
}