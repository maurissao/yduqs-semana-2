import { IBaseModel } from "../../model/baseModel";
import { validate } from "class-validator";
import { Store } from "../store";
import "reflect-metadata";

export class BaseRepository {
    constructor () {}

    private GetModelName() {
        const metadata = Reflect.getMetadata('modelName', this.constructor);
        return metadata;
    }

    insert(Model: IBaseModel) {
        return ((model: any) => {
            try {
                validate(Model).then(e => {
                    let errorMessage: string = '';
                    e.map(v => {
                        errorMessage += Object.values(v.constraints)[0] + '\n';
                    });
                    if (errorMessage != '')
                        console.log('Inclusão de dados não passou pela validação:\n' + errorMessage);
                    else {
                        if (Store.Instance.data[model] === undefined)
                            Store.Instance.data[model] = [];
                        Store.Instance.data[model].push(Model);
                        Store.Instance.SaveData();
                        return Model;
                    }
                })            
            } catch (e) {
                console.log(e);
                return;
            }
            return;
    
        })(this.GetModelName());
    }

    getall(): IBaseModel[] {
        return Store.Instance.data[this.GetModelName()];
    }
    
    filter(): IBaseModel[] {
        return null;
    }

}