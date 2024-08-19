import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudappComponent } from './cloudapp.component';

describe('CloudappComponent', () => {
  let component: CloudappComponent;
  let fixture: ComponentFixture<CloudappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloudappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
