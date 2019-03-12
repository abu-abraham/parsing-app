import { Component, OnInit } from '@angular/core';
import { iDisplayObject } from './structs/iDisplay.interface';
import { INITIAL_MESSAGE } from '../common/constants';
import { MapperService } from '../mapper/mapper.service';
import { iActivity } from '../common/interfaces/models/iActivity';
import { DisplayObject } from './structs/display.enum';
import { Properties } from '../common/interfaces/models/iResponse';
import { logger } from '../common/config';
import { Logger } from 'typescript-logging';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {

  public rows: iDisplayObject[][] = [];
  public message: string = INITIAL_MESSAGE;
  private log: Logger = logger;

  constructor(private mapperService: MapperService) { }

  async ngOnInit() {
    try {
      await this.mapperService.generateMap();
      const activities: iActivity[] = this.mapperService.getActivites();
      if (activities === undefined || activities.length < 1) {
        this.log.info("No activities found in JSON");
        return;
      }
      activities.forEach((activity: iActivity) => {
        this.rows.push(this.extractObjects(activity.template));
      });
    } catch (e) {
      this.log.warn("Error occured while fetching the JSON");
    }
  }

  private extractObjects(template: string): iDisplayObject[] {
    let display_objects: iDisplayObject[] = [];
    try {
      template = template.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
      while (template.length > 0) {
        if (template.startsWith('{')) {
          const json_string: string = template.substring(template.indexOf('{'), template.indexOf('}') + 1);
          display_objects.push({
            'type': DisplayObject.object,
            'value': JSON.parse(json_string)
          });
          template = template.substring(json_string.length).trim()
        } else {
          const connector_string: string = template.substring(0, template.indexOf('{') < 0 ? template.length : template.indexOf('{'))
          display_objects.push({
            'type': DisplayObject.connector,
            'value': connector_string
          });
          template = template.substring(connector_string.length).trim()
        }
      }
    } catch(e) {
      this.log.warn("Invalid JSON format");
      throw e;
    }
    return display_objects;
  }

  public getMessage(): string {
    return this.message;
  }

  public getDisplayName(display_object: iDisplayObject): string {
    if (display_object.type === DisplayObject.object)
      return this.mapperService.getProperty(Object.values(display_object.value)[0], <Properties>Object.keys(display_object.value)[0], "name");
    return (<string>display_object.value).toUpperCase();
  }

  public onHover(display_object: iDisplayObject): void {
    if (display_object.type === DisplayObject.object) {
      this.message = (Object.keys(display_object.value)[0] + "/" + this.mapperService.getProperty(<number>Object.values(display_object.value)[0],
        <Properties>Object.keys(display_object.value)[0], "slug"));
    } else {
      this.message = INITIAL_MESSAGE;
    }
  }
}
