import "reflect-metadata";
import { IBaseModel } from "../../model/baseModel";
import { Store } from "../store";
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from "class-validator";

export function model(Model: IBaseModel) {
    return function (target: any) {
        Reflect.defineMetadata('modelName', Model, target);
    }
}

@ValidatorConstraint({name: 'customValidation', async: false})
export class UniqueConstraint implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        const state: typeof validationArguments.object[] = Store.Instance.GetData(validationArguments.targetName);        
        return state.filter(e => e[validationArguments.property] === value).length === 0;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'validação de chave unica'
    }
}
