import { IBaseModel } from "src/model/baseModel";
import "reflect-metadata";

export function model(Model: string) {
    return function (target: any) {
        Reflect.defineMetadata('modelName', Model, target);
    }
}