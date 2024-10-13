import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextprocessingComponent } from './textprocessing.component';

describe('TextprocessingComponent', () => {
  let component: TextprocessingComponent;
  let fixture: ComponentFixture<TextprocessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextprocessingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
