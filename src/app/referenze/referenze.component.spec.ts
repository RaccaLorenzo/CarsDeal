import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenzeComponent } from './referenze.component';

describe('ReferenzeComponent', () => {
  let component: ReferenzeComponent;
  let fixture: ComponentFixture<ReferenzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenzeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
