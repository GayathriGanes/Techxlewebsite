import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSolutionsComponent } from './erp-solutions.component';

describe('ErpSolutionsComponent', () => {
  let component: ErpSolutionsComponent;
  let fixture: ComponentFixture<ErpSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
