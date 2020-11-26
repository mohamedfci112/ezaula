import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsIndexComponent } from './kids-index.component';

describe('KidsIndexComponent', () => {
  let component: KidsIndexComponent;
  let fixture: ComponentFixture<KidsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
