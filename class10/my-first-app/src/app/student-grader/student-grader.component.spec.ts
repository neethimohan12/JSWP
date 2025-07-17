import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGraderComponent } from './student-grader.component';

describe('StudentGraderComponent', () => {
  let component: StudentGraderComponent;
  let fixture: ComponentFixture<StudentGraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGraderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
