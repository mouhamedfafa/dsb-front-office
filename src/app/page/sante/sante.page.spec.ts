import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SantePage } from './sante.page';

describe('SantePage', () => {
  let component: SantePage;
  let fixture: ComponentFixture<SantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
