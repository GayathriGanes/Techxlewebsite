import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisComponent } from './acquis.component';

describe('AcquisComponent', () => {
  let component: AcquisComponent;
  let fixture: ComponentFixture<AcquisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcquisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcquisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
