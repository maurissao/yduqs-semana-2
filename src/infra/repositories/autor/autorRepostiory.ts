import { Store } from "../../store";
import { Autor } from "../../../model/autor";
import { BaseModel } from "../../../model/baseModel";
import { Validate, validate } from "class-validator";
export class AutorRepository {
    constructor() {}

    getall(): BaseModel[] {
        return Store.Instance.data['autor'];
    }
    
    insert(autor: Autor): BaseModel {
        try {
            validate(autor).then(e => {
                let errorMessage: string = '';
                e.map(v => {
                    errorMessage += Object.values(v.constraints)[0] + '\n';
                });
                if (errorMessage != '')
                    console.log('Inclusão de dados não passou pela validação:\n' + errorMessage);
                else {
                    if (Store.Instance.data['autor'] === undefined)
                        Store.Instance.data['autor'] = [];
                    Store.Instance.data['autor'].push(autor);
                    Store.Instance.SaveData();
                    return autor;
                }
            })            
        } catch (e) {
            console.log(e);
            return;
        }
        return;
    }

    filter(): BaseModel[] {
        return [new BaseModel()];
    }
}