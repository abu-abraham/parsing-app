import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesComponent } from './activities.component';
import { MaterialModule } from '../material';
import { MapperService } from '../mapper/mapper.service';
import { iDisplayObject, iTemplate } from './structs/iDisplay.interface';
import { DisplayObject } from './structs/display.enum';
import { INITIAL_MESSAGE } from '../common/constants';

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  let dataFetcher = (()=>{
    get: return Promise.resolve({
      "activity_feed":["mock"]
    });
  });

  let mapper = new MapperService(<any>dataFetcher);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActivitiesComponent
      ],
      imports: [MaterialModule],
      providers: [
        { provide: MapperService, useValue: mapper }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(mapper, 'generateMap').and.returnValue(Promise.resolve());
    spyOn(mapper, 'getActivites').and.returnValue(["mock", "mock"]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call mapper service on ngInit', async () => {
    spyOn(<any>component, 'extractObjects').and.returnValue(<iDisplayObject[]>[{type:DisplayObject.connector,value:"test"}]);
    component.ngOnInit();
    expect(mapper.generateMap).toHaveBeenCalled();
    await mapper.generateMap()
    expect(mapper.getActivites).toHaveBeenCalled();
  });

  it('should return the initial message if mouse hovered on a connector', ()=>{
    component.onHover(<iDisplayObject>{type: DisplayObject.connector, value:""});
    expect(component.getMessage()).toBe(INITIAL_MESSAGE);
  });

  it('should return the url if mouse hovered on a json', ()=>{
    spyOn(mapper, 'getProperty').and.returnValue("MOCKED");
    component.onHover(<iDisplayObject>{type: DisplayObject.object, value: <iTemplate> {task:12}});
    expect(component.getMessage()).toBe('task/MOCKED');
  });

  it('should return the usual string in uppercase as display value for a connector', ()=>{
    let name = component.getDisplayName(<iDisplayObject>{type: DisplayObject.connector, value:"abc"});
    expect(name).toBe("ABC");
  });

  it('should return the display name based on the ID for a template object', ()=>{
    spyOn(mapper, 'getProperty').and.returnValue("MOCKED");
    let name = component.getDisplayName(<iDisplayObject>{type: DisplayObject.object, value: <iTemplate> {task:12}});
    expect(name).toBe('MOCKED');
  });

  it('should throw error if an unexpected value appears in JSON', ()=>{
    let failed = false;
    try{
      (<any>component).extractObjects(undefined);
    } catch (e) {
      failed = true;
    }
    expect(failed).toBe(true);;
  });

  it('should return the expected array of Activities', ()=>{
    let result : iDisplayObject[];
    result = (<any>component).extractObjects("{task:1991} and {profile:100}");
    expect(result.length).toBe(3);
    expect(result[0].type).toBe(DisplayObject.object);
    expect(result[1].type).toBe(DisplayObject.connector);
  });

  
});
