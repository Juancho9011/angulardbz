import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzlistComponent } from './dbzlist.component';

describe('DbzlistComponent', () => {
  let component: DbzlistComponent;
  let fixture: ComponentFixture<DbzlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbzlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbzlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
