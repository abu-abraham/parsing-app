import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MaterialModule } from './material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActivitiesComponent
      ],
      imports: [MaterialModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
