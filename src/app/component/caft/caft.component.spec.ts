import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaftComponent } from './caft.component';

describe('CaftComponent', () => {
  let component: CaftComponent;
  let fixture: ComponentFixture<CaftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
