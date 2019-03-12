import { Injectable } from '@angular/core';
import { iMapper, PropertyTypes } from '../common/interfaces';
import { iLocation } from 'src/app/common/interfaces/models/iLocation';

export class LocationMapperService implements iMapper {

  private location_map: Map<number, iLocation>;

  constructor() { 
    this.location_map = new Map();
  }

  public add(value: iLocation, id: number): void {
    this.location_map.set(id, value); 
  }

  public get(id: number): iLocation {
    return this.location_map.get(id);
  }

  public getProperty(id: number, property: PropertyTypes): any {
    return this.get(id)[property];
  }

  public getAll(): iLocation[] {
    return  Array.from(this.location_map.values());
  }

}
