import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdonsComponent } from './adons.component';

describe('AdonsComponent', () => {
  let component: AdonsComponent;
  let fixture: ComponentFixture<AdonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
