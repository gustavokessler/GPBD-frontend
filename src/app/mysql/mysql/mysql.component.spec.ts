/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NosqlComponent } from './nosql.component';

describe('NosqlComponent', () => {
  let component: NosqlComponent;
  let fixture: ComponentFixture<NosqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
