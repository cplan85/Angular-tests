import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tests');
  });

  it('Should have a router-outlet', ()=> {

    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive( RouterOutlet));

    expect( debugElement).not.toBeNull();
  })

  it('Should have a router-outlet', ()=> {

    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive( RouterOutlet));

    expect( debugElement).not.toBeNull();
  })

  
  it('Should have a link to the medics page', ()=> {

    const fixture = TestBed.createComponent(AppComponent);
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
