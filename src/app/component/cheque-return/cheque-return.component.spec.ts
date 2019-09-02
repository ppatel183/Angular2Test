import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeReturnComponent } from './cheque-return.component';

describe('ChequeReturnComponent', () => {
  let component: ChequeReturnComponent;
  let fixture: ComponentFixture<ChequeReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
