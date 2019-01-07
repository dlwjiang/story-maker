import { TestBed } from '@angular/core/testing';

import { StoryManagerService } from './story-manager.service';

describe('StoryManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryManagerService = TestBed.get(StoryManagerService);
    expect(service).toBeTruthy();
  });
});
