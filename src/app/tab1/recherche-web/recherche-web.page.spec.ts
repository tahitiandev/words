import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechercheWebPage } from './recherche-web.page';

describe('RechercheWebPage', () => {
  let component: RechercheWebPage;
  let fixture: ComponentFixture<RechercheWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheWebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
