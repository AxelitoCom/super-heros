import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernieresRecruesComponent } from './dernieres-recrues.component';

describe('CarousselComponent', () => {
  let component: DernieresRecruesComponent;
  let fixture: ComponentFixture<DernieresRecruesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DernieresRecruesComponent]
    });
    fixture = TestBed.createComponent(DernieresRecruesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
