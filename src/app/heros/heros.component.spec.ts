import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HerosComponent} from './heros.component';
import {HeroContextService} from './hero-context.service';

describe('HerosComponent', () => {
  let component: HerosComponent;
  let fixture: ComponentFixture<HerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerosComponent],
      providers: [HeroContextService]
    });
    fixture = TestBed.createComponent(HerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
