import {TestBed} from '@angular/core/testing';

import {CreateEmailDialogService} from './create-email-dialog.service';

describe('CreateEmailDialogService', () => {
  let service: CreateEmailDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateEmailDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
