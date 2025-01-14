import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPhotoComponent } from './no-photo.component';

describe('NoPhotoComponent', () => {
  let component: NoPhotoComponent;
  let fixture: ComponentFixture<NoPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
