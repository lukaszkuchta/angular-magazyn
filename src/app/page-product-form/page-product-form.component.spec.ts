import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductFormComponent } from './page-product-form.component';

describe('PageProductFormComponent', () => {
  let component: PageProductFormComponent;
  let fixture: ComponentFixture<PageProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProductFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
