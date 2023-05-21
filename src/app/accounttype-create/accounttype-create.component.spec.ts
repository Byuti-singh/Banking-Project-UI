import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounttypeCreateComponent } from './accounttype-create.component';

describe('AccounttypeCreateComponent', () => {
  let component: AccounttypeCreateComponent;
  let fixture: ComponentFixture<AccounttypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccounttypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccounttypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
