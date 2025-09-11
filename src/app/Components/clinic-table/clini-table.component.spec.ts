import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniTableComponent } from './clini-table.component';

describe('CliniTableComponent', () => {
  let component: CliniTableComponent;
  let fixture: ComponentFixture<CliniTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliniTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliniTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
