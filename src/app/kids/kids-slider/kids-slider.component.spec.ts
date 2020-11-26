import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsSliderComponent } from './kids-slider.component';

describe('KidsSliderComponent', () => {
  let component: KidsSliderComponent;
  let fixture: ComponentFixture<KidsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
