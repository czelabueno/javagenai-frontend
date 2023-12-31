import { TestBed } from '@angular/core/testing';

import { ChatstreamSpringbootGraalvmService } from './chatstream-springboot-graalvm.service';

describe('DeviceListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatstreamSpringbootGraalvmService = TestBed.get(ChatstreamSpringbootGraalvmService);
    expect(service).toBeTruthy();
  });
});
