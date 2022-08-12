import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCodoComponent } from './logo-codo.component';

describe('LogoCodoComponent', () => {
  let component: LogoCodoComponent;
  let fixture: ComponentFixture<LogoCodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
