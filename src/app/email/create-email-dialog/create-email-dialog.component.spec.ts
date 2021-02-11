import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateEmailDialogComponent} from './create-email-dialog.component';

describe('CreateEmailDialogComponent', () => {
  let component: CreateEmailDialogComponent;
  let fixture: ComponentFixture<CreateEmailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmailDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
