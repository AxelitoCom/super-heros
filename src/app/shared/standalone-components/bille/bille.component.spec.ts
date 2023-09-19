import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilleComponent } from './bille.component';

describe('BilleComponent', () => {
  let component: BilleComponent;
  let fixture: ComponentFixture<BilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilleComponent]
    });
    fixture = TestBed.createComponent(BilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
