import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarAmigoPage } from './editar-amigo.page';

describe('EditarAmigoPage', () => {
  let component: EditarAmigoPage;
  let fixture: ComponentFixture<EditarAmigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAmigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAmigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
