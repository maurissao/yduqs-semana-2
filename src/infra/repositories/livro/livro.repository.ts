import { Autor } from "../../../model/autor";
import { model } from "../repositoryDecorator";
import { BaseRepository } from "../baseRepository";

@model('Livro')
export class LivroRepository extends BaseRepository{
    constructor() { super() }
}
