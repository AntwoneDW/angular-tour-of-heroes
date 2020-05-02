import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotheroesComponent } from './notheroes.component';

describe('NotheroesComponent', () => {
  let component: NotheroesComponent;
  let fixture: ComponentFixture<NotheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
