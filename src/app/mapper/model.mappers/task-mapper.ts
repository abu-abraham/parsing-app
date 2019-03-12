import { Injectable } from '@angular/core';
import { iMapper, PropertyTypes } from '../common/interfaces';
import { iTask } from 'src/app/common/interfaces/models/iTask';


export class TaskMapperService implements iMapper {

  private task_map: Map<number, iTask>;

  constructor() { 
    this.task_map = new Map();
  }

  public add(value: iTask, id: number): void {
    this.task_map.set(id, value); 
  }

  public get(id: number) : iTask {
    return this.task_map.get(id);
  }
  
  public getProperty(id: number, property: PropertyTypes): any {
    return this.get(id)[property];
  }

  public getAll () : iTask[] {
    return Array.from(this.task_map.values());
  }


}
