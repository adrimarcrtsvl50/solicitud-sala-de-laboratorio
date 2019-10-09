import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitudsalaComponent } from './solitudsala.component';

describe('SolitudsalaComponent', () => {
  let component: SolitudsalaComponent;
  let fixture: ComponentFixture<SolitudsalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolitudsalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolitudsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
