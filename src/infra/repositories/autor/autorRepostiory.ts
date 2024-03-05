import { Store } from "../../store";
import { Autor } from "../../../model/autor";
import { IBaseModel } from "../../../model/baseModel";
import { model } from "../repositoryDecorator";
import { BaseRepository } from "../baseRepository";

@model('Autor')
export class AutorRepository extends BaseRepository{
    constructor() { super()}
}