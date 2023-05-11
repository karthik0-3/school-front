import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksdetailsComponent } from './marksdetails.component';

describe('MarksdetailsComponent', () => {
  let component: MarksdetailsComponent;
  let fixture: ComponentFixture<MarksdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
