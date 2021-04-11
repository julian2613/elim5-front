import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeMinionComponent } from './customize-minion.component';

describe('CustomizeMinionComponent', () => {
  let component: CustomizeMinionComponent;
  let fixture: ComponentFixture<CustomizeMinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeMinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeMinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
