import { TestBed, inject } from '@angular/core/testing';

import { StudyGroupService } from './study-group.service';

describe('StudyGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudyGroupService]
    });
  });

  it('should be created', inject([StudyGroupService], (service: StudyGroupService) => {
    expect(service).toBeTruthy();
  }));
});
