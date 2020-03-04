import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetailComponent } from './tv-detail.component';

describe('TvDetailComponent', () => {
  let component: TvDetailComponent;
  let fixture: ComponentFixture<TvDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
