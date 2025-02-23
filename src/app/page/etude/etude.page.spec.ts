import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtudePage } from './etude.page';

describe('EtudePage', () => {
  let component: EtudePage;
  let fixture: ComponentFixture<EtudePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
