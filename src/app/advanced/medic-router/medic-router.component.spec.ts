import { Observable, EMPTY, Subject } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicRouterComponent } from './medic-router.component';

import { Router, ActivatedRoute } from '@angular/router';



class FakeRouter {
  navigate( params: any ) { }
}

class FakeActivatedRoute {
 // params: Observable<any> = EMPTY

 private subject = new Subject();

 push (value: any) {
    this.subject.next( value);
 }

 get params() {
  return this.subject.asObservable();
 }
}

describe('MedicRouterComponent', () => {
  let component: MedicRouterComponent;
  let fixture: ComponentFixture<MedicRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicRouterComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to Medic when we save', () => {
   const router = TestBed.get(Router);
   const spy = spyOn( router, 'navigate' );
   component.saveMedic();

   expect( spy ).toHaveBeenCalledWith(['medic', '123'])
  });

  it('The component id should change to new if we pass id: new to activated route', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 'new'});

    expect( component.id).toBe('new')
  })

});
