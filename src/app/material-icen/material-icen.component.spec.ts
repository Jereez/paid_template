import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialIcenComponent } from './material-icen.component';

describe('MaterialIcenComponent', () => {
  let component: MaterialIcenComponent;
  let fixture: ComponentFixture<MaterialIcenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialIcenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialIcenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
