import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BanquePage } from './banque.page';

describe('BanquePage', () => {
  let component: BanquePage;
  let fixture: ComponentFixture<BanquePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BanquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
