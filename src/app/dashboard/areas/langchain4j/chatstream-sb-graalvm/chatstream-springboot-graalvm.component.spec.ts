import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatstreamSpringbootGraalvmComponent } from './chatstream-springboot-graalvm.component';

describe('ChatstreamSpringbootGraalvmComponent', () => {
  let component: ChatstreamSpringbootGraalvmComponent;
  let fixture: ComponentFixture<ChatstreamSpringbootGraalvmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatstreamSpringbootGraalvmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatstreamSpringbootGraalvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
