import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrandomComponent } from './myrandom.component';

describe('MyrandomComponent', () => {
  let component: MyrandomComponent;
  let fixture: ComponentFixture<MyrandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
