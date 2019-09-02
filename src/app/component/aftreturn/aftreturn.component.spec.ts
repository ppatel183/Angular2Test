import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AftreturnComponent } from './aftreturn.component';

describe('AftreturnComponent', () => {
  let component: AftreturnComponent;
  let fixture: ComponentFixture<AftreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
