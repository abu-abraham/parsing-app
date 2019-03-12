import { TestBed } from '@angular/core/testing';

import { MapperService } from './mapper.service';
import { Properties } from '../common/interfaces/models/iResponse';
import { TaskMapperService } from './model.mappers/task-mapper';

describe('MapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapperService = TestBed.get(MapperService);
    expect(service).toBeTruthy();
  });

  it('should return the correct service', () => {
    const service: any = TestBed.get(MapperService);
    const mapper = service.getMapper(Properties.task);
    expect(mapper instanceof TaskMapperService).toBe(true);
  });

  it('should not return a service for invalid input', () => {
    const service = TestBed.get(MapperService);
    const mapper = service.getMapper("");
    expect(mapper).toBe(undefined);
  });

  it('should identify mapper and return expected value', async () => {
    const service = TestBed.get(MapperService);
    spyOn(service.dataFetcher,'get').and.returnValue({"activity_feed":["mock"]});
    await service.generateMap();
    expect(service.getActivites().length).toBe(1);
  });

  it('should identify mapper and return expected value when called later', async () => {
    const service = TestBed.get(MapperService);
    spyOn(service.dataFetcher,'get').and.returnValue({"activity_feed":["mock"],"tasks": [{"name":"testing","id":1}]});
    await service.generateMap();
    const name = service.getProperty(1,Properties.tasks,"name");
    expect(name).toBe("testing");
  });




});
