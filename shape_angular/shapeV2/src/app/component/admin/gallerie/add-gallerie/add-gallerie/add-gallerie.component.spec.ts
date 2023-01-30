import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGallerieComponent } from './add-gallerie.component';

describe('AddGallerieComponent', () => {
  let component: AddGallerieComponent;
  let fixture: ComponentFixture<AddGallerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGallerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
