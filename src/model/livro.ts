import { IBaseModel } from "./baseModel";
import { IsEmail,  IsNotEmpty, IsString, Length, Validate, ValidateIf, MaxDate, MinDate, minDate } from 'class-validator';
import { UniqueConstraint } from "../infra/repositories/repositoryDecorator";
import { Autor } from "./autor";
import { DateEx } from "../infra/repositories/baseRepository";

export class Livro implements IBaseModel {
    @IsString()
    @IsNotEmpty()
    nome: string;
    @IsString()
    @IsNotEmpty()
    @Length(500)
    resumo: string;
    @IsNotEmpty()
    @Length(100)
    sumario: string;
    preco: number;
    paginas: number;
    @Validate(UniqueConstraint)
    ISBN: string;
    @MinDate(new Date(), {message: 'Data de publicação inválida'})
    dataPublicacao: Date;
    @IsString()
    @IsNotEmpty()
    categoria: string;
    autor: Autor;
}
