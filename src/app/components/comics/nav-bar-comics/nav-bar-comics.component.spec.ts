import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComicsComponent } from './nav-bar-comics.component';

describe('NavBarComicsComponent', () => {
  let component: NavBarComicsComponent;
  let fixture: ComponentFixture<NavBarComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
