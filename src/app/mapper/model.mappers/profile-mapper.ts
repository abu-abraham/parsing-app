import { Injectable } from '@angular/core';
import { iMapper, PropertyTypes } from '../common/interfaces';
import { iProfile } from 'src/app/common/interfaces/models/iProfile';

export class ProfileMapperService implements iMapper {

  private profile_map: Map<number, iProfile>;

  constructor() { 
    this.profile_map = new Map();
  }

  public add(value: iProfile, id: number): void {
    this.profile_map.set(id, value); 
  }

  public get(id: number): iProfile {
    return this.profile_map.get(id);
  }

  public getProperty(id: number, property: PropertyTypes): any {
    switch (property){
      case "name": return this.get(id)["abbreviated_name"];
      default: return this.get(id)[property];
    }
  }

  public getAll(): iProfile[] {
    return Array.from(this.profile_map.values());
  }
}
