import { DisplayObject } from "./display.enum";

export interface iTemplate {
    task?: number,
    profiles?: number[],
    location?: number
}
  
export interface iDisplayObject {
  type: DisplayObject,
  value: iTemplate | string
}