import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCapabilitiesComponent } from './core-capabilities.component';

describe('CoreCapabilitiesComponent', () => {
  let component: CoreCapabilitiesComponent;
  let fixture: ComponentFixture<CoreCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreCapabilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
