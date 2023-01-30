import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGallerieComponent } from './edit-gallerie.component';

describe('EditGallerieComponent', () => {
  let component: EditGallerieComponent;
  let fixture: ComponentFixture<EditGallerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGallerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
