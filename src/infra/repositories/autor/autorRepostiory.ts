import { Store } from "../../store";
import { Autor } from "../../../model/autor";
import { BaseModel } from "../../../model/baseModel";
export class AutorRepository {
    constructor() {}

    getall(): BaseModel[] {
        return Store.Instance.data['autor'];
    }
    
    insert(autor: Autor): BaseModel {
        if (Store.Instance.data['autor'] === undefined)
            Store.Instance.data['autor'] = [];
        Store.Instance.data['autor'].push(autor);
        Store.Instance.SaveData();
        console.log(this.getall());
        return autor;
    }

    filter(): BaseModel[] {
        return [new BaseModel()];
    }
}