import { Injectable } from '@angular/core';
import { TaskMapperService } from './model.mappers/task-mapper';
import { LocationMapperService } from './model.mappers/location-mapper';
import { ProfileMapperService } from './model.mappers/profile-mapper';
import { iModel, PropertyTypes, iMapper } from './common/interfaces';
import { DataFetcherService } from '../data/data-fetcher.service';
import { iActivity } from '../common/interfaces/models/iActivity';
import { Properties, iJsonResponse } from '../common/interfaces/models/iResponse';

type Mapper = TaskMapperService | LocationMapperService | ProfileMapperService;

@Injectable({
  providedIn: 'root'
})

export class MapperService {

  private activities: iActivity[];
  private taskMapper: TaskMapperService = new TaskMapperService();
  private locationMapper: LocationMapperService = new LocationMapperService();
  private profileMapper: ProfileMapperService = new ProfileMapperService();

  constructor(
    private dataFetcher: DataFetcherService,
  ) {
    this.activities = new Array();
  }

  private getMapper(key: Properties): Mapper {
    switch (key) {
      case Properties.tasks: return this.taskMapper;
      case Properties.task: return this.taskMapper;
      case Properties.locations: return this.locationMapper;
      case Properties.profiles: return this.profileMapper;
    }
  }

  public async generateMap() {
    const response: iJsonResponse = await this.dataFetcher.get();
    response.activity_feed.forEach((value: iActivity) => {
      this.activities.push(value);
    });
    delete response.activity_feed;
    Object.keys(response).forEach((key : Properties) => {
      (<iModel[]>response[key]).forEach((value: iModel) => {
        (<iMapper>this.getMapper(key)).add(value, value.id);
      })
    });
  }

  public getActivites(): iActivity[] {
    return this.activities;
  }

  public getAll(type: Properties): iModel[] {
    return this.getMapper(type).getAll();
  }

  public getProperty(id: number, type: Properties, property: PropertyTypes) {
    return this.getMapper(type).getProperty(id, property);
  }
}
