import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerplatformComponent } from './powerplatform.component';

describe('PowerplatformComponent', () => {
  let component: PowerplatformComponent;
  let fixture: ComponentFixture<PowerplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowerplatformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
