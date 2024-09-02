import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionbanComponent } from './solutionban.component';

describe('SolutionbanComponent', () => {
  let component: SolutionbanComponent;
  let fixture: ComponentFixture<SolutionbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionbanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
