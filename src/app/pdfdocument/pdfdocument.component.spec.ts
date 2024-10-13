import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfdocumentComponent } from './pdfdocument.component';

describe('PdfdocumentComponent', () => {
  let component: PdfdocumentComponent;
  let fixture: ComponentFixture<PdfdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfdocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
