import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovoAmigoPage } from './novo-amigo.page';

describe('NovoAmigoPage', () => {
  let component: NovoAmigoPage;
  let fixture: ComponentFixture<NovoAmigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAmigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoAmigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
