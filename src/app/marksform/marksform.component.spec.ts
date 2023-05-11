import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksformComponent } from './marksform.component';

describe('MarksformComponent', () => {
  let component: MarksformComponent;
  let fixture: ComponentFixture<MarksformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
