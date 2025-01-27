import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageprocessingComponent } from './imageprocessing.component';

describe('ImageprocessingComponent', () => {
  let component: ImageprocessingComponent;
  let fixture: ComponentFixture<ImageprocessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageprocessingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
