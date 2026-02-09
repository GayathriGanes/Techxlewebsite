import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndustriesComponent } from './home-industries.component';

describe('HomeIndustriesComponent', () => {
  let component: HomeIndustriesComponent;
  let fixture: ComponentFixture<HomeIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeIndustriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
