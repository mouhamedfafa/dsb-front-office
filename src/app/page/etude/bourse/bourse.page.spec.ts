import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoursePage } from './bourse.page';

describe('BoursePage', () => {
  let component: BoursePage;
  let fixture: ComponentFixture<BoursePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
