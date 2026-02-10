import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelovedCustomerComponent } from './beloved-customer.component';

describe('BelovedCustomerComponent', () => {
  let component: BelovedCustomerComponent;
  let fixture: ComponentFixture<BelovedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BelovedCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BelovedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
