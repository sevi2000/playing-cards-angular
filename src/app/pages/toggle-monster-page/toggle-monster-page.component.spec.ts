import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMonsterPageComponent } from './toggle-monster-page.component';

describe('ToggleMonsterPageComponent', () => {
  let component: ToggleMonsterPageComponent;
  let fixture: ComponentFixture<ToggleMonsterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleMonsterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleMonsterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
