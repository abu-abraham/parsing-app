import { iProfile } from "src/app/common/interfaces/models/iProfile";
import { iTask } from "src/app/common/interfaces/models/iTask";
import { iLocation } from "src/app/common/interfaces/models/iLocation";

export interface iMapper {
    add(value: iModel, id: number): void,
    get(id: number): iModel,
    getAll(): iModel[]
    getProperty(id: number, property: PropertyTypes): iModel;
    
}

export type iModel = iProfile | iTask | iLocation ;
export type PropertyTypes = "name" | "slug";