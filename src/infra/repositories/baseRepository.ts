import { IBaseModel } from "../../model/baseModel";
import { validate } from "class-validator";
import { Store } from "../store";
import "reflect-metadata";

export class DateEx extends Date {
    constructor (...args: []) {
        super(...args);
        // const localDate = new Date(this.getTime() - this.getTimezoneOffset() * 60 * 1000);
        // this.setDate(localDate.getDate());
        // this.setTime(localDate.getTime());
    }

    public Add(value: number): DateEx {
        this.setDate(this.getDate() + value);
        return this;
    }
}

export class BaseRepository {
    constructor () {
        this.#model = Reflect.getMetadata('modelName', this.constructor);
    }

    #model: string;

    insert(Model: IBaseModel) {
        try {
            validate(Model).then(e => {
                let errorMessage: string = '';
                e.map(v => errorMessage += Object.values(v.constraints)[0] + '\n');
                if (errorMessage != '')
                    console.log('Inclusão de dados não passou pela validação:\n' + errorMessage)
                else 
                    Store.Instance.SaveData(this.#model, Model);
            })            
        } catch (e) {
            console.log(e);
        }
    }

    getall(): IBaseModel[] {
        return Store.Instance.GetData(this.#model)
    }
    
    filter(): IBaseModel[] {
        return null;
    }

}