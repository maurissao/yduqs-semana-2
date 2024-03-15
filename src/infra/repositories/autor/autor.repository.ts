import { Autor } from "../../../model/autor";
import { model } from "../repositoryDecorator";
import { BaseRepository } from "../baseRepository";

@model('Autor')
export class AutorRepository extends BaseRepository{
}
