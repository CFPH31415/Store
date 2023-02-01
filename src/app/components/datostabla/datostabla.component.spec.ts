import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatostablaComponent } from './datostabla.component';

describe('DatostablaComponent', () => {
  let component: DatostablaComponent;
  let fixture: ComponentFixture<DatostablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatostablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatostablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
