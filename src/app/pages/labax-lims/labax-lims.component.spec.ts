import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabaxLimsComponent } from './labax-lims.component';

describe('LabaxLimsComponent', () => {
  let component: LabaxLimsComponent;
  let fixture: ComponentFixture<LabaxLimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabaxLimsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabaxLimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
