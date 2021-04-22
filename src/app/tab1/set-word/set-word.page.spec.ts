import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetWordPage } from './set-word.page';

describe('SetWordPage', () => {
  let component: SetWordPage;
  let fixture: ComponentFixture<SetWordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetWordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetWordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
