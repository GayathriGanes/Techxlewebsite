import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceeComponent } from './service.component';

describe('ServiceComponent', () => {
  let component: ServiceeComponent;
  let fixture: ComponentFixture<ServiceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
