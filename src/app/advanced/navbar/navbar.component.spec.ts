import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have a link to the medics page', ()=> {

    const elements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let exist = false;

    for (const elem of elements) {
      if (elem.attributes['routerLink'] === '/medicos') {
        exist = true;
        break;
      }
    }

    expect( exist).toBeTruthy();
  })
});
