import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserCompanyComponent } from './list-user-company.component';

describe('ListUserCompanyComponent', () => {
  let component: ListUserCompanyComponent;
  let fixture: ComponentFixture<ListUserCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
