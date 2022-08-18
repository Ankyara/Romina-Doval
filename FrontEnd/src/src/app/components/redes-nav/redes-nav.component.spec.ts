import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesNavComponent } from './redes-nav.component';

describe('RedesNavComponent', () => {
  let component: RedesNavComponent;
  let fixture: ComponentFixture<RedesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
