import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypoComponent } from './typo.component';

describe('TextoComponent', () => {
  let component: TypoComponent;
  let fixture: ComponentFixture<TypoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
