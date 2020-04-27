import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsesoriaModalPage } from './asesoria-modal.page';

describe('AsesoriaModalPage', () => {
  let component: AsesoriaModalPage;
  let fixture: ComponentFixture<AsesoriaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoriaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsesoriaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
